import styles from './index.css';
import React from 'react';
import { Icon } from 'antd';

const Login = () => {
  return (
    <a>
      <span style={{ fontSize: '30px' }}>登录</span>
      <Icon type="login" style={{ fontSize: '30px' }} />
    </a>
  );
};

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>任务管理</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          paddingRight: '6em',
        }}
      >
        {/* <Login /> */}
      </div>
      <br />

      {props.children}
    </div>
  );
}

export default BasicLayout;
