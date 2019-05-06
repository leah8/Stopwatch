import React, { Component } from 'react';

class Timer extends Component {

    constructor() {

        super();

        this.state = {
            secondsElapsed: 0,
            minutesElapsed: 0, 
            msElapsed: 0
        }

        this.handleStartClick = this.handleStartClick.bind(this);
        this.handleStopClick = this.handleStopClick.bind(this);
    }

    render() { 
        return (
            <div>
            <h2>{this.getMinutes()}:{this.getSeconds()}:{this.getMS()}</h2>
            <button onClick={this.handleStartClick}>start</button>
            <button onClick={this.handleStopClick}>stop</button>
            </div>
        )
    } 

    getMS() {
        return ('0' + this.state.msElapsed % 1000).slice(-2);
    }

    getSeconds() {
        return ('0' + Math.floor('0' + (this.state.msElapsed / 100) % 60 )).slice(-2);
    }

    getMinutes() {
        return ('0' + Math.floor('0' + this.state.msElapsed / 6000)).slice(-2);
    }

    // componentWillMount() {
    //     setInterval( ()=>this.currentTime(), 10)
    // }

    handleStartClick() {
        var _this = this;
        this.incrementer = setInterval(function () {
            _this.setState({
                msElapsed: (_this.state.msElapsed + 1)
            })
        }, 10)
    }

    handleStopClick() {
        clearInterval(this.incrementer);
    }

    currentTime() {
        this.setState( {msElapsed: this.state.msElapsed + 1} )
    }
}

export default Timer
