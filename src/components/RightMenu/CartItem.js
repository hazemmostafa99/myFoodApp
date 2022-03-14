import AddRounded from "@mui/icons-material/AddRounded";
import RemoveIcon from "@mui/icons-material/Remove";
import { GlobalContext } from "../../Context";

const CartItem = ({ id, itemId, imgSrc, name, price, amount }) => {
  const { increase, decrease } = GlobalContext();
  return (
    <div className="CartItem">
      <div className="imgbox">
        <img src={imgSrc} alt={name} className="image" />
      </div>
      <div className="desc">
        <h4>{name}</h4>
        <div className="qty">
          <span>x {amount} </span>
          <div className="sign">
            <i onClick={() => increase(id)}>
              <AddRounded />
            </i>
            <i onClick={() => decrease(id)}>
              <RemoveIcon />
            </i>
          </div>
        </div>
      </div>
      <div className="price">
        <span>$ </span>
        {price}
      </div>
    </div>
  );
};

export default CartItem;
