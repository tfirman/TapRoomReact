import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg';

function Menu(props){
  return (
    <div>
      <h3>Menu</h3>
      <hr/>
      {props.menu.map((keg, index) =>
        <Keg name={keg.name}
          description={keg.description}
          abv={keg.abv}
          pints={keg.pints}
          key={index}/>
      )}
    </div>
  );
}

Menu.propTypes = {
  menu: PropTypes.array
};

export default Menu;
