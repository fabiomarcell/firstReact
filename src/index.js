import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route, 
          IndexRoute, browserHistory} from 'react-router';

import App from './App';

import List from './List/List';
import ListGroup from './List/ListGroup';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={ListGroup}></IndexRoute>
      <Route path="/detail/:id" component={List}></Route>
    </Route>
    
  </Router>
);

ReactDOM.render(
  router,
  document.getElementById('root')
);
