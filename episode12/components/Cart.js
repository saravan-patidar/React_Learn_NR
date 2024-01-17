import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItems } from "../utils/cartSlice";
import { ITEM_IMG_URL } from "../utils/constants";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems[0].card.info.id);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemove = (id) => {
    dispatch(removeItems(id));
    console.log("clicked");
  };

  return (
    <div className="text-center p-6 h-screen">
      <h1 className="font-bold p-2 text-lg underline">Cart Items Here !!!</h1>
      <div className="w-5/12 m-auto bg-gray-300 p-1 ">
        <button
          className="m-1 p-1 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>

        <div>
          {cartItems.map((x) => {
            const { name, price, imageId, id } = x?.card?.info;
            return (
              <div
                key={id}
                className="flex justify-around items-center p-4 m-auto my-2 w-4/6 h-28 shadow-md bg-slate-100 rounded-xl"
              >
                <div className="h-full ">
                  {!imageId ? null : (
                    <img
                      src={ITEM_IMG_URL + imageId}
                      alt="img"
                      className="rounded-md h-full "
                    />
                  )}
                </div>
                <div className="  ">
                  <h4 className="font-bold text-lg">
                    {name} - ₹{price / 100}
                  </h4>

                  <button
                    onClick={() => handleRemove(id)}
                    className="bg-red-400 p-1 m-1  text-md font-bold cursor-pointer  rounded-md  hover:bg-green-500"
                  >
                    Remove -
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Cart;
