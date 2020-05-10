import React from 'react';
import { Button } from 'antd';

import './timer.scss';

class Timer extends React.Component {
  state = {
    isPaused: true,
    startTime: Date.now(),
    period: 0,
    elapsedTime: 0,
  };

  onMainButtonClick = () => {
    const { isPaused } = this.state;

    if (isPaused === true) {
      this.poll = setInterval(this.tick, 50);
      this.setState({
        startTime: Date.now(),
      });

      this.setState((prevState) => ({
        period: prevState.period,
      }));
    }

    if (isPaused === false) {
      clearInterval(this.poll);

      this.setState((prevState) => ({
        period: prevState.period,
        elapsedTime: prevState.period,
      }));
    }

    this.setState((prevState) => ({
      isPaused: !prevState.isPaused,
    }));
  };

  onResetClick = () => {
    const { isPaused } = this.state;

    if (isPaused === false) {
      clearInterval(this.poll);
      this.setState({
        isPaused: true,
      });
    }

    if (isPaused === true) {
      this.setState({
        period: 0,
        elapsedTime: 0,
      });
    }
  };

  tick = () => {
    this.setState((prevState) => ({
      period: prevState.elapsedTime + (Date.now() - prevState.startTime),
    }));
  };

  render() {
    const { isPaused, period } = this.state;

    const mainButtonLabel = isPaused ? 'Start' : 'Pause';

    return (
      <div className="container">
        <div className="display">
          <span>{Math.floor(((period / 1000) % (60 * 60)) / 60) || 0}</span>
          <span>
            :
            {Math.floor((period / 1000) % 60) || 0}
          </span>
          <span>
            :
            {period.toString().slice(-3) || 0}
          </span>
        </div>

        <Button type="primary" onClick={this.onMainButtonClick} className="button">
          {mainButtonLabel}
        </Button>
        <Button type="primary" onClick={this.onResetClick} className="button">
          Reset
        </Button>
      </div>
    );
  }
}

export default Timer;
