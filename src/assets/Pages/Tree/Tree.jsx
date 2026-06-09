<<<<<<< HEAD
import React from "react";
=======
import React, { useState } from "react";
>>>>>>> 1ed3150eae84ca6a858a628e1274e57c1039e7ed
import "./Tree.css";

const leavesData = [
  {
    id: 1,
    text: "Aryan",
    left: "146px",
    top: "268px",
  },
<<<<<<< HEAD
=======

>>>>>>> 1ed3150eae84ca6a858a628e1274e57c1039e7ed
  {
    id: 2,
    text: "Alok",
    left: "191px",
    top: "185px",
  },
<<<<<<< HEAD
=======

>>>>>>> 1ed3150eae84ca6a858a628e1274e57c1039e7ed
  {
    id: 3,
    text: "Rahul",
    left: "50%",
    top: "200px",
  },
<<<<<<< HEAD
=======

>>>>>>> 1ed3150eae84ca6a858a628e1274e57c1039e7ed
  {
    id: 4,
    text: "Rishikesh",
    left: "65%",
    top: "220px",
  },
<<<<<<< HEAD
=======

>>>>>>> 1ed3150eae84ca6a858a628e1274e57c1039e7ed
  {
    id: 5,
    text: "Alkit",
    left: "75%",
    top: "25%",
  },
];

const Tree = () => {
<<<<<<< HEAD
  return (
    <div className="tree-container">
      {leavesData.map((leaf) => (
        <div
          key={leaf.id}
          className="leaf-wrapper"
          style={{
            left: leaf.left,
            top: leaf.top,
          }}
        >
          {/* DOT */}
          <div className="leaf">•</div>

          {/* DETAILS */}
          <div className="leaf-data">
            {leaf.text}
          </div>
        </div>
      ))}
=======
  const [fallenLeaves, setFallenLeaves] = useState([]);

  const handleClick = (id) => {
    if (!fallenLeaves.includes(id)) {
      setFallenLeaves([...fallenLeaves, id]);
    }
  };

  return (
    <div className="tree-container">

      {leavesData.map((leaf) => {

        const isFallen = fallenLeaves.includes(leaf.id);

        return (
          <div
            key={leaf.id}
            className={`leaf-wrapper ${isFallen ? "fall" : ""}`}
            style={{
              left: leaf.left,
              top: leaf.top,
            }}
            onClick={() => handleClick(leaf.id)}
          >
            {/* LEAF */}

            <div className="leaf">.</div>

            {/* SHOW DATA AFTER FALL */}

            {isFallen && (
              <div className="leaf-data">
                {leaf.text}
              </div>
            )}
          </div>
        );
      })}
>>>>>>> 1ed3150eae84ca6a858a628e1274e57c1039e7ed
    </div>
  );
};

export default Tree;