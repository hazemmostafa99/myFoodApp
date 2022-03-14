import React from "react";
// import {
//   BarChart,
//   SearchRounded,
//   ShoppingCartOutlined,
// } from "@material-ui/icons";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import BarChartIcon from "@mui/icons-material/BarChart";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./Navbar.scss";
import { GlobalContext } from "../../Context";
const Navbar = ({ setOpenSideBar, openSideBar }) => {
  const { amount } = GlobalContext();
  return (
    <nav>
      <div className="container">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Flogo.png?alt=media&token=fc228623-ef27-4af4-8ea5-b9ebeeaf47dc"
          alt=""
          className="logo"
        />
        <div className="inputBox">
          <SearchRoundedIcon />
          <input type="text" placeholder="search" />
        </div>
        <div className="cart">
          <ShoppingCartOutlinedIcon />
          <span className="cart-count">{amount} </span>
        </div>
        <div className="profile">
          <h4>Hazem</h4>
          <div className="profile-img">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFqCCPaO3bPD5f7gbTyZ5MBb9Q1wFuQDxdhA&usqp=CAU"
              alt="profile"
            />
          </div>
        </div>
        <div onClick={() => setOpenSideBar(!openSideBar)} className="menu">
          <BarChartIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
