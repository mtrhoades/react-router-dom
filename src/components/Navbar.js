import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        backgroundColor: "#ccd7f6",
        color: "black",
      }}
    >
      <Link to='/'>Home</Link>
      <Link to='/portfolio'>Portfolio</Link>
      <Link to='/about'>About</Link>
    </div>
  );
}
