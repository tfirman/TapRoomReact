import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Ye Olde Taproom</h1>
      <Link to="/">Home</Link> | <Link to="/admin">Staff</Link>
    </div>
  );
}

export default Header;
