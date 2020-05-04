import React from 'react';
import {
  Slider, InputNumber, Row, Col, Button,
} from 'antd';

class Timer extends React.Component {
  state = {
    inputValue: 1,
  };

  onChange = (value) => {
    this.setState({
      inputValue: value,
    });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <Row>
        <Col span={12}>
          <Slider
            min={1}
            max={60}
            onChange={this.onChange}
            value={typeof inputValue === 'number' ? inputValue : 0}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={60}
            style={{ margin: '0 16px' }}
            value={inputValue}
            onChange={this.onChange}
          />
        </Col>
        <Col>
          <Button type="primary">Button</Button>
        </Col>
      </Row>
    );
  }
}

// const Timer = () => ({ IntegerStep });

export default Timer;
