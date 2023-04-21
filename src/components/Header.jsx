import React from "react";

const Header = ({ page, user }) => {
  return (
    <div className="flex justify-between px-4 pt-4">
      <h2>{page}</h2>
      <h2>Welcome back, {user}</h2>
    </div>
  );
};

export default Header;
