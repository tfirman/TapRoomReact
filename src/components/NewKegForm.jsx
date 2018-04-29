import React from 'react';

function NewKegForm(){
  let _name = null;
  let _description = null;
  let _abv = null;
  let _pints = null;

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    console.log(_name.value);
    console.log(_description.value);
    console.log(_abv.value);
    console.log(_pints.value);
    _name.value = '';
    _description.value = '';
    _abv.value = '';
    _pints.value = '';
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

export default NewKegForm;
