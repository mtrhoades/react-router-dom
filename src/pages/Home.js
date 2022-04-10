import React from "react";
import Monster from "../components/Monster";
import Ninja from "../components/Ninja";
import SpaceKitten from "../components/SpaceKitten";

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#40a541",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Home</h1>
      <div style={{ display: "flex", justifyContent: "space-around", width: "75vw" }}>
        <Ninja />
        <Monster />
        <SpaceKitten />
      </div>
    </div>
  );
}
