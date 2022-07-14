import React, { Component } from 'react';

// Stateless Functional Component

const NavBar = ({ totalCounters }) => {
  console.log('NavBar - Rendered');
  return (
    <nav className="navbar navbar-light bg-dark text-white">
      <div className="container">
        Counter App{''}
        <span className="badge badge-pill badge-primary ">{totalCounters}</span>
        <a className="navbar-brand" href="#"></a>
      </div>
    </nav>
  );
};

export default NavBar;
