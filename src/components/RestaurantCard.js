const RestaurantCard = (props) => {
  const { resData } = props;
  const { id, name, address, img_url, cuisine, rating, delivery_time } =
    resData;

  return (
    <div className="m-4 p-4 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-200  hover:shadow-lg cursor-pointer">
      <img className="rounded-lg" src={img_url} />
      <h3 className="py-2 font-bold text-lg">{name}</h3>
      <h5>{address}</h5>
      <h4>{cuisine}</h4>
      <h4>{rating} stars</h4>
      <h4>{delivery_time} mins</h4>
    </div>
  );
};
export default RestaurantCard;
