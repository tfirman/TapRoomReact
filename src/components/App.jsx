import React from 'react';
import Header from './Header';
import Menu from './Menu';
import Admin from './Admin';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Menu} />
        <Route path='/admin' component={Admin} />
      </Switch>
    </div>
  );
}

export default App;
