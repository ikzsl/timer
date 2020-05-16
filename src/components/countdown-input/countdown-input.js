import React from 'react';
import PropTypes from 'prop-types';
import { Slider, InputNumber } from 'antd';

import './countdown-input.scss';

const CountdownInput = (props) => {
  const {
    isStopped,
    minutes,
    minutesMax,
    seconds,
    secondsMax,
    totalSeconds,
    sliderMax,
    sliderStep,
    onMinutesInputChange,
    onSecondsInputChange,
    onSliderChange,
  } = props;

  return (
    <div className="countdown-input-container">
      <InputNumber
        type="number"
        disabled={!isStopped}
        min={0}
        max={minutesMax}
        style={{ margin: '0 16px' }}
        value={minutes}
        onChange={onMinutesInputChange}
      />
      :
      <InputNumber
        type="number"
        disabled={!isStopped}
        min={0}
        max={secondsMax}
        style={{ margin: '0 16px' }}
        value={seconds}
        onChange={onSecondsInputChange}
      />
      <Slider
        disabled={!isStopped}
        tooltipVisible={false}
        step={sliderStep}
        min={0}
        max={sliderMax}
        onChange={onSliderChange}
        value={totalSeconds || 0}
      />
    </div>
  );
};

CountdownInput.defaultProps = {
  isStopped: true,
  minutes: 0,
  minutesMax: 0,
  seconds: 0,
  secondsMax: 0,
  totalSeconds: 0,
  sliderMax: 0,
  sliderStep: 0,
};

CountdownInput.propTypes = {
  isStopped: PropTypes.bool,
  minutes: PropTypes.number,
  minutesMax: PropTypes.number,
  seconds: PropTypes.number,
  secondsMax: PropTypes.number,
  totalSeconds: PropTypes.number,
  sliderMax: PropTypes.number,
  sliderStep: PropTypes.number,
  onMinutesInputChange: PropTypes.func.isRequired,
  onSecondsInputChange: PropTypes.func.isRequired,
  onSliderChange: PropTypes.func.isRequired,
};

export default CountdownInput;
