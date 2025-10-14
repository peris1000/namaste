import { LOGO_URL } from '../utils/constants';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [btnName, setBtnName] = useState('Login');

  // if no dependency array its called on every render
  // if dependency array = [] its called on init render
  useEffect(() => {
    console.log('useEffect header called');
  }, []);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <button
            onClick={() =>
              btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')
            }
            className="login"
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
