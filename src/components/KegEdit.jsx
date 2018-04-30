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
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Beer Name'
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='description'
          placeholder='Description'
          ref={(input) => {_description = input;}}/>
        <input
          type='text'
          id='issue'
          placeholder='Alcohol by percent'
          ref={(input) => {_abv = input;}}/>
        <input
          type='number'
          id='pints'
          placeholder='128'
          ref={(input) => {_pints = input;}}/>
        <button type='submit'>Tap that Keg!</button>
      </form>
    </div>
  );
}

KegEdit.propTypes = {
  onKegEditing: PropTypes.func
};

export default KegEdit;
