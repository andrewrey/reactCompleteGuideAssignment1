import React from "react";

const GuestName = ({ name }) => {
  return (
    <div className="guestCard">
      <h3>{name}</h3>
    </div>
  );
};

export default GuestName;
