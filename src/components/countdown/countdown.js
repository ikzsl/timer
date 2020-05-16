import React from 'react';
import { Button, Progress } from 'antd';
import { Howl } from 'howler';
import CountdownInput from '../countdown-input/countdown-input';
import {
  calculateDisplayMinutes,
  calculateDisplaySeconds,
  calculateProgress,
} from '../../utils/utils';

import './countdown.scss';

import clip from './countdown.mp3';

const sound = new Howl({
  src: [clip],
  loop: true,
});

class Countdown extends React.Component {
  state = {
    minutes: 0,
    seconds: 0,
    totalSeconds: 0,
    isPaused: true,
    isStopped: true,
    startTime: Date.now(),
    period: 0,
    elapsedTime: 0,
  };

  onMinutesInputChange = (value) => {
    this.setState((prevState) => ({
      minutes: value,
      totalSeconds: value * 60 + prevState.seconds,
    }));
  };

  onSecondsInputChange = (value) => {
    this.setState((prevState) => ({
      seconds: value,
      totalSeconds: prevState.minutes * 60 + value,
    }));
  };

  onSliderChange = (value) => {
    this.setState({
      totalSeconds: value,
      minutes: Math.floor(value / 60),
      seconds: value % 60,
    });
  };

  onMainButtonClick = () => {
    const { isPaused } = this.state;

    if (isPaused === true) {
      this.poll = setInterval(this.tick, 57);
      this.setState({
        startTime: Date.now(),
        isStopped: false,
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
    clearInterval(this.poll);
    sound.stop();
    this.setState({
      isStopped: true,
      isPaused: true,
      period: 0,
      elapsedTime: 0,
      totalSeconds: 0,
      seconds: 0,
      minutes: 0,
    });
  };

  tick = () => {
    const { period, totalSeconds } = this.state;
    if (period >= totalSeconds) {
      clearInterval(this.poll);

      this.setState({
        isPaused: true,
        period: 0,
      });
      sound.play();
    }
    this.setState((prevState) => ({
      period: Math.floor(prevState.elapsedTime + (Date.now() - prevState.startTime) / 1000),
    }));
  };

  render() {
    const {
      isPaused, isStopped, period, totalSeconds, minutes, seconds,
    } = this.state;
    const displayMinutes = calculateDisplayMinutes(totalSeconds, period);
    const displaySeconds = calculateDisplaySeconds(totalSeconds, period);
    const mainButtonLabel = isPaused ? 'Start' : 'Pause';
    const resetButton = (
      <Button
        shape="round"
        size="large"
        type="primary"
        onClick={this.onResetClick}
        className="button"
      >
        Reset
      </Button>
    );

    return (
      <div className="countdown-container">
        <div className="countdown-result">
          <Progress type="circle" percent={calculateProgress(totalSeconds, period)} />
          <div className="display">
            {`${displayMinutes < 10 ? `0${displayMinutes}` : displayMinutes}:${
              displaySeconds < 10 ? `0${displaySeconds}` : displaySeconds
            }`}
          </div>
        </div>
        <CountdownInput
          isStopped={isStopped}
          minutes={minutes}
          seconds={seconds}
          totalSeconds={totalSeconds}
          onMinutesInputChange={this.onMinutesInputChange}
          onSecondsInputChange={this.onSecondsInputChange}
          onSliderChange={this.onSliderChange}
        />
        <Button
          disabled={!(totalSeconds - period)}
          shape="round"
          size="large"
          type="primary"
          onClick={this.onMainButtonClick}
          className="button"
        >
          {mainButtonLabel}
        </Button>
        {isStopped ? null : resetButton}
      </div>
    );
  }
}

export default Countdown;
