import { removeItem, clearCart } from '../utils/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
  // subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items); // attention to select specific slice from beginning, to avoid perf issues
  console.log(cartItems);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    // dispatch an action to clear the cart
    dispatch(clearCart());
  };
  const handleRemoveFromCart = (item) => {
    // dispatch an action to remove from the cart
    dispatch(removeItem(item));
  };

  return (
    <div className="m-4 p-4 text-center">
      <h1 className="font-bold text-2xl">Cart - {cartItems.length} items</h1>
      <ul className="w-6/12 m-auto">
        {cartItems.map((item, index) => (
          <li key={index} className="p-4 m-4 border border-gray-200">
            <span className="flex justify-between">
              <label>
                <img src={item.img_url} width={100} />
                {item.name}
              </label>
              {item.price} euros{' '}
              <button
                className="p-4 m-4 bg-black text-white rounded-lg cursor-pointer"
                onClick={() => handleRemoveFromCart(item)}
              >
                Remove
              </button>
            </span>
          </li>
        ))}
      </ul>
      <div className="w-6/12 m-auto">
        {cartItems.length === 0 ? (
          <h3>You cart is empty!</h3>
        ) : (
          <button
            className="p-4 m-4 bg-black text-white rounded-lg cursor-pointer"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        )}
      </div>
    </div>
  );
};
export default Cart;
