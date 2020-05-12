import React from 'react';
import { Button, Progress } from 'antd';
import { Howl } from 'howler';
import CountdownInput from '../countdown-input/countdown-input';

import './countdown.scss';

import clip from './countdown.mp3';

const sound = new Howl({
  src: [clip],
  loop: true,
});

class Countdown extends React.Component {
  state = {
    inputValue1: 0,
    isPaused: true,
    startTime: Date.now(),
    period: '000',
    elapsedTime: 0,
  };

  onInputChange = (value) => {
    this.setState({
      inputValue1: value,
    });
  };

  onMainButtonClick = () => {
    const { isPaused } = this.state;

    if (isPaused === true) {
      this.poll = setInterval(this.tick, 57);
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
      this.setState((prevState) => ({
        period: prevState.period,
        elapsedTime: prevState.period,
        isPaused: true,
      }));
    }

    if (isPaused === true) {
      this.setState({
        period: '000',
        elapsedTime: 0,
      });
    }
  };

  tick = () => {
    const { period, inputValue1 } = this.state;
    if (period >= inputValue1) {
      clearInterval(this.poll);
      sound.play();
    }
    this.setState((prevState) => ({
      period: Math.floor(prevState.elapsedTime + (Date.now() - prevState.startTime) / 1000),
    }));
  };

  render() {
    const { isPaused, inputValue1, period } = this.state;
    const mainButtonLabel = isPaused ? 'Start' : 'Pause';

    return (
      <div className="countdown-container">
        <div className="countdown-result">
          <div className="display">
            {`${Math.floor((inputValue1 - period) / 60)}:${(inputValue1 - period) % 60}`}
          </div>
          <Progress type="circle" percent={Math.floor((100 * period) / inputValue1)} />
        </div>
        <CountdownInput inputValue1={inputValue1} onInputChange={this.onInputChange} />
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

export default Countdown;
