import React from 'react';
import Header from './Header';
import Menu from './Menu';
import Admin from './Admin';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: []
    };
    this.handleAddingNewKegToMenu = this.handleAddingNewKegToMenu.bind(this);
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
          <Route exact path='/' render={()=><Menu menu={this.state.masterKegList} />} />
          <Route path='/admin' render={()=><Admin menu={this.state.masterKegList}
            onNewKegCreation={this.handleAddingNewKegToMenu} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
