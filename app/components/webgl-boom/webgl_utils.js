class WebGLUtils {
    constructor(container, canvas) {
        this.container = container;
        this.canvas = canvas;
        this.width = container.clientWidth;
        this.height = container.clientHeight;

        this.drawType = 2;
        this.count = 0;
        this.cn = 0;
        
        this.initWebGL();
        this.setup();
        this.animate();
        setTimeout(() => {
            this.timer();
        }, 1500);
    }

    flushWebGLViewPortProps(aNewWidth, aNewHeight) {
        this.width = aNewWidth;
        this.height = aNewHeight;

        var canvas = this.canvas, gl = this.gl;
        canvas.width = this.width;
        canvas.height = this.height;
        gl.viewport(0, 0, canvas.width, canvas.height);
    }

    initWebGL() {
        this.gl = this.canvas.getContext("experimental-webgl");
        if (!this.gl) {
            alert("There's no WebGL context available.");
            return;
        }
        var canvas = this.canvas, gl = this.gl;

        this.flushWebGLViewPortProps(this.width, this.height);
        /*
        canvas.width = this.width;
        canvas.height = this.height;
        gl.viewport(0, 0, canvas.width, canvas.height);
        */

        var vertexShader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vertexShader, WebGLUtils.VERTEX_SCRIPT);
        gl.compileShader(vertexShader);
        if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
            alert("Couldn't compile the vertex shader");
            gl.deleteShader(vertexShader);
            return;
        }

        var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(fragmentShader, WebGLUtils.FRAGMENT_SCRIPT);
        gl.compileShader(fragmentShader);
        if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
            alert("Couldn't compile the fragment shader");
            gl.deleteShader(fragmentShader);
            return;
        }

        gl.program = gl.createProgram();
        gl.attachShader(gl.program, vertexShader);
        gl.attachShader(gl.program, fragmentShader);
        gl.linkProgram(gl.program);
        if (!gl.getProgramParameter(gl.program, gl.LINK_STATUS)) {
            alert("Unable to initialise shaders");
            gl.deleteProgram(gl.program);
            gl.deleteProgram(vertexShader);
            gl.deleteProgram(fragmentShader);
            return;
        }
        gl.useProgram(gl.program);
        var vertexPosition = gl.getAttribLocation(gl.program, "vertexPosition");
        gl.enableVertexAttribArray(vertexPosition);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clearDepth(1.0);
        gl.enable(gl.BLEND);
        gl.disable(gl.DEPTH_TEST);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
    }

    setup() {
        var vertices = [];
        var velThetaArr = [];
        var velRadArr = [];
        var thetaArr = [];
        var freqArr = [];
        var randomTargetXArr = [];
        var randomTargetYArr = []

        for (let i = 0; i < WebGLUtils.NUM_LINES; i++) {
            var rad = ( 0.1 + .2 * Math.random() );
            var theta = Math.random() * Math.PI * 2;
            var velTheta = Math.random() * Math.PI * 2 / 30;
            var freq = Math.random() * 0.12 + 0.03;
            var boldRate = Math.random() * .04 + .01;
            var randomPosX = (Math.random() * 2  - 1) * this.width / this.height;
            var randomPosY = Math.random() * 2 - 1;

            vertices.push(rad * Math.cos(theta), rad * Math.sin(theta), 1.83);
            vertices.push(rad * Math.cos(theta), rad * Math.sin(theta), 1.83);

            thetaArr.push(theta);
            velThetaArr.push(velTheta);
            velRadArr.push(rad);
            freqArr.push(freq);

            randomTargetXArr.push(randomPosX);
            randomTargetYArr.push(randomPosY);
        }

        this.vertices = new Float32Array(vertices);

        this.thetaArr = new Float32Array(thetaArr);
        this.velThetaArr = new Float32Array(velThetaArr);
        this.velRadArr = new Float32Array(velRadArr);

        this.freqArr = new Float32Array(freqArr);

        this.randomTargetXArr = randomTargetXArr;
        this.randomTargetYArr = randomTargetYArr;

        var canvas = this.canvas, gl = this.gl;
        var vertexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.DYNAMIC_DRAW);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        var fieldOfView = 30.0;
        var aspectRatio = canvas.width / canvas.height;
        var nearPlane = 1.0;
        var farPlane = 10000.0;
        var top = nearPlane * Math.tan(fieldOfView * Math.PI / 360.0);
        var bottom = -top;
        var right = top * aspectRatio;
        var left = -right;

        var a = (right + left) / (right - left);
        var b = (top + bottom) / (top - bottom);
        var c = (farPlane + nearPlane) / (farPlane - nearPlane);
        var d = (2 * farPlane * nearPlane) / (farPlane - nearPlane);
        var x = (2 * nearPlane) / (right - left);
        var y = (2 * nearPlane) / (top - bottom);
        var perspectiveMatrix = [
            x, 0, a, 0,
            0, y, b, 0,
            0, 0, c, d,
            0, 0, -1, 0
        ];

        var modelViewMatrix = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ];
        var vertexPosAttribLocation = gl.getAttribLocation(gl.program, "vertexPosition");
        gl.vertexAttribPointer(vertexPosAttribLocation, 3.0, gl.FLOAT, false, 0, 0);
        var uModelViewMatrix = gl.getUniformLocation(gl.program, "modelViewMatrix");
        var uPerspectiveMatrix = gl.getUniformLocation(gl.program, "perspectiveMatrix");
        gl.uniformMatrix4fv(uModelViewMatrix, false, new Float32Array(perspectiveMatrix));
        gl.uniformMatrix4fv(uPerspectiveMatrix, false, new Float32Array(modelViewMatrix));
    }

    animate() {
        window.requestAnimationFrame(() => {
            this.animate();
        });

        this.drawScene();
    }

    drawScene() {
        this.draw();

        var gl = this.gl;
        gl.lineWidth(1);
        gl.bufferData(gl.ARRAY_BUFFER, this.vertices, gl.DYNAMIC_DRAW);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.clearColor(8 / 255.0, 24 / 255.0, 37 / 255.0, 1.0);
      
        gl.drawArrays(gl.LINES, 0, WebGLUtils.NUM_LINES);

        gl.flush();
    }

    draw() {
        switch (this.drawType) {
            case 0:
              this.drawType0();
              break;
            case 1:
              this.drawType1();
              break;
            case 2:
              this.drawType2();
              break;
          }
    }

    drawType0() {
        var i, n = this.vertices.length, p, bp;
        var px, py;
        var pTheta;
        var rad;
        var num;
        var targetX, targetY;

        for (let i = 0; i < WebGLUtils.NUM_LINES * 2; i += 2) {
            this.count += .3;
            bp = i * 3;

            this.vertices[bp] = this.vertices[bp + 3];
            this.vertices[bp + 1] = this.vertices[bp + 4];

            num = parseInt(i / 2);
            targetX = this.randomTargetXArr[num];
            targetY = this.randomTargetYArr[num];


            px = this.vertices[bp + 3];
            px += (targetX - px) * (Math.random() * .04 + .06);
            this.vertices[bp + 3] = px;


            py = this.vertices[bp + 4];
            py += (targetY - py) * (Math.random() * .04 + .06);
            this.vertices[bp + 4] = py;

        }
    }

    drawType1() {
        var i, n = this.vertices.length, p, bp;
        var px, py;
        var pTheta;
        var rad;
        var num;
        var targetX, targetY;
      
        for (let i = 0; i < WebGLUtils.NUM_LINES * 2; i += 2) {
          this.count += .3;
          bp = i * 3;
      
          this.vertices[bp] = this.vertices[bp + 3];
          this.vertices[bp + 1] = this.vertices[bp + 4];
      
          num = parseInt(i / 2);
          pTheta = this.thetaArr[num];
          rad = this.velRadArr[num];
      
          pTheta = pTheta + this.velThetaArr[num];
          this.thetaArr[num] = pTheta;
      
          targetX = rad * Math.cos(pTheta);
          targetY = rad * Math.sin(pTheta);
      
          px = this.vertices[bp + 3];
          px += (targetX - px) * (Math.random() * .1 + .1);
          this.vertices[bp + 3] = px;
      
      
          py = this.vertices[bp + 4];
          py += (targetY - py) * (Math.random() * .1 + .1);
          this.vertices[bp + 4] = py;
        } 
    }

    drawType2() {
        this.cn += .1;

        var i, n = this.vertices.length, p, bp;
        var px, py;
        var pTheta;
        var rad;
        var num;

        for (let i = 0; i < WebGLUtils.NUM_LINES * 2; i += 2) {
            this.count += .3;
            bp = i * 3;

            this.vertices[bp] = this.vertices[bp + 3];
            this.vertices[bp + 1] = this.vertices[bp + 4];

            num = parseInt(i / 2);
            pTheta = this.thetaArr[num];

            rad = this.velRadArr[num];

            pTheta = pTheta + this.velThetaArr[num];
           this. thetaArr[num] = pTheta;

            px = this.vertices[bp + 3];
            px = rad * Math.cos(pTheta) * 0.1 + px;
            this.vertices[bp + 3] = px;

            py = this.vertices[bp + 4];

            py = py + rad * Math.sin(pTheta) * 0.1;
            this.vertices[bp + 4] = py;
        }
    }

    timer() {
        this.drawType = (this.drawType + 1) % 3;

        setTimeout(() => {
            this.timer();
        }, 1500);
    }
}

WebGLUtils.NUM_LINES = 40000;
WebGLUtils.VERTEX_SCRIPT = `
    attribute vec3 vertexPosition;

    uniform mat4 modelViewMatrix;
    uniform mat4 perspectiveMatrix;

    void main(void) {
        gl_Position = perspectiveMatrix * modelViewMatrix * vec4(vertexPosition, 1.0);
    }
`;
WebGLUtils.FRAGMENT_SCRIPT = `
    #ifdef GL_ES
    precision highp float;
    #endif

    void main(void) {
        gl_FragColor = vec4(0.2, 0.3, 0.4, 1.0);
    }
`;

export default WebGLUtils;