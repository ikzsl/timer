import React from 'react';
import PropTypes from 'prop-types';
import { Slider, InputNumber } from 'antd';

import './countdown-input.scss';

const CountdownInput = (props) => {
  const {
    isStopped,
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
        type="number"
        disabled={!isStopped}
        min={0}
        max={720}
        style={{ margin: '0 16px' }}
        value={minutes}
        onChange={onMinutesInputChange}
      />
      <InputNumber
        type="number"
        disabled={!isStopped}
        min={0}
        max={59}
        style={{ margin: '0 16px' }}
        value={seconds}
        onChange={onSecondsInputChange}
      />
      <Slider
        disabled={!isStopped}
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
  isStopped: true,
  minutes: 0,
  seconds: 0,
  totalSeconds: 0,
  onMinutesInputChange: () => {},
  onSecondsInputChange: () => {},
  onSliderChange: () => {},
};

CountdownInput.propTypes = {
  isStopped: PropTypes.bool,
  minutes: PropTypes.number,
  seconds: PropTypes.number,
  totalSeconds: PropTypes.number,
  onMinutesInputChange: PropTypes.func,
  onSecondsInputChange: PropTypes.func,
  onSliderChange: PropTypes.func,
};

export default CountdownInput;
