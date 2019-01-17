import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, FAQPage } from '../pages';
import './app.css';

const App = () => {
  return (
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/faq" component={FAQPage} />
    </Switch>
  );
};

export default App;
