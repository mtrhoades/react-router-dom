import React from "react";
import SpaceKitten from "../components/SpaceKitten";
import Description from "../components/Description";

export default function About() {
  return (
    <div
      style={{
        backgroundColor: "#0096D1",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>About Me</h1>
      <SpaceKitten />
      <Description />
    </div>
  );
}
