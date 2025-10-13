import RestaurantCard from './RestaurantCard';
import { RESTAURANT_LIST } from '../utils/mock_data';
import { useState } from 'react';

const Body = () => {
  // Local State variable - super powerful
  const [listOfRestaurants, setListOfRestaurants] = useState(RESTAURANT_LIST);

  // normal js variable
  let mylistJS = [
    {
      id: 1,
      name: 'Meghana Foods',
      cuisine: 'Biryani, North Indian, Asian',
      img_url:
        'https://b.zmtcdn.com/data/pictures/5/18806395/85930dbbfb5c45c9ba6a498ceb198e8d_featured_v2.jpg',
      avg_rating: 4.3,
      delivery_time: 38,
    },
    {
      id: 2,
      name: 'Meghana Foods2',
      cuisine: 'Biryani, North Indian, Asian',
      img_url:
        'https://b.zmtcdn.com/data/pictures/5/18806395/85930dbbfb5c45c9ba6a498ceb198e8d_featured_v2.jpg',
      avg_rating: 3.3,
      delivery_time: 38,
    },
  ];

  return (
    <div className="body">
      <div className="filter">
        <button
          onClick={() => {
            const filtered = listOfRestaurants.filter(
              (res) => res.avg_rating > 4
            );
            setListOfRestaurants(filtered);
          }}
          className="filter-btn"
        >
          Top rated restaurants
        </button>
        <button
          onClick={() => {
            setListOfRestaurants(RESTAURANT_LIST);
          }}
          className="filter-btn"
        >
          All
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
