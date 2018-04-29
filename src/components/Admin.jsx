import React from 'react';
import Menu from './Menu';
import PropTypes from 'prop-types';
import NewKegForm from './NewKegForm';
import NewKegRequest from './NewKegRequest';

class Admin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleConfirmNewKeg = this.handleConfirmNewKeg.bind(this);
  }

  handleConfirmNewKeg(){
    this.setState({formVisibleOnPage: true});
  }


  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewKegForm onNewKegCreation={this.props.onNewKegCreation}/>;
    } else {
      currentlyVisibleContent =
        <div>
          <h4>Staff Only!</h4>
          <NewKegRequest onConfirmNewKeg={this.handleConfirmNewKeg}/>
          <Menu menu={this.menu} />
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
  menu: PropTypes.array
};

export default Admin;
