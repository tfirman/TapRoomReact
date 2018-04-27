import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  return (
    <div>
      <style jsx>{`
        div {
          background-color: peru;
        }
      `}</style>
      <h3>{props.name}</h3>
      <p>{props.description}, {PropTypes.number.isRequired} ABV</p>
      <p>{props.pints} pints available</p>
      <hr/>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  pints: PropTypes.number.isRequired
};

export default Keg;
