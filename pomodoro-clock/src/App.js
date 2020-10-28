import React from 'react';
import './App.css';

const initializeState = {
  breakLength: 5,
  sessionLength: 25,
  currentPhase: "Session",
  isPause: true,
  timeToLeft: 1500,
  displayedTime: "25:00"
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = initializeState

    this.reset = this.reset.bind(this);
    this.sessionIncrement = this.sessionIncrement.bind(this);
    this.sessionDecrement = this.sessionDecrement.bind(this);
    this.breakIncrement = this.breakIncrement.bind(this);
    this.breakDecrement = this.breakDecrement.bind(this);
    this.startStop = this.startStop.bind(this);
    this.changeDisplay = this.changeDisplay.bind(this);
  }

reset() {
  this.audioBeep.pause()
  this.audioBeep.currentTime = 0
  this.setState(initializeState)
}

sessionIncrement() {
  if(this.state.sessionLength >= 60) {
    return
  }

  let {sessionLength} = this.state

  let minutes = sessionLength + 1
  let seconds = 0

  let minutesToDisplay = minutes < 10 ? "0"+minutes : minutes
  let secondsToDisplay = seconds < 10 ? "0"+seconds : seconds

  let displayedTime = minutesToDisplay+":"+secondsToDisplay

  this.setState({
    sessionLength: sessionLength + 1,
    displayedTime: displayedTime,
    timeToLeft: (sessionLength + 1) * 60
  })
}


sessionDecrement() {
  if(this.state.sessionLength <= 1) {
    return
  }

  let {sessionLength} = this.state

  let minutes = sessionLength - 1
  let seconds = 0

  let minutesToDisplay = minutes < 10 ? "0"+minutes : minutes
  let secondsToDisplay = seconds < 10 ? "0"+seconds : seconds

  let displayedTime = minutesToDisplay+":"+secondsToDisplay

  this.setState({
    sessionLength: sessionLength - 1,
    displayedTime: displayedTime,
    timeToLeft: (sessionLength - 1) * 60
  })

}

playAlarm() {
  this.audioBeep.play()
}

breakIncrement() {
  if(this.state.breakLength >= 60) {
    return
  }
  this.setState({
    breakLength: this.state.breakLength + 1
  })
}

breakDecrement() {
  if(this.state.breakLength <= 1) {
    return
  }
  this.setState({
    breakLength: this.state.breakLength - 1
  })
}

startStop() {
  this.setState({
    isPause: !this.state.isPause
  }, this.changeTime())
}

changeDisplay() {
  let {timeToLeft} = this.state

  let minutes = Math.trunc(timeToLeft / 60)
  let seconds = timeToLeft - (minutes * 60)

  let minutesToDisplay = minutes < 10 ? "0"+minutes : minutes
  let secondsToDisplay = seconds < 10 ? "0"+seconds : seconds

  let displayedTime = minutesToDisplay+":"+secondsToDisplay

  this.setState({
    displayedTime: displayedTime
  })

  if(timeToLeft == 0) {
    if(this.state.currentPhase == "Session") {
      this.setState({
        currentPhase: "Break",
        timeToLeft: (this.state.breakLength) * 60 + 1,
      })
    }
    else {
      this.setState({
        currentPhase: "Session",
        timeToLeft: (this.state.sessionLength) * 60 + 1,
      })
    }
    this.playAlarm()
  }
}

//tutaj
  changeTime() {
  let handleTimer = setInterval(() => {

    if(this.state.isPause) {
      clearInterval(handleTimer);
      return;
    }

    let {timeToLeft} = this.state

    this.setState({
      timeToLeft: timeToLeft - 1
    })

    this.changeDisplay();

  }, 1000)
}

  render() {
    return (
      <div id="pomodoro">

        <div id="break-container">
          <label id="break-label">Break Length</label>
          <button id="break-increment" onClick={this.breakIncrement}>^</button>
          <span id="break-length">{this.state.breakLength}</span>
          <button id="break-decrement" onClick={this.breakDecrement}>v</button>
        </div>
       
        <div id="session-container">
          <label id="session-label">Session Length</label>
          <button id="session-increment" onClick={this.sessionIncrement}>^</button>
          <span id="session-length">{this.state.sessionLength}</span>
          <button id="session-decrement" onClick={this.sessionDecrement}>v</button>
        </div>

        <div id="timer">
          <label id="timer-label">{this.state.currentPhase}</label>
          <span id="time-left">{this.state.displayedTime}</span>
        </div>

        <div id="controls">
          <button id="start_stop" onClick={this.startStop}>Start/Stop</button>
          <button id="reset" onClick={this.reset}>Reset</button>
          <audio id="beep" preload="auto" ref={(audio) => {
            this.audioBeep = audio;
          }} type="audio/mpeg" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
        </div>

      </div>
      );
     }
}

export default App;
