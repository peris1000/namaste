import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
import Shimmer from './Shimmer';
import { useState } from 'react';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisine, rating, img_url, delivery_time } = resInfo.restaurant;
  const { menus } = resInfo;

  return (
    <div className="menu">
      <div className="menu">
        <h1>{name}</h1>
        <h3>{cuisine}</h3>
        <h2>Menus</h2>
        <ul>
          {menus.map((item) => (
            <li key={item.id}>
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
