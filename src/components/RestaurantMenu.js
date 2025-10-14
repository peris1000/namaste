import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisine, rating, img_url, delivery_time } = resInfo.restaurant;
  const { menus } = resInfo;

  return (
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
  );
};

export default RestaurantMenu;
