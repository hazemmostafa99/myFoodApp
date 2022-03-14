import React from "react";
import CartContainer from "./CartContainer";
import CheckOut from "./CheckOut";
import DebiteCard from "./DebiteCard";
import "./RightMenu.scss";
const RightMenu = ({ openSideBar, cart }) => {
  return (
    <div className={`right-menu ${openSideBar ? "active" : "right-menu"}`}>
      <DebiteCard />
      <CartContainer />
      <CheckOut />
    </div>
  );
};

export default RightMenu;
