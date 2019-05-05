import React from 'react';

function Timer () {
    return (
        <h2>{getInitialTime()}</h2>
    )
}

function getInitialTime() {
    var secondsElapsed = 0;
    return secondsElapsed;
}

export default Timer