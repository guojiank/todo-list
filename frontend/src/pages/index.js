import React, { Component } from 'react';
import Add from './Add';
import List from './List';
import Filter from './Filter';

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
        </div>
      </div>
    );
  }
}

export default Index;
