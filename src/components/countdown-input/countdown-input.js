import React from 'react';
import PropTypes from 'prop-types';
import { Slider, InputNumber } from 'antd';

import './countdown-input.scss';

const CountdownInput = (props) => {
  const {
    minutes,
    seconds,
    totalSeconds,
    onMinutesInputChange,
    onSecondsInputChange,
    onSliderChange,
  } = props;

  return (
    <div className="countdown-input-container">
      <InputNumber
        min={0}
        max={720}
        style={{ margin: '0 16px' }}
        value={minutes}
        onChange={onMinutesInputChange}
      />
      <InputNumber
        min={0}
        max={60}
        style={{ margin: '0 16px' }}
        value={seconds}
        onChange={onSecondsInputChange}
      />
      <Slider
        tooltipVisible={false}
        step={15}
        min={0}
        max={3600}
        onChange={onSliderChange}
        value={typeof totalSeconds === 'number' ? totalSeconds : 0}
      />
    </div>
  );
};

CountdownInput.defaultProps = {
  minutes: 0,
  seconds: 0,
  totalSeconds: 0,
  onMinutesInputChange: () => {},
  onSecondsInputChange: () => {},
  onSliderChange: () => {},
};

CountdownInput.propTypes = {
  minutes: PropTypes.number,
  seconds: PropTypes.number,
  totalSeconds: PropTypes.number,
  onMinutesInputChange: PropTypes.func,
  onSecondsInputChange: PropTypes.func,
  onSliderChange: PropTypes.func,
};

export default CountdownInput;
