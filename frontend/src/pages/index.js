import React, { Component } from 'react';
import Add from './Add';
import List from './List';
import Filter from './Filter';
import { Button } from 'antd';
import { connect } from 'dva';

@connect(null)
class ButtonTest extends Component {
  state = {};
  render() {
    const { dispatch } = this.props;
    return (
      <Button
        onClick={() => {
          dispatch({ type: 'task/getTasks' });
        }}
      >
        test
      </Button>
    );
  }
}

class Index extends Component {
  state = {};
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <Add />
          <br />
          <Filter />
          <br />
          <List />
          <br />
          <ButtonTest />
        </div>
      </div>
    );
  }
}

export default Index;
