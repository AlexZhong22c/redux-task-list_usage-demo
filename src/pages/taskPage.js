import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Input, List } from 'antd';
import { connect } from 'react-redux';

// mapStateToProps mapDiapatchToProps这种重载其实vuex也有:
export const mapStateToProps = state => ({
    taskList: state.task.list,
    loading: state.task.loading
});
const mapDispatchToProps = {
    asyncFetch: payload => {
        // ?????????????????:
        // 其实同步的时候，都是dispatch对象，而这里整段代码相当于dispatch一个函数，所以redux-thunk会处理这个回调函数：
        return dispatch => {
          dispatch({ type: "loading_start" });
          setTimeout(() => {
            dispatch({ type: "init", payload });
            dispatch({ type: "loading_end" });
          }, 1000);
        };
    }
};

export const TaskPage = connect(mapStateToProps, mapDispatchToProps)(({ loading, asyncFetch }) => {
    useEffect(() => {
        asyncFetch([1111, 2333]);
    }, []);
    return ( 
        <div style={{margin:'10px'}}>
            <TaskAdder />
            {   loading
                ?
                <div>数据加载中......</div>
                :
                <TaskList />
            }
        </div>
    );
});

export const TaskList = connect(mapStateToProps/*, mapDispatchToProps*/)(function({ taskList }) {
    // 这里写样式的时候都先不考虑组件的可复用性：
    return (
        <div style={{ margin:'10px',width:'300px' }}>
            <List
                bordered
                dataSource={ taskList }
                renderItem={ item => (<List.Item>{item}</List.Item>) }
            />
        </div>
    );
})

export const TaskAdder = connect()(function({ dispatch }) {
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
        </div>
      );
});

export default TaskPage;