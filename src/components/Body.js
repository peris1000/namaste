import RestaurantCard from './RestaurantCard';
import { RESTAURANT_LIST } from '../utils/mock_data';

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {RESTAURANT_LIST.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
