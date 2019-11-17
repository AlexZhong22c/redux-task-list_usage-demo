import React from 'react';
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";
import LoginPage from './pages/loginPage';
import TaskListPage from './pages/taskListPage';
import AddTaskPage from './pages/addTaskPage';
import TaskDetailPage from './pages/taskDetailPage';
import { connect, Provider } from 'react-redux';

import store from './store';

// 创建高阶组件(反向继承)Route组件使其可以验证用户登录态：
// FIXME:这个组件实现得不是特别好，尤其是Redirect组件的设置：
const PrivateRoute = connect(state => ({
    isLogin: state.user.isLogin
}))(function ({ component: Component, location, isLogin, ...rest }) {
    return (
        <Route
            {...rest}
            render={
                // 执行登录判断逻辑从而动态生成组件
                props => {
                    return isLogin ? (
                        <Component {...props} />
                    ) : (
                            <Redirect
                                to={{
                                    pathname: "/login",
                                    state: { redirect: props.location.pathname }
                                }}
                            />
                        )
                }

            }
        />
    );
});

function AppRouter() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Route path="/" exact>
                    <Redirect to="/list"></Redirect>
                </Route>
                <nav>
                    <Link to="/list">任务列表</Link>|
                    <Link to="/add">添加任务</Link>
                </nav>
                <Switch>
                    <Route path="/login" component={LoginPage} />
                    <Route path="/list" component={TaskListPage} />
                    <PrivateRoute path="/add" component={AddTaskPage} />
                    <Route path="/detail/:taskname" component={TaskDetailPage} />
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}
export default AppRouter;