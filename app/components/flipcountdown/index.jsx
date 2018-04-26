import React from 'react';
import ReactDOM from 'react-dom';

import './style/index.less';

class FlipCountdown extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            update: false,
        }

        this.clockBoxs = {
            hour: [],
            minute: [],
            second: []
        };
        this.initClock();
    }

    initClock(animated=false) {
        this.newDate = new Date();

        var parseResult = this.parseTime(Number.parseInt((this.props.countdown - this.newDate) / 1000));
        if (animated) {
            var hourLen = this.clockBoxs.hour.length;
            if (hourLen > parseResult.hour.length) {
                var oldHour = this.clockBoxs.hour;
                this.clockBoxs.hour = [];
                for (let i = 0; i < parseResult.hour.length; i++) {
                    this.clockBoxs.hour.push(oldHour[hourLen - parseResult.hour.length + i]);
                }
            }
            for (let i = 0; i < parseResult.hour.length; i++) {
                let start = parseResult.hour[i];
                if (start == 0) {
                    start = 9;
                } else if (start == 9) {
                    start = 0
                } else {
                    start = start - 1;
                }
                this.animateRange(this.clockBoxs.hour[i], start, parseResult.hour[i]);
            }
            for (let i = 0; i < parseResult.minute.length; i++) {
                let start = parseResult.minute[i];
                if (start == 0) {
                    start = 9;
                } else if (start == 9) {
                    start = 0
                } else {
                    start = start - 1;
                }
                this.animateRange(this.clockBoxs.minute[i], start, parseResult.minute[i]);
            }
            for (let i = 0; i < parseResult.second.length; i++) {
                let start = parseResult.second[i];
                if (start == 0) {
                    start = 9;
                } else if (start == 9) {
                    start = 0
                } else {
                    start = start - 1;
                }
                this.animateRange(this.clockBoxs.second[i], start, parseResult.second[i]);
            }
        } else {
            for (let i = 0; i < parseResult.hour.length; i++) {
                this.clockBoxs.hour.push({backgroundPosition: '0px 0px'});
            }
            for (let i = 0; i < parseResult.minute.length; i++) {
                this.clockBoxs.minute.push({backgroundPosition: '0px 0px'});
            }
            for (let i = 0; i < parseResult.second.length; i++) {
                this.clockBoxs.second.push({backgroundPosition: '0px 0px'});
            }
        }
    }

    parseTime(timeInSec) {
        if (timeInSec <= 0) {
            return {
                hour: [0, 0],
                minute: [0, 0],
                second: [0, 0]
            };
        } else {
            const MINUTE = 60;
            const HOUR = 60 * MINUTE;
            var second = timeInSec % MINUTE;
            var minute = Number.parseInt(timeInSec / MINUTE) % MINUTE;
            var hour = Number.parseInt(timeInSec / HOUR);
            var hourArr = [], minuteArr = [], secondArr = [];
            for (let s of String(hour)) {
                hourArr.push(Number.parseInt(s));
            }
            if (minute < 10) {
                minuteArr.push(0);
            }
            for (let s of String(minute)) { 
                minuteArr.push(Number.parseInt(s));
            }
            if (second < 10) {
                secondArr.push(0);
            }
            for (let s of String(second)) {
                secondArr.push(Number.parseInt(s));
            }

            return {
                hour: hourArr,
                minute: minuteArr,
                second: secondArr
            };
        }
    }

    componentDidMount() {
        this.initClock(true);

        this.updateInterval = setInterval(() => {
            var oldUpdated = this.state.update;
            this.setState({
                update: !oldUpdated
            });
        }, Number.parseInt(60 / 9));

        this.countdownInterval = setInterval(() => {
            this.oldDate = this.newDate;
            this.newDate = new Date();

            var oldParseResult = this.parseTime(Number.parseInt((this.props.countdown - this.oldDate) / 1000));
            var parseResult = this.parseTime(Number.parseInt((this.props.countdown - this.newDate) / 1000));

            var hourLen = this.clockBoxs.hour.length;
            if (hourLen > parseResult.hour.length) {
                var oldHour = this.clockBoxs.hour;
                this.clockBoxs.hour = [];
                for (let i = 0; i < parseResult.hour.length; i++) {
                    this.clockBoxs.hour.push(oldHour[hourLen - parseResult.hour.length + i]);
                }
            }
            var oldHourLen = oldParseResult.hour.length;
            for (let i = 0; i < parseResult.hour.length; i++) {
                if (oldParseResult.hour[oldHourLen - parseResult.hour.length + i] != parseResult.hour[i]) {
                    this.animateRange(this.clockBoxs.hour[i], oldParseResult.hour[oldHourLen - parseResult.hour.length + i], parseResult.hour[i]);
                }
            }
            for (let i = 0; i < parseResult.minute.length; i++) {
                if (oldParseResult.minute[i] != parseResult.minute[i]) {
                    this.animateRange(this.clockBoxs.minute[i], oldParseResult.minute[i], parseResult.minute[i]);
                }
            }
            for (let i = 0; i < parseResult.second.length; i++) {
                if (oldParseResult.second[i] != parseResult.second[i]) {
                    this.animateRange(this.clockBoxs.second[i], oldParseResult.second[i], parseResult.second[i]);
                }
            }
        }, 1000);
    }

    componentWillUnmount() {
        if (this.updateInterval) {
            clearInterval(this.updateInterval);
            this.updateInterval = null;
        }
        if (this.countdownInterval) {
            clearInterval(this.countdownInterval);
            this.countdownInterval = null;
        }
    }

    animateRange(box, a, b) {
        this.animateOne(box, a, (a>b&&!(a==9&&b==0))?-1:1, !(a==0&&b==0)?Math.abs(a-b):1);
    }

    animateOne(box, a, arrow, range) {
        if (range <1) {
            return ;
        }

        if (range > 1 ) {
            this.setMarginEx(box, -(a * 6 * FlipCountdown.SIZES[this.props.size] + 1), 1, arrow, () => {
            }, range);
        } else {
            this.setMargin(box, -(a * 6 * FlipCountdown.SIZES[this.props.size]+1), 1, arrow, () => {
                this.animateOne(box, a + arrow, arrow, range - 1);
            }, range);
        }
    }

    setMarginEx(box, marginTop, rec, arrow, callback, range) {
        if (marginTop <= -FlipCountdown.SIZES[this.props.size] * 60) {
            marginTop = -1;
        }

        box.backgroundPosition = '0px ' + marginTop + 'px';

        if (range > 0) {
            setTimeout(() => {
                this.setMarginEx(box, marginTop - arrow * 6 * FlipCountdown.SIZES[this.props.size], rec, arrow, callback, range - 1);
            }, Number.parseInt(60));
        }
    }

    setMargin(box, marginTop, rec, arrow, callback, range) {
        if (marginTop <= -FlipCountdown.SIZES[this.props.size] * 60) {
            marginTop = -1;
        }

        box.backgroundPosition = '0px ' + marginTop + 'px';

        if (rec <= 6) {
            setTimeout(() => {
                this.setMargin(box, marginTop - arrow * FlipCountdown.SIZES[this.props.size], ++rec, arrow, callback, range);
            }, Number.parseInt(60 / range));
        } else {
            callback();
        }
    }

    renderHour() {
        var hourHtml = [];
        var hourBoxs = this.clockBoxs.hour;
        for (let i = 0; i < hourBoxs.length; i++) {
            if (hourBoxs[i].backgroundPosition) {
                hourHtml.push(<div key={'hour'+i} className='digit' style={{
                    backgroundPosition: hourBoxs[i].backgroundPosition
                }}></div>);
            } else {
                hourHtml.push(<div key={'hour' + i} className='digit'></div>);
            }
        }
        return hourHtml;
    }

    renderMinute() {
        var minuteHtml = [];
        var minuteBoxs = this.clockBoxs.minute;
        for (let i = 0; i < minuteBoxs.length; i++) {
            if (minuteBoxs[i].backgroundPosition) {
                minuteHtml.push(<div key={'minute'+i} className='digit' style={{
                    backgroundPosition: minuteBoxs[i].backgroundPosition
                }}></div>);
            } else {
                minuteHtml.push(<div key={'minute'+i} className='digit'></div>);
            }
        }
        return minuteHtml;
    }

    renderSecond() {
        var secondHtml = [];
        var secondBoxs = this.clockBoxs.second;
        for (let i = 0; i < secondBoxs.length; i++) {
            if (secondBoxs[i].backgroundPosition) {
                secondHtml.push(<div key={'second'+i} className='digit' style={{
                    backgroundPosition: secondBoxs[i].backgroundPosition
                }}></div>);
            } else {
                secondHtml.push(<div key={'second'+i} className='digit'></div>);
            }
        }
        return secondHtml;
    }

    render() {
        const sizeStyle = 'size_' + this.props.size;
        return (
            <div className={`${this.props.className} ${sizeStyle}`}>
                { this.renderHour() }
                <div className='digit separator'></div>
                { this.renderMinute() }
                <div className='digit separator'></div>
                { this.renderSecond() }
                <div className='clearex'></div>
            </div>
        )
    }
}

FlipCountdown.defaultProps = {
    className: 'flipcountdown',
    size: 'md',
    countdown: new Date(),
}

FlipCountdown.SIZES = {
    lg: 77,
    md: 52,
    sm: 35,
    xs: 24
}

export default FlipCountdown;