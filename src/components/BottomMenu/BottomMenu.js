import {links} from "../../data";
import React from "react";
import "./BottomMenu.scss";
const BottomMenu = ({ clickHandler, classActive }) => {
  return (
    <div className="bottomMenu">
      <div className="container">
        <ul className="menu">
          {links.map((item) => (
            <li key={item.id}>
              <a
                className={classActive === item.id ? "active" : ""}
                onClick={() => clickHandler(item.id)}
                href={item.link}
              >
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BottomMenu;
