import toast, { Toaster } from "react-hot-toast";
import { IoIosCloseCircle } from "react-icons/io";

// eslint-disable-next-line react/prop-types
const CartModal = ({ closeFn, data }) => {
  // LOCAL STORAGE FUNCTIONALITY
  const getCartData = () => {
    const cartData = localStorage.getItem("cart");
    return cartData ? JSON.parse(cartData) : [];
  };

  const updateCartData = (newData) => {
    localStorage.setItem("cart", JSON.stringify(newData));
  };

  const isItemInCart = (itemId) => {
    const existingCartData = getCartData();
    return existingCartData.some((item) => item.id === itemId);
  };

  const addToCart = () => {
    const itemId = data?.show?.id;

    if (!isItemInCart(itemId)) {
      // Get existing cart data
      const existingCartData = getCartData();

      // Add new item to the cart
      const newItem = {
        id: data?.show?.id,
        name: data?.show?.name,
      };

      // Update the cart data
      const newCartData = [...existingCartData, newItem];
      updateCartData(newCartData);

      closeFn();

      toast.success("Item successfully added!", { duration: 2500 });
    } else {
      toast.error("Item is already in the cart", { duration: 2500 });
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60">
      <div className="fixed bg-white w-2/3 md:w-1/2 h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 rounded-md">
        <button
          onClick={() => closeFn()}
          className="absolute right-1 top-1 hover:scale-105"
        >
          <IoIosCloseCircle className="text-red-500" />
        </button>
        <div className="select-none grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="col-span-2">
            <img
              src={data?.show?.image?.original}
              alt={data?.show?.name}
              width={200}
            />
          </div>
          <div className="bg-gray-100 p-2 rounded-md">{data?.show?.name}</div>
          <div className="bg-gray-100 p-2 rounded-md">{data?.show?.type}</div>
          <div className="bg-gray-100 p-2 rounded-md">
            {data?.show?.rating?.average}
          </div>
          <div className="bg-gray-100 p-2 rounded-md">
            {data?.show?.genres?.map((genre) => (
              <span key={genre}>{genre} | </span>
            ))}
          </div>
        </div>
        <button
          className="bg-green-600 hover:bg-green-500 active:scale-95 text-white text-xs font-semibold px-3 py-2 w-full rounded-md select-none mt-3"
          onClick={() => addToCart()}
        >
          Purchase
        </button>
      </div>
      <Toaster />
    </div>
  );
};

export default CartModal;
