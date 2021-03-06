'use strict';

import React                          from 'react'; // if you use jsx, you have to have React imported
import { Router, Route, IndexRoute }  from 'react-router';

import appHistory                     from './history';
import Index                          from './components/layout/index';
import Home                           from './components/home';
import Register                       from './components/register/register';
import NotFound                       from './components/common/not_found';

export default (
  <Router history={appHistory}>
    <Route path='/' component={Index}>
      <IndexRoute component={Home} />
    </Route>
    <Route path='/register' component={Index}>
      <IndexRoute component={Register} />
    </Route>
    <Route path='*' component={NotFound} />
  </Router>
);
