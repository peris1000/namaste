import { LOGO_URL } from '../utils/constants';
import { useEffect, useState, useContext, use } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
  const [btnName, setBtnName] = useState('Login');
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  // if no dependency array its called on every render
  // if dependency array = [] its called on init render
  useEffect(() => {
    // console.log('useEffect header called');
  }, []);

  // subscribing to the store using a selector
  const cart = useSelector((store) => store.cart.items);
  console.log(cart);

  return (
    <div className="flex justify-between shadow-sm m-2">
      <div className="logo-container">
        <img className="w-25" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? '🟢' : '🔴'}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to="/cart">
              <div className="">
                Cart
                <span className="bg-blue-400 p-1 rounded-full font-mono">
                  {cart.length}
                </span>
              </div>
            </Link>
          </li>
          <button
            onClick={() =>
              btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')
            }
            className="login"
          >
            {btnName}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
