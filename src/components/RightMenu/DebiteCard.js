import React from "react";

const DebiteCard = () => {
  return (
    <div className="debite-card">
      <div className="card">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2FVisaLogo.png?alt=media&token=d6cac80d-a066-4388-97c2-9a57acfe4266"
          alt=""
          className="card-logo"
        />

        <img
          src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fchip.png?alt=media&token=401162f6-2dd2-4da4-bef7-6479c132789c"
          alt=""
          className="card-chip"
        />

        <div className="number">1234 5678 355 25</div>
        <div className="name">Hazem Mostafa</div>
        <div className="card-from">10 / 22</div>
        <div className="card-to">10 / 25</div>
        <div className="card-ring"></div>
      </div>
    </div>
  );
};

export default DebiteCard;
