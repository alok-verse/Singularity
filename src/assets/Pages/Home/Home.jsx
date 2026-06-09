import React from "react";
import "./Home.css";
import Tree from "../Tree/Tree";



const Home = () => {
  return (
    <section className="hero">
      <div className="left-content">
        <span className="small-title">
          SINGULARITY ARCHITECTS • SINCE 2012
        </span>

        <h1>
          Architecture <br />
          <span>Redefined</span> <br />
          by Vision
        </h1>

        <div className="stats">
          <div>
            <h2>6</h2>
            <p>PROJECTS</p>
          </div>

          <div>
            <h2>38</h2>
            <p>AWARDS</p>
          </div>

          <div>
            <h2>18</h2>
            <p>COUNTRIES</p>
          </div>
        </div>

        <button className="explore-btn">EXPLORE WORK →</button>
      </div>

      <div className="tree-section">
        {<Tree/>}
<<<<<<< HEAD
        <img src="tree2.svg" alt="" />
=======
        <img src="tree2.png" alt="" />
>>>>>>> 1ed3150eae84ca6a858a628e1274e57c1039e7ed
      </div>
    </section>
  );
};

export default Home;