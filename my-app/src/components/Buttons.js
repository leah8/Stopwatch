import React from 'react';

function Buttons () {
    return (
        <div>
            <button class="StartButton" type="button" onClick={OnStartClick}>Start</button>
            <button class="StopButton" type="button" onClick={OnStopClick}>Stop</button>
        </div>
    )
}

function OnStartClick() {
    alert("start clicked");
}

function OnStopClick() {
    alert("stop clicked");
}

export default Buttons