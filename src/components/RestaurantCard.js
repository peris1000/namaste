const styleCard = {
  backgroundColor: '#f0f0f0',
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { id, name, img_url, cuisine, stars, delivery_time } = resData;

  return (
    <div className="res-card" style={styleCard}>
      <img className="res-card-img" src={img_url} />
      <h3>{name}</h3>
      <h4>{cuisine}</h4>
      <h4>{stars} stars</h4>
      <h4>{delivery_time} mins</h4>
    </div>
  );
};
export default RestaurantCard;
