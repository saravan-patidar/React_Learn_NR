import { ITEM_IMG_URL } from "../utils/constants";

const ItemList = ({ itemCards }) => {
  return (
    <>
      {itemCards.map((x) => {
        const { name, price, description, imageId, id } = x?.card?.info;
        return (
          <div
            key={id}
            className="flex justify-between items-center p-2 m-3 shadow-md"
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
              <button className="bg-green-400 p-3 px-6 text-xl font-bold cursor-pointer absolute rounded-md bottom-0 left-7  hover:bg-green-500">
                ADD
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default ItemList;
