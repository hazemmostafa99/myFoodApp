import React, { useState } from "react";
import "./MainMenu.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarRateIcon from "@mui/icons-material/StarRate";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { GlobalContext } from "../../Context";
const Item = ({ id, name, imgSrc, price, ratings }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [rate, setRate] = useState(Math.floor(ratings));
  const { CartHandler } = GlobalContext();
  const rateHandler = (i) => {
    setRate(i);
    console.log(i);
  };
  return (
    <div key={id} className="item">
      <div className="image">
        <img src={imgSrc} alt={name} />
      </div>
      <span className="fav" onClick={() => setIsFavorite(!isFavorite)}>
        {isFavorite ? (
          <FavoriteIcon className="active" />
        ) : (
          <FavoriteBorderIcon />
        )}
      </span>
      <h3>{name}</h3>
      <div className="bottom">
        <div className="content">
          {Array.apply(null, { length: 5 }).map((e, i) => (
            <span key={i} className={`rate ${i < rate ? "orange" : "gray"}`}>
              <StarRateIcon onClick={() => rateHandler(i + 1)} />
            </span>
          ))}
          <p>
            <span>$</span> {price}
          </p>
        </div>
        <button onClick={() => CartHandler(id)} className="add">
          <AddRoundedIcon />
        </button>
      </div>
    </div>
  );
};

export default Item;
