import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
import Shimmer from './Shimmer';
// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  // const [showIndex, setShowIndex] = useState(null);
  const dispatch = useDispatch();

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisine, rating, img_url, delivery_time } = resInfo.restaurant;
  const { menus } = resInfo;

  const handleAddItem = (item) => {
    // dispatch an action to add item to cart
    // dispatch({type: 'ADD_ITEM', payload: 'grapes'});
    dispatch(addItem(item));
  };

  return (
    <div className="menu">
      <div className="menu">
        <h1>{name}</h1>
        <h3>{cuisine}</h3>
        <h2>Menus</h2>
        <ul>
          {menus.map((item) => (
            <li key={item.id}>
              <div className="w-3/12 p-4">
                <div className="absolute">
                  <button
                    className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg cursor-pointer"
                    onClick={() => handleAddItem(item)}
                  >
                    Add +
                  </button>
                </div>
              </div>
              <img width={100} src={item.img_url} />
              {item.name} - {item.price} euros
            </li>
          ))}
        </ul>
      </div>

      <div className="font-bold">
        <RestaurantCategory />
      </div>
    </div>
  );
};

export default RestaurantMenu;
