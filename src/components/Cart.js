import React from "react";
import Card from "react-bootstrap/Card";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem, updateQuantity } from "../redux/slices/cartSlice";
import CartEmpty from "./CartEmpty";
import OrderSummary from "./OrderSummary";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(deleteItem(id));
  };

  const increaseQuantity = (id) => {
    dispatch(updateQuantity({ id, increment: true }));
  };

  const decreaseQuantity = (id) => {
    dispatch(updateQuantity({ id, increment: false }));
  };

  const total = items.reduce((a, b) => a + b.price * b.quantity, 0);

  return (
    <div className="bg-gray-50 min-h-screen overflow-x-hidden ">
      {items.length === 0 ? (
        <CartEmpty />
      ) : (
        <div>
          <div className="container px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 ">
              <div className=" left-3 relative space-y-4 mb-8">
                {items.map((product) => (
                  <Card
                    key={product.id}
                    className="bg-gray-900 text-white border-none flex items-center p-4"
                    style={{ maxWidth: "300px", minHeight: "150px" }}
                  >
                    <Card.Img
                      variant="top"
                      src={product.image}
                      className="h-40 w-80 object-cover shadow-sm"
                    />
                    <div className="flex flex-col justify-between w-full text-center">
                      <h6 className="text-black font-light mt-2">
                        {product.title}
                      </h6>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <button
                            className="bg-black text-white px-2 py-1 rounded-full"
                            onClick={() => decreaseQuantity(product.id)}
                            disabled={product.quantity <= 1}
                          >
                            -
                          </button>
                          <span className="text-black font-semibold">
                            {product.quantity}
                          </span>
                          <button
                            className="bg-black text-white px-2 py-1 rounded-full"
                            onClick={() => increaseQuantity(product.id)}
                          >
                            +
                          </button>
                        </div>
                        <button
                          className="bg-black text-white px-3 py-2 rounded-lg"
                          onClick={() => removeFromCart(product.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              <div>
                <OrderSummary items={items} total={total} link="/checkout" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
