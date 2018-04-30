import React from 'react';
import Header from './Header';
import Menu from './Menu';
import Admin from './Admin';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import { v4 } from 'uuid';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: {},
      selectedKeg: null
    };
    this.handleAddingNewKegToMenu = this.handleAddingNewKegToMenu.bind(this);
    this.handleChangingSelectedKeg = this.handleChangingSelectedKeg.bind(this);
  }

  handleAddingNewKegToMenu(newKeg){
    let newKegId = v4();
    let newMasterKegList = Object.assign({}, this.state.masterKegList, {
      [newKegId]: newKeg
    });
    this.setState({masterKegList: newMasterKegList});
  }

  handleChangingSelectedKeg(kegId){
    this.setState({selectedKeg: kegId});
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><Menu menu={this.state.masterKegList} />} />
          <Route path='/admin' render={()=><Admin menu={this.state.masterKegList}
            onNewKegCreation={this.handleAddingNewKegToMenu}
            onKegSelection={this.handleChangingSelectedKeg}
            selectedKeg={this.state.selectedKeg} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
