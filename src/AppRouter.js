import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TaskPage from './pages/taskPage';

import store from './store';
import { Provider } from 'react-redux';

function AppRouter() {
  return (
    <Router>
        <ul>
            <li> <Link to="/">redux1</Link> </li>
            <li><Link to="/list">redux2</Link> </li>
        </ul>
        <Provider store={store}>
          <Route path="/" exact component={TaskPage} />
          <Route path="/list" component={TaskPage} />
        </Provider>
    </Router>
  );
}
export default AppRouter;