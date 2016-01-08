import React from 'react';
import { Route } from 'react-router';
import Layout from './Layout.js';
import Homepage from './views/Homepage';

export default (
  <Route>
    <Route component={Layout}>
      <Route path ="/" component={Homepage}/>
    </Route>
  </Route>
)