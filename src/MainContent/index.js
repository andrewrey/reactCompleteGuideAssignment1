import React from "react";
import "./MainContent.scss";
import GuestInput from "./GuestInput";
import Output from "./Output";

const MainContent = ({ handleName, handleSubmit, pendingGuest, guests, removeName }) => (
  <main>
    <h2>Guest List</h2>
    <GuestInput handleName={handleName} handleSubmit={handleSubmit} pendingGuest={pendingGuest} />
    <Output guests={guests} removeName={removeName} />
  </main>
);
export default MainContent;
