import React, { Component } from 'react';
import cloneDeep from 'lodash.clonedeep';

import Timer from "../timer";
import Options from './../options';
import Modal from "../modal";
import Btn from "../btn";

class PomodoroTimer extends Component {
  state = {
    currentStage: null,
    completedWorkStages: 0,
    options: {
      duration: { // in ms
        shortBreak: 5 * 60 * 1000,
        longBreak: 20 * 60 * 1000,
        work: 40 * 60 * 1000,
      },
    },
  };

  componentDidMount() {
    const storedStateStr = localStorage.getItem('PomodoroTimer');
    if (storedStateStr) { // If there is saved data in localStorage, try to parse and set in the state
      try {
        const storedState = JSON.parse(storedStateStr);
        this.setState((prevState) => Object.assign(prevState, storedState)); // In case of new properties
      } catch(e) {
        console.error(e);
      }
    }

    this.updateStage();
  }

  componentDidUpdate() {
    localStorage.setItem('PomodoroTimer', JSON.stringify(this.state)); // Save state in localStorage
  }

  /**
   * Update current stage
   */
  updateStage() {
    const { completedWorkStages } = this.state; // possibleStages = ['work', 'shortBreak', 'longBreak'];

    let currentStage;
    if (this.stage === 'work') { // Long break after 4 work stages
      currentStage = (completedWorkStages % 4 === 0) ? 'longBreak' : 'shortBreak';
    } else {
      currentStage = 'work';
    }

    this.setState({
      currentStage,
    });
  }

  /**
   * Options for timer
   * @param options
   */
  refreshOptions = (options) => {
    const { duration: durationInMinutes } = options;

    let durationInMs = {};
    for (let stage in durationInMinutes) {
      durationInMs[stage] = durationInMinutes[stage] * 60 * 1000; // Convert to ms
    }

    this.setState({
      options: {
        duration: durationInMs,
      },
    });
  };

  /**
   * Convert options from ms to minutes
   */
  getOptionsInMinutes() {
    const { options } = this.state;
    const { duration: durationInMs } = options;
    const optionsInMinutes = cloneDeep(options);

    for (let stage in durationInMs) {
      const valueInMs = durationInMs[stage];
      const valueInMinutes = Math.floor(valueInMs / 1000 / 60);
      optionsInMinutes.duration[stage] = valueInMinutes;
    }

    return optionsInMinutes;
  }

  /**
   * Get duration for current stage
   * @returns {number} - Duration in ms
   */
  getCurrentDuration() {
    const { currentStage, options } = this.state;
    return options.duration[currentStage] || 0; // If stage isn't init yet
  }

  render() {
    const currentDuration = this.getCurrentDuration();
    const initialValues = this.getOptionsInMinutes();

    return (
      <div>
        <Timer duration={currentDuration} />
        <Modal title="Options" trigger={<Btn type="button">Options</Btn>}>
          <Options refreshOptions={this.refreshOptions}
                   initialValues={initialValues}  />
        </Modal>
      </div>
    );
  }
}

export default PomodoroTimer;
