import ChevronRight from '@mui/icons-material/ChevronRight';
import React from "react";
import "./MainMenu.scss";
const MenuCategory = ({name}) => {
  return (
    <div className="menu-category">
      <div className="category">
        <h2>{name}</h2>
      </div>
      <div className="veiwAll">
       <p>Veiw All</p> 
        <span>
          <ChevronRight />
        </span>
      </div>
    </div>
  );
};

export default MenuCategory;
