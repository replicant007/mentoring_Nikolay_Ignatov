import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper blue darken-1 px1">
      <img src="/logo512.png" className="App-logo" alt="logo" />
      <NavLink to="/" className="brand-logo">
        React exercise
      </NavLink>
      <ul className="right hide-on-med-and-down">
        <li cy-data="home-nav-link">
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </div>
  </nav>
)
