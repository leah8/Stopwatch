import React from 'react';
import './App.css';
import AppTitle from './components/AppTitle'
import Timer from './components/Timer'
//import Buttons from './components/Buttons'
//import Laps from './components/Laps'

function App() {
  return (
    <div className="App">
    <AppTitle />
    <Timer />
    </div>
  );
}

export default App;
