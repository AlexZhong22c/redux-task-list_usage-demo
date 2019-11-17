import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';
import { List } from 'antd';
import { connect } from 'react-redux';

// mapStateToProps mapDiapatchToProps这种重载其实vuex也有:
export const mapStateToProps = state => ({
    taskList: state.task.list,
    loading: state.task.loading
});
const mapDispatchToProps = {
    asyncFetch: payload => {
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

export const TaskListPage = () => <TaskListContainer/>;

export const TaskListContainer = connect(mapStateToProps, mapDispatchToProps)(({ loading, asyncFetch, taskList }) => {
    useEffect(() => {
        asyncFetch(JSON.parse(JSON.stringify(taskList)));
    }, []);
    return ( 
        <div style={{margin:'10px'}}>
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
                renderItem={ item => (
                    <List.Item>
                        <Link to={`/detail/${item}`}>{item}</Link>
                    </List.Item>)
                }
            />
        </div>
    );
})

export default TaskListPage;