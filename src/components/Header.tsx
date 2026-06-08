import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Header: React.FC = () => (
  <nav className="navbar-outer">
    <div className="navbar-inner">
      {/* Left — primary nav */}
      <div className="user-menu-wrap">
        <Link to="/collections">Shop</Link>
        <Link to="/accessories">Accessories</Link>
        <Link to="/sponsored-pros">Team</Link>
      </div>

      {/* Center — logo */}
      <Logo />

      {/* Right — account / cart */}
      <div className="menu">
        <ul className="menu-list">
          <li className="menu-item"><Link to="/UserLogin">Account</Link></li>
          <li className="menu-item"><Link to="/cart">Cart</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
