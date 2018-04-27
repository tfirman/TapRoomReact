import React from 'react';
import Header from './Header';
import Main from './Main';
import Admin from './Admin';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/admin' component={Admin} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
