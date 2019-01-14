import React, { Component } from 'react';
import { Input, Button } from 'antd';

class Add extends Component {
  state = {};
  render() {
    return (
      <div style={{ display: 'flex' }}>
        <Input />
        <Button>添加任务</Button>
      </div>
    );
  }
}

export default Add;
