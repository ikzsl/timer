import React from 'react';
import { Button } from 'antd';

import './timer.scss';

class Timer extends React.Component {
  state = {
    isPaused: true,
    isStarted: false,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  };

  onMainButtonClick = () => {
    const { isPaused, isStarted } = this.state;
    if (isStarted === false) {
      this.setState({
        isStarted: true,
        milliseconds: Date.now(),
      });
    }
    this.setState({
      isPaused: !isPaused,
    });
  };

  onResetClick = () => {
    const { isPaused } = this.state;

    this.setState({
      isPaused: true,
    });

    if (isPaused) {
      this.setState({
        isStarted: false,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
      });
    }
  };

  render() {
    const {
      isPaused, isStarted, minutes, seconds, milliseconds,
    } = this.state;
    const mainButtonLabel = isPaused ? 'Start' : 'Pause';
    return (
      <div className="container">
        <div className="display">
          <span>{minutes}</span>
          <span>
            :
            {seconds}
          </span>
          <span>
            :
            {milliseconds}
          </span>
        </div>

        <Button type="primary" onClick={this.onMainButtonClick} className="button">
          {mainButtonLabel}
        </Button>
        {isStarted ? (
          <Button type="primary" onClick={this.onResetClick}>
            Reset
          </Button>
        ) : null}
      </div>
    );
  }
}

export default Timer;
