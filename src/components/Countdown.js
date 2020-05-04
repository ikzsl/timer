import React from 'react';
import {
  Slider, InputNumber, Row, Col, Button,
} from 'antd';

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
      <>
        <Row>
          <Col span={12}>
            <Slider
              min={1}
              max={60}
              onChange={this.onChange1}
              value={typeof inputValue1 === 'number' ? inputValue1 : 0}
            />
          </Col>
          <Col span={4}>
            <InputNumber
              min={1}
              max={60}
              style={{ margin: '0 16px' }}
              value={inputValue1}
              onChange={this.onChange1}
            />
          </Col>
          <Col>
            <Button type="primary">Button</Button>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Slider
              min={1}
              max={60}
              onChange={this.onChange2}
              value={typeof inputValue2 === 'number' ? inputValue2 : 0}
            />
          </Col>
          <Col span={4}>
            <InputNumber
              min={1}
              max={60}
              style={{ margin: '0 16px' }}
              value={inputValue2}
              onChange={this.onChange2}
            />
          </Col>
          <Col>
            <Button type="primary">Button</Button>
          </Col>
        </Row>
      </>
    );
  }
}

export default Countdown;
