import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/JacobLogo.png';

const Logo: React.FC = () => (
  <div className="justifyCenter">
    <Link to="/" className="logo-link">
      <img src={logo} alt="Jacob Skate Co." />
    </Link>
  </div>
);

export default Logo;
