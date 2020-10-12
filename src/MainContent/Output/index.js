import React from "react";
import GuestName from "../GuestName";

const Output = ({ guests }) => {
  return (
    <div className="guest-list">
      {guests.map((guest) => (
        <GuestName name={guest.name} />
      ))}
    </div>
  );
};

export default Output;
