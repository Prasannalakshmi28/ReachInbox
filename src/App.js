import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import OneBox from './components/OneBox';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  return (
    <div>
      <ThemeToggle />
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/onebox" component={OneBox} />
      </Switch>
    </div>
  );
};

export default App;
