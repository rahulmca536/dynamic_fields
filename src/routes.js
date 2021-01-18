import React from 'react'
import { Route, IndexRoute } from 'react-router'

import QueryBuilder from './Container/QueryBuilder';
import Test from './pages/testing';

module.exports = (
  <Route path="/" component={QueryBuilder}>
    <IndexRoute component={QueryBuilder}/>

    <Route path="/test" component={Test}/>
  </Route>
)
