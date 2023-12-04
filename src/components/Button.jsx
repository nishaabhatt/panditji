import React from "react";

const Button = ({ name, handleFunction, hide, show }) => {
  return (
    <button
      className={`px-4 py-3 bg-secondary  rounded-xl text-textSecondary ${hide} lg:${show}`}
      onClick={handleFunction}
    >
      {name}
    </button>
  );
};

export default Button;
