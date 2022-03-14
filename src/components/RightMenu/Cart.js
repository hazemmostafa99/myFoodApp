import React from "react";
import { GlobalContext } from "../../Context";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart } = GlobalContext();
  return (
    <div className="cart">
      {cart.map((item) => (
        <CartItem
          key={item.id}
          amount={item.amount}
          id={item.id}
          itemId={item.itemId}
          imgSrc={item.imgSrc}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default Cart;
