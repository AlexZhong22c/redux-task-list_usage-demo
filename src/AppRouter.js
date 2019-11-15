import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TaskList from './TaskList';

function AppRouter() {
  return (
    <Router>
        <ul>
            <li> <Link to="/">redux1</Link> </li>
            <li><Link to="/list">redux2</Link> </li>
        </ul>
        <Route path="/" exact component={TaskList} />
        <Route path="/list" component={TaskList} />
    </Router>
  );
}
export default AppRouter;