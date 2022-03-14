import React from "react";
import { GlobalContext } from "../../Context";

const CheckOut = () => {
  const { total } = GlobalContext();
  return (
    <div className="CheckOut">
      <div className="total">
        <h3>Total</h3>
        <div className="price">
          <span>$ </span>
          {total}
        </div>
      </div>
      <button className="btn">Check Out</button>
    </div>
  );
};

export default CheckOut;
