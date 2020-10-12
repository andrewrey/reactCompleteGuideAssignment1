import React from "react";

const GuestName = ({ name }) => {
  return (
    <div className="guestCard">
      <h3>
        {name} <i class="fas fa-times-circle" />
      </h3>
    </div>
  );
};

export default GuestName;
