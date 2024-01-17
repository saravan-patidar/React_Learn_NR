import { useDispatch } from "react-redux";
import { ITEM_IMG_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";

const ItemList = ({ itemCards }) => {
  const dispatch = useDispatch();
  const handleAddItems = (x) => {
    dispatch(addItems(x));
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
            <div className="min-h-[100px] w-1/6 relative ">
              {!imageId ? null : (
                <img
                  src={ITEM_IMG_URL + imageId}
                  alt="img"
                  className="rounded-md h-[100%] "
                />
              )}
              <button
                onClick={() => handleAddItems(x)}
                className="bg-green-400 p-1  text-md font-bold cursor-pointer absolute rounded-md bottom-1 translate-x-full hover:bg-green-500"
              >
                ADD +
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default ItemList;
