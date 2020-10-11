import React from "react";
import "./MainContent.scss";
import GuestInput from "./GuestInput";

const MainContent = ({ handleName }) => (
  <main>
    <h2>Guest List</h2>
    <GuestInput handleName={handleName} />
  </main>
);
export default MainContent;
