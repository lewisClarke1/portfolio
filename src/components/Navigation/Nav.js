import React from "react";

const Nav = () => {
  return (
    <nav className="bg-[#2B7A78] flex justify-end items-center">
      <button className="text-3xl m-2 hover:text-[#FFD700] hover:underline">
        Home
      </button>
      <button className="text-3xl m-2 hover:text-[#FFD700] hover:underline">
        Projects
      </button>
      <button className="text-3xl m-2 hover:text-[#FFD700] hover:underline">
        About me
      </button>
    </nav>
  );
};

export default Nav;
