import React from "react";

const budgetBox = ({ name, price }) => {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        width: "30%",
        borderRadius: "10px",
      }}
    >
      <p style={{ margin: "5px" }}>{name}</p>
      <h1>${price}</h1>
    </div>
  );
};

export default budgetBox;
