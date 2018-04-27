import React from 'react';
import Keg from './Keg';

var masterKegList = [
  {
    name: 'Imperial March',
    description: 'Imperial Stout',
    abv: '9.0%',
    pints: 128
  },
  {
    name: 'Scruffy-Looking Nerf Herder',
    description: 'Wheat Beer',
    abv: '4.0%',
    pints: 128
  },
  {
    name: 'The Droids You\'re Looking For',
    description: 'English Porter',
    abv: '6.0%',
    pints: 128
  }
];

function Menu(){
  return (
    <div>
      <hr/>
      {masterKegList.map((keg, index) =>
        <Keg name={keg.name}
          description={keg.description}
          abv={keg.abv}
          pints={keg.pints}
          key={index}/>
      )}
    </div>
  );
}

export default Menu;
