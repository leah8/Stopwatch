import React, { Component } from 'react';

class Timer extends Component {

    constructor() {

        super();

        this.state = {
            secondsElapsed: 0,
            minutesElapsed: 0, 
            msElapsed: 0
        }
    }

    render() { 
        return (
            <div>
            <h2>{this.getMinutes()}:{this.getSeconds()}:{this.getMS()}</h2>
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
        //minutesElapsed = Math.floor(secondsElapsed / 60);
        //return Math.floor('0' + this.state.secondsElapsed / 60);
        return ('0' + Math.floor('0' + this.state.msElapsed / 6000)).slice(-2);
    }

    componentWillMount() {
        setInterval( ()=>this.currentTime(), 10)
    }

    currentTime() {
        this.setState( {msElapsed: this.state.msElapsed + 1} )
    }
}

export default Timer
