import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  return (
    <div onClick={() => {props.onKegSelection(props.kegId);}}>
      <style jsx>{`
        div {
          background-color: peru;
        }
      `}</style>
      <h3>{props.name}</h3>
      <p>{props.description}, {props.abv} ABV</p>
      <p>{props.pints.toString()} pints available</p>
      <hr/>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  pints: PropTypes.number.isRequired,
  onKegSelection: PropTypes.func,
  kegId: PropTypes.string.isRequired
};

export default Keg;
