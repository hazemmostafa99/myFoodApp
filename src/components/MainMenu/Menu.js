import ChevronRight from "@mui/icons-material/ChevronRight";
import React from "react";
import "./MainMenu.scss";
const Menu = ({ MenuItems, MenuActive, menuActiveClass }) => {
  return (
    <ul className="Menu">
      {MenuItems.map((item) => {
        return (
          <li
            className={`${menuActiveClass === item.id ? "active" : ""}`}
            onClick={() => MenuActive(item.id , item.itemId)}
            key={item.id}
          >
            <div className="image">
              <img src={item.imgSrc} alt={item.name} />
            </div>
            <h3>{item.name} </h3>
            <span>
              <ChevronRight />
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
