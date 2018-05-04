import React from 'react';
import PropTypes from 'prop-types';

function KegEdit(props){
  let _name = null;
  let _description = null;
  let _abv = null;
  let _pints = null;

  function handleKegEditSubmission(event) {
    event.preventDefault();
    props.onKegEditing({name: _name.value, description: _description.value, abv: _abv.value, pints: _pints.value});
    _name.value = '';
    _description.value = '';
    _abv.value = '';
    _pints.value = 128;
  }

  return (
    <div>
      <form onSubmit={handleKegEditSubmission}>
        <input
          type='text'
          id='name'
          defaultValue = {props.selectedKeg.name}
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='description'
          defaultValue = {props.selectedKeg.description}
          ref={(input) => {_description = input;}}/>
        <input
          type='text'
          id='issue'
          defaultValue = {props.selectedKeg.abv}
          ref={(input) => {_abv = input;}}/>
        <input
          type='number'
          id='pints'
          defaultValue = {props.selectedKeg.pints}
          ref={(input) => {_pints = input;}}/>
        <button type='submit'>Edit that Keg!</button>
      </form>
    </div>
  );
}

KegEdit.propTypes = {
  onKegEditing: PropTypes.func,
  selectedKeg: PropTypes.object

};

export default KegEdit;
