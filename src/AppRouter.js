import React from 'react';
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom";
import TaskListPage from './pages/taskListPage';
import AddTaskPage from './pages/addTaskPage';
import TaskDetailPage from './pages/taskDetailPage';

import store from './store';
import { Provider } from 'react-redux';

function AppRouter() {
    return (
        <BrowserRouter>
          <Route path="/" exact>
            <Redirect to="/list"></Redirect>
          </Route>
            <nav>
                <Link to="/list">任务列表</Link>|
                <Link to="/add">添加任务</Link>
            </nav>
            <Provider store={store}>
                <Switch>
                    <Route path="/list" component={TaskListPage} />
                    <Route path="/add" component={AddTaskPage} />
                    <Route path="/detail/:taskname" component={TaskDetailPage} />
                </Switch>
            </Provider>
        </BrowserRouter>
    );
}
export default AppRouter;