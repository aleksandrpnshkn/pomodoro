import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { TimerControls, TimerDial, TimerBtn } from './styled';

class Timer extends Component {
  state = {
    stage: 'stopped',
    startTimeStamp: null,
    endTimeStamp: null,
    pauseTimeStamp: null,
    msLeft: null, // ms
    interval: null,
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { stage } = this.state;
    const { handleStateChange } = this.props;
    if (stage !== prevState.stage) { // Call handler only if state is changed
      handleStateChange(stage);
    }
  }

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

    if (this.state.msLeft <= 0) { // Check if timer is over. This check should be after msLeft change!
      this.stopTimer(true);
    }
  };

  /**
   * Start a new timer
   */
  startTimer = () => {
    const { msLeft } = this.state;
    const { duration } = this.props;
    const durationInMs = (msLeft) ? msLeft : duration; // If msLeft is set, timer was paused
    const startTimeStamp = Date.now();
    const endTimeStamp = startTimeStamp + durationInMs;

    this.setState({
      stage: 'started',
      startTimeStamp,
      endTimeStamp,
    });

    setTimeout(() => this.handleTick(), 1); // Interval call the method only after 1s. Timeout due to setState's async
    const interval = setInterval(this.handleTick, 1000);

    this.setState({
      interval
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

  /**
   * @param {boolean} timeIsOver - For check if timer was stopped prematurely
   */
  stopTimer = (timeIsOver) => { // TODO определиться с остановкой таймера, засчитывать раунд или нет
    this.pauseTimer();
    this.setState({
      stage: 'stopped',
      wasStoppedPrematurely: !timeIsOver,
      msLeft: null,
    });
  };

  render() {
    const { stage } = this.state;
    const timeLeftData = this.getTimeLeftData();

    return (
      <div>
        <TimerDial timeData={timeLeftData} />
        <TimerControls>
          <TimerBtn type="button"
               onClick={this.startTimer}
               disabled={stage === 'started'} >
            <>
              <i className="fas fa-play"/>
              <span className="visuallyhidden">{(stage === 'paused') ? 'Resume' : 'Start'}</span>
            </>
          </TimerBtn>
          <TimerBtn type="button"
               onClick={this.pauseTimer}
               disabled={stage !== 'started'} >
            <>
              <i className="fas fa-pause"/>
              <span className="visuallyhidden">Pause</span>
            </>
          </TimerBtn>
          <TimerBtn type="button"
               onClick={this.stopTimer}
               disabled={stage === 'stopped'} >
            <>
              <i className="fas fa-stop"/>
              <span className="visuallyhidden">Stop</span>
            </>
          </TimerBtn>
        </TimerControls>
      </div>
    );
  }
}

Timer.defaultProps = {
  handleStateChange: () => {},
};

Timer.propTypes = {
  duration: PropTypes.number.isRequired, // duration in ms
  handleStateChange: PropTypes.func,
};

export default Timer;
