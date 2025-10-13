import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { useEffect, useState } from 'react';

const Body = () => {
  // Local State variable - super powerful
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );
  const [searchText, setSearchText] = useState('');

  console.log('Body render');

  // runs after render
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch('http://localhost:8080/restaurants'); // returns a promise, gets restaurants from spring-demo5 project and mongo

    const json = await data.json();
    console.log(json);
    setListOfRestaurants(json);
    setFilteredListOfRestaurants(json);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer /> //conditional rendering
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredListOfRestaurants(filtered);
            }}
          >
            Search
          </button>
        </div>
        <button
          onClick={() => {
            const filtered = listOfRestaurants.filter((res) => res.rating > 4);
            setFilteredListOfRestaurants(filtered);
          }}
          className="filter-btn"
        >
          Top rated restaurants
        </button>
        <button
          onClick={() => {
            setSearchText('');
            setFilteredListOfRestaurants(listOfRestaurants);
          }}
          className="filter-btn"
        >
          All
        </button>
      </div>
      {filteredListOfRestaurants.length === 0 ? (
        <h1>No results</h1>
      ) : (
        <div className="res-container">
          {filteredListOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} resData={restaurant} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Body;
