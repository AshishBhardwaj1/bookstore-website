import React, { useEffect, useState } from "react";
import "./cart.css";
const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  const handleRemove = (id) => {
    const remove = cart.filter((item) => item.id !== id);
    setCart(remove);
  };
  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => {
      return (ans += item.amount * item.price);
    });
    setPrice(ans);
  };
  useEffect(() => {
    handlePrice();
  });

  return (
    <div className="total-items">
      <article>
        {cart?.map((item) => (
          <div className="cart-box" key={item.id}>
            <div className="cart-img">
              <img src={item.img} alt="" />
              <p>{item.title}</p>
            </div>
            <div>
              <button onClick={() => handleChange(item, +1)}>+</button>
              <button onClick={() => handleChange(item, -1)}>-</button>
            </div>
            <div>
              <span> {item.price} </span>
              <button onClick={() => handleRemove(item.id)}>remove</button>
            </div>
          </div>
        ))}
        <div className="total">
          <span>Total price of your cart</span>
          <span> Rs- {price} </span>
        </div>
      </article>
    </div>
  );
};
export default Cart;
