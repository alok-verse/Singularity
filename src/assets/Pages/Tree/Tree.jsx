import React from "react";
import "./Tree.css";

const leavesData = [
  {
    id: 1,
    text: "Aryan",
    left: "146px",
    top: "268px",
  },
  {
    id: 2,
    text: "Alok",
    left: "191px",
    top: "185px",
  },
  {
    id: 3,
    text: "Rahul",
    left: "50%",
    top: "200px",
  },
  {
    id: 4,
    text: "Rishikesh",
    left: "65%",
    top: "220px",
  },
  {
    id: 5,
    text: "Alkit",
    left: "75%",
    top: "25%",
  },
];

const Tree = () => {
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
    </div>
  );
};

export default Tree;