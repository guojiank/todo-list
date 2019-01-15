import React, { Component } from 'react';
import { List, Icon, Tooltip, Popconfirm } from 'antd';
import { connect } from 'dva';

const filter = state => {
  switch (state.filter) {
    case 'all':
      return state;
    case 'todo':
      return {
        data: state.data.filter(item => item.completed === false),
        filter: filter,
      };
    case 'completed':
      return {
        data: state.data.filter(item => item.completed === true),
        filter: filter,
      };
    default:
      return state;
  }
};

const mapStateToProps = state => {
  const tmpTask = state['task'];

  const localTask = filter(tmpTask);

  return {
    data: localTask.data,
  };
};

@connect(mapStateToProps)
class ListComponent extends Component {
  render() {
    const { data, dispatch } = this.props;
    return (
      <List
        bordered
        dataSource={data}
        renderItem={item => (
          <List.Item
            actions={[
              <div>
                {!item.completed ? (
                  <Tooltip title="完成" mouseEnterDelay={1}>
                    <Icon
                      type="check"
                      onClick={() => {
                        dispatch({
                          type: 'task/trigger',
                          payload: item,
                        });
                      }}
                    />
                  </Tooltip>
                ) : (
                  <Tooltip title="取消" mouseEnterDelay={1}>
                    <Icon
                      type="close"
                      onClick={() => {
                        dispatch({
                          type: 'task/trigger',
                          payload: item,
                        });
                      }}
                    />
                  </Tooltip>
                )}
              </div>,
              <Popconfirm
                title="Are you sure delete this task?"
                onConfirm={() => {
                  dispatch({
                    type: 'task/delete',
                    payload: item.key,
                  });
                }}
                okText="Yes"
                cancelText="No"
              >
                <Tooltip title="删除" mouseEnterDelay={1}>
                  <Icon type="delete" />
                </Tooltip>
              </Popconfirm>,
            ]}
            key={item.key}
          >
            {item.completed === true ? <del>{item.text}</del> : item.text}
          </List.Item>
        )}
      />
    );
  }
}

export default ListComponent;
