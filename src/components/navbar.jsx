import React, { Component } from 'react';

// Stateless Functional Component

const NavBar = ({ totalCounters }) => {
  console.log('NavBar - Rendered');
  return (
    <nav className="navbar navbar-light bg-dark text-white">
      <div className="container">
        <h1>Counter App{''}</h1>
        <span className="badge badge-pill badge-primary ">{totalCounters}</span>
        <a className="navbar-brand" href="#"></a>
      </div>
    </nav>
  );
};

export default NavBar;
