import React from 'react';
import ReactDOM from 'react-dom';

class Particle {
    constructor(center) {
        this.center = center;
        this.init();
    }

    flushCenter(aNewCenter) {
        this.center = aNewCenter;
    }

    init() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.vx = 0;
        this.vy = 0;
        this.vz = 0;
        this.color;
    }

    setAxis(axis) {
        this.translating = true;
        this.nextX = axis.x;
        this.nextY = axis.y;
        this.nextZ = axis.z;
        this.hue = axis.hue;
    }

    rotateX(angle) {
        let sin = Math.sin(angle);
        let cos = Math.cos(angle);
        let nextY = this.nextY * cos - this.nextZ * sin;
        let nextZ = this.nextZ * cos + this.nextY * sin;
        let y = this.y * cos - this.z * sin;
        let z = this.z * cos + this.y * sin;

        this.nextY = nextY;
        this.nextZ = nextZ;
        this.y = y;
        this.z = z;
    }

    rotateY(angle) {
        let sin = Math.sin(angle);
        let cos = Math.cos(angle);
        let nextX = this.nextX * cos - this.nextZ * sin;
        let nextZ = this.nextZ * cos + this.nextX * sin;
        let x = this.x * cos - this.z * sin;
        let z = this.z * cos + this.x * sin;

        this.nextX = nextX;
        this.nextZ = nextZ;
        this.x = x;
        this.z = z;
    }

    rotateZ(angle) {
        let sin = Math.sin(angle);
        let cos = Math.cos(angle);
        let nextX = this.nextX * cos - this.nextY * sin;
        let nextY = this.nextY * cos + this.nextX * sin;
        let x = this.x * cos - this.y * sin;
        let y = this.y * cos + this.x * sin;

        this.nextX = nextX;
        this.nextY = nextY;
        this.x = x;
        this.y = y;
    }

    getAxis3D() {
        this.vx += (this.nextX - this.x) * Particle.SPRING;
        this.vy += (this.nextY - this.y) * Particle.SPRING;
        this.vz += (this.nextZ - this.z) * Particle.SPRING;

        this.vx *= Particle.FRICTION;
        this.vy *= Particle.FRICTION;
        this.vz *= Particle.FRICTION;

        this.x += this.vx;
        this.y += this.vy;
        this.z += this.vz;

        return { x: this.x, y: this.y, z: this.z };
    }

    getAxis2D(theta) {
        let axis = this.getAxis3D();
        let scale = Particle.FOCUS_POSITION / (Particle.FOCUS_POSITION + axis.z);

        return { 
            x: this.center.x + axis.x * scale, 
            y: this.center.y - axis.y * scale,
            color: Particle.COLOR.replace('%hue', this.hue + theta)
        };
    }
}

Particle.SPRING = 0.01;
Particle.FRICTION = 0.9;
Particle.FOCUS_POSITION = 300;
Particle.COLOR = 'hsl(%hue, 100%, 70%)';

class Strategy {
    getStrategies() {
        let strategies = [];
        /*
        for (let i in this) {
            if (this[i] == arguments.callee || typeof this[i] != 'function') {
                continue;
            }
    
            strategies.push(this[i].bind(this));
        }
        */
        strategies.push(this.createSphere.bind(this));
        // strategies.push(this.createTorus.bind(this));
        // strategies.push(this.createCone.bind(this));
        // strategies.push(this.createVase.bind(this));

        return strategies;
    }
    createSphere() {
        let cosTheta = Math.random() * 2 - 1;
        let sinTheta = Math.sqrt(1 - cosTheta * cosTheta);
        let phi = Math.random() * 2 * Math.PI;

        return {
            x: Strategy.SCATTER_RADIUS * sinTheta * Math.cos(phi),
            y: Strategy.SCATTER_RADIUS * sinTheta * Math.sin(phi),
            z: Strategy.SCATTER_RADIUS * cosTheta,
            hue: Math.round(phi / Math.PI * 30),
        };
    }

    createTorus() {
        let theta = Math.random() * Math.PI * 2;
        let x = Strategy.SCATTER_RADIUS + Strategy.SCATTER_RADIUS / 6 * Math.cos(theta);
        let y = Strategy.SCATTER_RADIUS / 6 * Math.sin(theta);
        let phi = Math.random() * Math.PI * 2;

        return {
            x: x * Math.cos(phi),
            y: y,
            z: x * Math.sin(phi),
            hue: Math.round(phi / Math.PI * 30)
        };
    }

    createCone() {
        let status = Math.random() > 1 / 3;
        let x, y, phi = Math.random() * Math.PI * 2;
        let rate = Math.tan(30 / 180 * Math.PI) / Strategy.CONE_ASPECT_RATIO;

        if (status) {
            y = Strategy.SCATTER_RADIUS * (1 - Math.random() * 2);
            x = (Strategy.SCATTER_RADIUS - y) * rate;
        } else {
            y = -Strategy.SCATTER_RADIUS;
            x = Strategy.SCATTER_RADIUS * 2 * rate * Math.random();
        }

        return {
            x: x * Math.cos(phi),
            y: y,
            z: x * Math.sin(phi),
            hue: Math.round(phi / Math.PI * 30)
        };
    }

