import React from "react";

const GuestInput = ({ handleName }) => {
  return (
    <div>
      <input type="text" placeholder="Enter name for guest list" onChange={handleName} />
    </div>
  );
};

export default GuestInput;
