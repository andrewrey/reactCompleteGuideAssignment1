import React from "react";
import "./MainContent.scss";
import GuestInput from "./GuestInput";

const MainContent = ({ handleName, handleSubmit, pendingGuest }) => (
  <main>
    <h2>Guest List</h2>
    <GuestInput handleName={handleName} handleSubmit={handleSubmit} pendingGuest={pendingGuest} />
  </main>
);
export default MainContent;
