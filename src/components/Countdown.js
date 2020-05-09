import React from 'react';
import { Slider, InputNumber, Button } from 'antd';

class Countdown extends React.Component {
  state = {
    inputValue1: 1,
    inputValue2: 1,
  };

  onChange1 = (value) => {
    this.setState({
      inputValue1: value,
    });
  };

  onChange2 = (value) => {
    this.setState({
      inputValue2: value,
    });
  };

  render() {
    const { inputValue1, inputValue2 } = this.state;
    return (
      <div className="container">
        <Slider
          min={1}
          max={60}
          onChange={this.onChange1}
          value={typeof inputValue1 === 'number' ? inputValue1 : 0}
        />
        <InputNumber
          min={1}
          max={60}
          style={{ margin: '0 16px' }}
          value={inputValue1}
          onChange={this.onChange1}
        />
        <Button type="primary">Button</Button>

        <Slider
          min={1}
          max={60}
          onChange={this.onChange2}
          value={typeof inputValue2 === 'number' ? inputValue2 : 0}
        />
        <InputNumber
          min={1}
          max={60}
          style={{ margin: '0 16px' }}
          value={inputValue2}
          onChange={this.onChange2}
        />
        <Button type="primary">Button</Button>
      </div>
    );
  }
}

export default Countdown;
