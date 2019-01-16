import React, { Component } from 'react';
import { Radio } from 'antd';
import { connect } from 'dva';

@connect(state => {
  return {
    filter: state['task'].filter,
  };
})
class Filter extends Component {
  render() {
    const { dispatch, filter } = this.props;
    return (
      <div>
        <Radio.Group
          onChange={e => {
            dispatch({ type: 'task/filter', payload: e.target.value });
          }}
          defaultValue={filter}
        >
          <Radio.Button value="todo">未完成</Radio.Button>
          <Radio.Button value="completed">已完成</Radio.Button>
          <Radio.Button value="all">全部</Radio.Button>
        </Radio.Group>
      </div>
    );
  }
}

export default Filter;
