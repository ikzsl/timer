import React from 'react';
import PropTypes from 'prop-types';
import { Slider, InputNumber } from 'antd';

import './countdown-input.scss';

const CountdownInput = (props) => {
  const { inputValue1, onInputChange } = props;
  return (
    <div className="countdown-input-container">
      <InputNumber
        min={0}
        max={720}
        style={{ margin: '0 16px' }}
        value={Math.floor(inputValue1 / 60)}
        onChange={onInputChange}
      />
      <InputNumber
        min={0}
        max={60}
        style={{ margin: '0 16px' }}
        value={inputValue1 % 60}
        onChange={onInputChange}
      />
      <Slider
        tooltipVisible={false}
        step={15}
        min={0}
        max={3600}
        onChange={onInputChange}
        value={typeof inputValue1 === 'number' ? inputValue1 : 0}
      />
    </div>
  );
};

CountdownInput.defaultProps = {
  inputValue1: 0,
  onInputChange: () => {},
};

CountdownInput.propTypes = {
  inputValue1: PropTypes.number,
  onInputChange: PropTypes.func,
};

export default CountdownInput;
