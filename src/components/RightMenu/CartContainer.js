import React from "react";
import MenuCategory from "../MainMenu/MenuCategory";
import Cart from "./Cart";

const CartContainer = ({ cart }) => {
  return (
    <div className="CartContainer">
      <MenuCategory name={"Cart Menu"} />
      <Cart />
    </div>
  );
};

export default CartContainer;
