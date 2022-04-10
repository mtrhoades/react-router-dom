import React from "react";
import Monster from "../components/Monster";
import Ninja from "../components/Ninja";
export default function Animals() {
  return (
    <div
      style={{
        backgroundColor: "#DC602E",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Portfolio</h1>
      <Ninja />
      <Monster />
    </div>
  );
}
