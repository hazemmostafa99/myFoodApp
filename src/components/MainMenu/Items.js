import React from "react";
import Item from "./Item.js";
import "./MainMenu.scss";
const Items = ({ foodShow, CartHandler }) => {
  return (
    <div className="items">
      {foodShow.map((item) => {
        return <Item  key={item.id} {...item} />;
      })}
    </div>
  );
};

export default Items;
