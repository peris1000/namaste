import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const params = useParams();

  const { resId } = useParams();

  useEffect(() => {
    console.log('param resId: ' + resId);
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const username = 'admin';
    const password = 'admin1';
    const basicAuth = 'Basic ' + btoa(`${username}:${password}`);
    const data = await fetch(
      'http://localhost:8080/api/restaurants/' + resId + '/menus',
      {
        method: 'GET',
        headers: {
          Authorization: basicAuth,
          'Content-Type': 'application/json',
        },
      }
    );
    // if (!data.ok) throw new Error(`HTTP ${data.status}`);

    const json = await data.json();
    console.log(json);
    setResInfo(json);
  };

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
