import React, { Component } from 'react';
import { Input, Button } from 'antd';
import { connect } from 'dva';

@connect(null)
class Add extends Component {
  state = {
    text: '',
  };
  render() {
    const { dispatch } = this.props;
    return (
      <div style={{ display: 'flex' }}>
        <Input
          value={this.state.text}
          onChange={e => {
            this.setState({ text: e.target.value });
          }}
        />
        <Button
          onClick={() => {
            dispatch({
              type: 'task/add',
              payload: this.state.text,
            });
            this.setState({ text: '' });
          }}
        >
          添加任务
        </Button>
      </div>
    );
  }
}

export default Add;
