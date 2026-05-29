import React, { useState } from "react";
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
    </div>
  );
};

export default Tree;