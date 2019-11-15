import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TodoList from './TodoList';

function AppRouter() {
  return (
    <Router>
        <ul>
            <li> <Link to="/">redux1</Link> </li>
            <li><Link to="/list">redux2</Link> </li>
        </ul>
        <Route path="/" exact component={TodoList} />
        <Route path="/list" component={TodoList} />
    </Router>
  );
}
export default AppRouter;