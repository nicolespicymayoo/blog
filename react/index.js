/* global Meteor, Tracker, Session */
import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from 'react-router';
import routes from './routes';
import createBrowserHistory from 'history/lib/createBrowserHistory';


Meteor.startup(() => {

  //Redering the view via React
  const rootElementName = 'react-root';
  let rootElement = document.getElementById(rootElementName);
  // In case the root element doesn't exist, let's create it
  if (!rootElement) {
    rootElement = document.createElement('div');
    rootElement.id = rootElementName;
    document.body.appendChild(rootElement);
  }

  ReactDOM.render(
      <Router
        onUpdate={() => window.scrollTo(0, 0)}
        history={createBrowserHistory()}
        children={routes}
      />,
    rootElement
  );
});

