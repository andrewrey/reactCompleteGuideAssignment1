import React from "react";

const GuestInput = ({ handleName, handleSubmit, pendingGuest }) => {
  return (
    <div class="input-wrapper">
      <input type="text" placeholder="Enter name..." onChange={handleName} value={pendingGuest} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default GuestInput;
