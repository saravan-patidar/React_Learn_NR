import { useDispatch, useSelector } from "react-redux";
import { ITEM_IMG_URL } from "../utils/constants";
import { addItems, decreaseItems, removeItems } from "../utils/cartSlice";

const ItemList = ({ itemCards }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((store) => store.cart.items);

  const handleAddItems = (x) => {
    dispatch(addItems(x));
  };
  const getItemCount = (id) => {
    const currItem = cartItem.find((item) => item.card.info.id === id);
    return currItem ? currItem.quantity : "ADD";
  };

  return (
    <>
      {itemCards.map((x) => {
        const { name, price, description, imageId, id } = x?.card?.info;
        return (
          <div
            key={id}
            className="flex justify-between items-center p-2 m-3 shadow-md bg-slate-100"
          >
            <div className="w-4/6 ">
              <h4 className="font-bold text-lg">
                {name} - ₹{price / 100}
              </h4>
              <p className="text-sm py-2">{description}</p>
            </div>
            <div className="w-2/6 h-44 relative ">
              {!imageId ? null : (
                <img
                  src={ITEM_IMG_URL + imageId}
                  alt="img"
                  className="rounded-md h-full w-full "
                />
              )}
              <div className="absolute rounded-md -translate-x-1/2 left-1/2 bottom-10 bg-slate-300 p-1">
                <button
                  className=" text-red-600 font-bold cursor-pointer text-lg px-1"
                  onClick={() =>
                    getItemCount(id) === 1
                      ? dispatch(removeItems(id))
                      : dispatch(decreaseItems(id))
                  }
                >
                  -
                </button>
                <span className="px-2">{getItemCount(id)}</span>
                <button
                  onClick={() => handleAddItems(x)}
                  className=" text-green-600 font-bold cursor-pointer text-lg px-1"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default ItemList;
