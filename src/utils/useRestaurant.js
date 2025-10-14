import { useEffect, useState } from 'react';

const useRestaurant = () => {
  const [resList, setResList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const username = 'admin';
    const password = 'admin1';
    const basicAuth = 'Basic ' + btoa(`${username}:${password}`);
    const data = await fetch('http://localhost:8080/api/restaurants', {
      method: 'GET',
      headers: {
        Authorization: basicAuth,
        'Content-Type': 'application/json',
      },
    });
    const json = await data.json();
    setResList(json);
  };
  return resList;
};

export default useRestaurant;
