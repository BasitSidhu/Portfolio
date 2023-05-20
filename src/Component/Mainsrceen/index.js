import React from "react";
import Detail from "../Detail";
import Navbar from "../Navbar";
import './Mainscreen.css';

function Mainsrceen() {
  return (
    <div className="hero">
      <div>
        <Navbar />
      </div>
      <div>
        <Detail />
      </div>
    </div>
  );
}

export default Mainsrceen;
