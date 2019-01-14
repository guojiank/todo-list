import React, { Component } from 'react';
import { Radio } from 'antd';

class Filter extends Component {
  state = {};
  render() {
    return (
      <div>
        <Radio.Group
          onChange={() => {
            console.info('hello');
          }}
        >
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
      </div>
    );
  }
}

export default Filter;
