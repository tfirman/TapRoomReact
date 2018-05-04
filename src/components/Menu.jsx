import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg';

function Menu(props){
  return (
    <div>
      <h3>Menu</h3>
      <hr/>
      {Object.keys(props.menu).map(function(kegId) {
        var keg = props.menu[kegId];
        return <Keg name={keg.name}
          description={keg.description}
          abv={keg.abv}
          pints={keg.pints}
          key={kegId}
          onKegSelection={props.onKegSelection}
          kegId={kegId}/>;
      })}
    </div>
  );
}

Menu.propTypes = {
  menu: PropTypes.object,
  onKegSelection: PropTypes.func
};

export default Menu;
