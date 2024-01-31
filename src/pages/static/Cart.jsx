const Cart = () => {
  // HAVING THE CART DATA FROM LOCAL STORAGE
  const getCartData = () => {
    const cartData = localStorage.getItem("cart");
    return cartData ? JSON.parse(cartData) : [];
  };

  //   STORING IT INTO A VARIABLE
  const cartData = getCartData();

  return (
    <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto flex justify-between items-center my-5">
      {cartData.length === 0 ? (
        "There is no data into the cart"
      ) : (
        <div>
          {cartData.map((data) => (
            <p className="bg-gray-100 rounded p-3" key={data?.id}>
              {data?.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