    createVase() {
        let theta = Math.random() * Math.PI;
        let x = Math.abs(Strategy.SCATTER_RADIUS * Math.cos(theta) / 2) + Strategy.SCATTER_RADIUS / 8;
        let y = Strategy.SCATTER_RADIUS * Math.cos(theta) * 1.2;
        let phi = Math.random() * Math.PI * 2;

        return {
            x: x * Math.cos(phi),
            y: y,
            z: x * Math.sin(phi),
            hue: Math.random(phi / Math.PI * 30)
        };
    }
}

Strategy.SCATTER_RADIUS = 150;
Strategy.CONE_ASPECT_RATIO = 1.5;
Strategy.RING_COUNT = 5;

class Renderer extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    init(strategy) {
        this.setParameters(strategy);
        this.createParticles();
        this.setupFigure();
        this.reconstructMethod();
        this.bindEvent();
        this.drawFigure();
    }

    setParameters(strategy) {
        let particleContainer = ReactDOM.findDOMNode(this.refs.particle_container);
        this.width = particleContainer.clientWidth;
        this.height = particleContainer.clientHeight;

        let canvas = ReactDOM.findDOMNode(this.refs.canvas);
        canvas.width = this.width;
        canvas.height = this.height;
        this.canvas = canvas;
        this.context = canvas.getContext('2d');

        this.center = {
            x: this.width / 2,
            y: this.height / 2,
        };
        this.rotationX = Renderer.MAX_ROTATION_ANGLE;
        this.rotationY = Renderer.MAX_ROTATION_ANGLE;
        this.strategyIndex = 0;
        this.translationCount = 0;
        this.theta = 0;

        this.strategies = strategy.getStrategies();
        this.particles = [];
    }

    createParticles() {
        for (let i = 0; i < Renderer.PARTICLE_COUNT; i++) {
            this.particles.push(new Particle(this.center));
        }
    }

    reconstructMethod() {
        this.setupFigure = this.setupFigure.bind(this);
        this.drawFigure = this.drawFigure.bind(this);
        this.changeAngle = this.changeAngle.bind(this);
    }

    bindEvent() {

    }

    changeAngle(event) {

    }

    setupFigure() {
        for (let i = 0, length = this.particles.length; i < length; i++) {
            this.particles[i].setAxis(this.strategies[this.strategyIndex]());
        }
        if (++this.strategyIndex == this.strategies.length) {
            this.strategyIndex = 0;
        }
        this.translationCount = 0;
    }

    drawFigure() {
        window.requestAnimationFrame(this.drawFigure);

        this.context.fillStyle = 'rgba(0, 0, 0, 0.2)';
        this.context.fillRect(0, 0, this.width, this.height);

        for (let i = 0, length = this.particles.length; i < length; i++) {
            let axis = this.particles[i].getAxis2D(this.theta);
            this.context.beginPath();
            this.context.fillStyle = axis.color;
            this.context.arc(axis.x, axis.y, Renderer.PARTICLE_RADIUS, 0, Math.PI * 2, false);
            this.context.fill();
        }

        this.theta++;
        this.theta %= 360;

        for (let i = 0, length = this.particles.length; i < length; i++) {
            this.particles[i].rotateX(this.rotationX);
            this.particles[i].rotateY(this.rotationY);
        }
        this.translationCount++;
        this.translationCount %= Renderer.TRANSLATION_COUNT;

        if (this.translationCount == 0) {
            this.setupFigure();
        }
    }

    componentDidMount() {
        this.init(new Strategy());
    }

    componentWillReceiveProps(newProps) {
        this.width = newProps.width;
        this.height = newProps.height;

        this.canvas.width = this.width;
        this.canvas.height = this.height;

        this.center = {
            x: this.width / 2,
            y: this.height / 2,
        };
        if (this.particles) {
            for (let particle of this.particles) {
                particle.flushCenter(this.center);
            }
        }
    }

    render() {
        const style = {
            width: this.props.width,
            height: this.props.height,
            margin: '0',
            padding: '0',
            backgroundColor: '#000',
            position: 'absolute'
        };

        return (
            <div ref='particle_container' style={style}>
                <canvas ref='canvas'></canvas>
                <div style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: '0',
                    backgroundColor: 'rgba(0, 0, 0, 0.2)'
                }}></div>
            </div>
        )
    }
}

Renderer.PARTICLE_COUNT = 1000;
Renderer.PARTICLE_RADIUS = 1;
Renderer.MAX_ROTATION_ANGLE = Math.PI / 60;
Renderer.TRANSLATION_COUNT = 500;

Renderer.defaultProps = {
    width: '100%',
    height: '663px',
}

export default Renderer;