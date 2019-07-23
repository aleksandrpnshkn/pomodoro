import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Btn from "../btn";
import Dial from '../dial';

class Timer extends Component {
  state = {
    stage: 'stopped',
    startTimeStamp: null,
    endTimeStamp: null,
    pauseTimeStamp: null,
    msLeft: null, // ms
    interval: null,
  };

  /**
   * Calc time left
   */
  updateTimeLeft() {
    let msLeft = this.state.endTimeStamp - Date.now();

    if (msLeft < 0) { // Check if timer is end
      msLeft = 0;
    }

    this.setState({
      msLeft
    });
  }

  /**
   * Get object with time left data for (e.g. for a dial)
   * @returns {{seconds: number, minutes: number}}
   */
  getTimeLeftData() {
    const { msLeft } = this.state;

    let timeLeftData;
    if (msLeft === null) { // Explicitly return 0 if secondsLeft not set yet (or equals 0)
      timeLeftData = {
        seconds: 0,
        minutes: 0,
      };
    } else {
      const secondsLeft = Math.round(msLeft / 1000);

      timeLeftData = {
        seconds: secondsLeft % 60,
        minutes: Math.floor(secondsLeft / 60),
      };
    }

    return timeLeftData;
  }

  /**
   * Function for interval. Handle a tick of the timer
   */
  handleTick = () => {
    this.updateTimeLeft();

    if (this.state.msLeft <= 0) { // Check if timer is end
      this.stopTimer();
    }
  };

  /**
   * Start a new timer
   */
  startTimer = () => {
    const { msLeft } = this.state;
    const durationInMs = (msLeft) ? msLeft : this.props.duration; // If msLeft is set, timer was paused
    const startTimeStamp = Date.now();
    const endTimeStamp = startTimeStamp + durationInMs;
    const interval = setInterval(this.handleTick, 1000);

    this.setState({
      stage: 'started',
      interval,
      startTimeStamp,
      endTimeStamp,
    });
  };

  pauseTimer = () => {
    clearInterval(this.state.interval);

    this.setState({
      stage: 'paused',
      interval: null,
      startTimeStamp: null,
      endTimeStamp: null,
    });
  };

  stopTimer = () => {
    this.pauseTimer();
    this.setState({
      stage: 'stopped',
      msLeft: null,
    });
  };

  render() {
    const { stage } = this.state;
    const timeLeftData = this.getTimeLeftData();

    return (
      <div>
        <Dial timeData={timeLeftData} />
        <div>
          <Btn type="button"
               onClick={this.startTimer}
               disabled={stage === 'started'} >
            <>
              <i className="fas fa-play"/>
              <span className="visuallyhidden">{(stage === 'paused') ? 'Resume' : 'Start'}</span>
            </>
          </Btn>
          <Btn type="button"
               onClick={this.pauseTimer}
               disabled={stage !== 'started'} >
            <>
              <i className="fas fa-pause"/>
              <span className="visuallyhidden">Pause</span>
            </>
          </Btn>
          <Btn type="button"
               onClick={this.stopTimer}
               disabled={stage !== 'started'} >
            <>
              <i className="fas fa-stop"/>
              <span className="visuallyhidden">Stop</span>
            </>
          </Btn>
        </div>
      </div>
    );
  }
}

Timer.propTypes = {
  duration: PropTypes.number.isRequired, // duration in ms
};

export default Timer;
