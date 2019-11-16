import { connect } from 'react-redux';
import React, { useState } from 'react';
import { Input } from 'antd';
import { TaskListContainer } from './taskListPage';

export default connect()(function({ dispatch }) {
  const [taskName, setTaskName] = useState('');

  const onAddTask = () => {
        dispatch({ type: "add", payload: taskName });
        setTaskName('');
  };
  return (
      <div>
          <Input placeholder='请输入...' style={{ width:'250px', marginRight:'10px' }}
              value={taskName} onChange={e => setTaskName(e.target.value)}
              onPressEnter={onAddTask}/>
          {/* <Button type="primary">增加</Button> */}
          <TaskListContainer />
      </div>
    );
});