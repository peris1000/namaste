import { Link } from 'react-router-dom';
import RestaurantCard, { withPromotedLabel } from './RestaurantCard';
import Shimmer from './Shimmer';
import { useContext, useEffect, useState } from 'react';
import useRestaurant from '../utils/useRestaurant';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Body = () => {
  // Local State variable - super powerful
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );
  const [searchText, setSearchText] = useState('');
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const { loggedInUser, setUserName } = useContext(UserContext);

  // runs after render
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
    }); // fetch returns a promise, gets restaurants from spring-demo5 project and mongo

    const json = await data.json();
    // console.log(json);
    setListOfRestaurants(json);
    setFilteredListOfRestaurants(json);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false) {
    return <h1>Looks like you are offline. Check your internet connection!</h1>;
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer /> //conditional rendering
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4 flex items-center">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredListOfRestaurants(filtered);
            }}
          >
            Search
          </button>

          <button
            className="px-4 py-2 bg-gray-50 m-4 rounded-lg"
            onClick={() => {
              const filtered = listOfRestaurants.filter(
                (res) => res.rating > 4
              );
              setFilteredListOfRestaurants(filtered);
            }}
          >
            Top rated restaurants
          </button>
          <button
            className="px-4 py-2 bg-gray-50 m-4 rounded-lg"
            onClick={() => {
              setSearchText('');
              setFilteredListOfRestaurants(listOfRestaurants);
            }}
          >
            All
          </button>
          <div>
            <label className="px-4">Username</label>
            <input
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              className="border border-solid border-black"
              value={loggedInUser}
            />
          </div>
        </div>
      </div>
      {filteredListOfRestaurants.length === 0 ? (
        <h1>No results</h1>
      ) : (
        <div className="flex flex-wrap">
          {filteredListOfRestaurants.map((restaurant) => (
            <Link to={'/restaurants/' + restaurant.id} key={restaurant.id}>
              {restaurant.promoted ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
export default Body;
