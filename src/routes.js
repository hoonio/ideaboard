import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Main from './components/Main';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main}/>
  </Route>
);
