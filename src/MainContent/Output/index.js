import React from "react";
import GuestName from "../GuestName";

const Output = ({ guests, removeName }) => {
  return (
    <div className="guest-list">
      {guests.map((guest) => (
        <GuestName name={guest.name} removeName={(name) => removeName(name)} key={guest.id} />
      ))}
    </div>
  );
};

export default Output;
