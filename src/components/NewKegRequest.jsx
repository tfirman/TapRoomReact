import React from 'react';
import PropTypes from 'prop-types';

function NewKegRequest(props){
  return (
    <div>
      <button onClick={props.onConfirmNewKeg}>Tap a New Keg!</button>
    </div>
  );
}

NewKegRequest.propTypes = {
  onConfirmNewKeg: PropTypes.func
};

export default NewKegRequest;
