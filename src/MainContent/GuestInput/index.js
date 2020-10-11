import React from "react";

const GuestInput = ({ handleName, handleSubmit, pendingGuest }) => {
  return (
    <div>
      <input type="text" placeholder="Enter name for guest list" onChange={handleName} value={pendingGuest} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default GuestInput;
