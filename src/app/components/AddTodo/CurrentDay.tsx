import React from "react";

const CurrentDay = () => {
  const currentDay = new Date().toLocaleDateString();

  return <div>created on: {currentDay}</div>;
};

export default CurrentDay;
