import { useEffect, useState } from 'react';

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
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
    const json = await data.json();
    setResInfo(json);
  };
  return resInfo;
};

export default useRestaurantMenu;
