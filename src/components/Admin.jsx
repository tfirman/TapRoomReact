import React from 'react';
import Menu from './Menu';
import PropTypes from 'prop-types';
import NewKegForm from './NewKegForm';
import NewKegRequest from './NewKegRequest';
import KegEdit from './KegEdit';

class Admin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
    };
    this.handleConfirmNewKeg = this.handleConfirmNewKeg.bind(this);
  }

  handleConfirmNewKeg(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    let optionalSelectedKegContent = null;
    if (this.props.selectedKeg != null){
      optionalSelectedKegContent = <KegEdit selectedKeg={this.props.menu[this.props.selectedKeg]}/>;
    }
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewKegForm onNewKegCreation={this.props.onNewKegCreation}/>;
    } else {
      currentlyVisibleContent =
        <div>
          <h4>Staff Only!</h4>
          <NewKegRequest onConfirmNewKeg={this.handleConfirmNewKeg}/>
          {optionalSelectedKegContent}
          <Menu
            menu={this.props.menu}
            onKegSelection={this.props.onKegSelection}/>
        </div>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

Admin.propTypes = {
  onNewKegCreation: PropTypes.func,
  menu: PropTypes.object,
  onKegSelection: PropTypes.func,
  selectedKeg: PropTypes.string
};

export default Admin;
