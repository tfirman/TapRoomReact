import React from 'react';
import Header from './Header';
import Main from './Main';
import Admin from './Admin';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: []
    };
  }

  handleAddingNewKegToMenu(newKeg){
    var newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({masterKegList: newMasterKegList});
  }



  render(){
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
}

export default App;
