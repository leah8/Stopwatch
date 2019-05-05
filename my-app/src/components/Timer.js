import React from 'react';

var msElapsed;
var secondsElapsed;
var minutesElapsed;

function Timer () {

    Constructor();

    return (
        <h2>{getSeconds()}</h2>
    )
}

function Constructor() {
    msElapsed = 0;
    secondsElapsed = 0;
    minutesElapsed = 0;
}

function getMs() {
    return msElapsed;
}

function getSeconds() {
    return secondsElapsed;
}

function getMinutes() {
    return minutesElapsed;
}

export default Timer