import React from "react";

const GuestName = ({ name, removeName }) => {
  return (
    <div className="guestCard">
      <h3>
        {name} <i className="fas fa-times-circle" onClick={() => removeName(name)} />
      </h3>
    </div>
  );
};

export default GuestName;
