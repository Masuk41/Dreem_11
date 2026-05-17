import React from "react";
import navImg from "../../assets/logo.png";
import coinImg from "../../assets/DoubleDollar.png";

const Navbar = ({ availableBalance }) => {
  return (
    <div className="navbar max-w-300 mx-auto">
      <div className="flex-1">
        <a className="h-20 w-20">
          <img src={navImg} alt="" />
        </a>
      </div>
      <div className="flex items-center gap-6 mr-6">
        <a href="/" className="hover:text-primary font-medium">
          Home
        </a>
        <a href="/fixture" className="hover:text-primary font-medium">
          Fixture
        </a>
        <a href="/teams" className="hover:text-primary font-medium">
          Teams
        </a>
        <a href="/schedules" className="hover:text-primary font-medium">
          Schedules
        </a>
      </div>
      <div className="flex items-center">
        <span className="mr-1">{availableBalance}</span>
        <span className="mr-1">Coin</span>
        <div className="mr-1">
          <img src={coinImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
