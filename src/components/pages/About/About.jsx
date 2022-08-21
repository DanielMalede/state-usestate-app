import "./About.css";
import React, { useEffect, useState } from "react";

function About() {
  const [something,setSomething] = useState("initial state")
  useEffect(()=>{alert("mount")},[something]);
  return (
    <div className="about">
      <h1>About</h1>
      <h2>{something}</h2>
      <button onClick={()=>setSomething("new state")}>click</button>
    </div>
  );
};

export default About;
