import React from "react";

export const Cell = ({ data, handleClick }) => {
  return (
    <div className="cell" onClick={handleClick}>
      <p>{data}</p>
    </div>
  );
};
