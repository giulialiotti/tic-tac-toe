import React from "react";

export const NamePlayer = ({ label }) => {
  return (
    <div className="name-player">
      <label htmlFor="Name">{label}</label>
      <input type="text" id="Name" name="Name" placeholder="Enter a name" />
    </div>
  );
};
