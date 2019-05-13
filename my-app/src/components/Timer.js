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
        this.handleLapClick = this.handleLapClick.bind(this);
    }

    render() { 
        return (
            <div>
                <h2>{this.getMinutes()}:{this.getSeconds()}:{this.getMS()}</h2>
                <button class="StartButton" onClick={this.handleStartClick}>Start</button>
                <button class="StopButton" onClick={this.handleStopClick}>Stop</button>
                <button class="LapButton" onClick={this.handleLapClick}>Lap</button>
                <div id="lap-area" class="hideUntilNeeded">
                    <h3>Laps:</h3>
                    <div id="lap-space"></div>
                </div>
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

    handleLapClick() {
        document.getElementById("lap-area").classList.remove("hideUntilNeeded");
        document.getElementById("lap-area").classList.add("showWhenNeeded");
        var ms = this.getMS();
        var seconds = this.getSeconds();
        var minutes = this.getMinutes();
        document.getElementById("lap-space").innerHTML += minutes.toString() + ":" + seconds.toString() + ":" + ms.toString();
        document.getElementById("lap-space").innerHTML += "<br/>";
    }

    currentTime() {
        this.setState( {msElapsed: this.state.msElapsed + 1} )
    }
}

export default Timer
