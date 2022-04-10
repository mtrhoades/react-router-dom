import React from "react";
import SpaceKitten from "../components/SpaceKitten";

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
      <div>
        <li> She packed my bags last night pre-flight Zero hour 9:00 a.m.</li>
        <li>And I'm gonna be high As a kite by then I miss the Earth so much I miss my wife</li>
        <li>It's lonely out in space On such a timeless flight</li>
        <li>And I think it's gonna be a long, long time 'Til touchdown brings me 'round again</li>
        <li>
          to find I'm not the kitten they think I am at home Oh, no, no, no I'm a rocket kitten
        </li>
        <li>rocket kitten, burning out his fuse up here alone </li>
      </div>
    </div>
  );
}
