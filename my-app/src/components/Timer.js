import React, { Component } from 'react';

class Timer extends Component {

    constructor() {

        super();

        this.state = {
            secondsElapsed: 0,
            minutesElapsed: 0, 
            msElapsed: 0,
            currentState: 'initial'
        }

        this.handleStartClick = this.handleStartClick.bind(this);
        this.handleStopClick = this.handleStopClick.bind(this);
        this.handleLapClick = this.handleLapClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
    }

    render() { 
        return (
            <div>
                <h2>{this.getMinutes()}:{this.getSeconds()}:{this.getMS()}</h2>
                <button class="StartButton" onClick={this.handleStartClick}>Start</button>
                <button class="StopButton" onClick={this.handleStopClick}>Stop</button>
                <button class="LapButton" onClick={this.handleLapClick}>Lap</button>
                <button class="ResetButton" onClick={this.handleResetClick}>Reset</button>
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

    getCurrentState() {
        return this.state.currentState;
    }

    setCurrentState(newState) {
        this.setState( {
            currentState: newState
        })
    }

    handleStartClick() {
        if(this.getCurrentState() !== 'running') {
            this.setCurrentState('running')
            var _this = this;
            this.incrementer = setInterval(function () {
                _this.setState({
                    msElapsed: (_this.state.msElapsed + 1)
                })
            }, 10)
        }
    }

    handleStopClick() {
        if(this.getCurrentState() !== 'stopped') {
            this.setCurrentState('stopped')
            clearInterval(this.incrementer);
        }
    }

    handleLapClick() {
        
        document.getElementById("lap-area").classList.remove("hideUntilNeeded");
        document.getElementById("lap-area").classList.add("showWhenNeeded");
        var ms = this.getMS();
        var seconds = this.getSeconds();
        var minutes = this.getMinutes();
        document.getElementById("lap-space").innerHTML += minutes.toString() + ":" + seconds.toString() + ":" + ms.toString() + "<br/>";
     }

    handleResetClick() {
        if(this.getCurrentState() !== 'initial') {
            this.setCurrentState('initial')
            clearInterval(this.incrementer);
            this.setState ({
                msElapsed: 0,
                secondsElapsed: 0,
                minutesElapsed: 0
            })
        }
        document.getElementById("lap-area").classList.remove("showWhenNeeded");
        document.getElementById("lap-area").classList.add("hideUntilNeeded");
        document.getElementById("lap-space").innerHTML = "";
    }

    currentTime() {
        this.setState( {msElapsed: this.state.msElapsed + 1} )
    }
}

export default Timer
