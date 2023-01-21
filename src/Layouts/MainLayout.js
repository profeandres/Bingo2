import React from "react";
import { Outlet } from "react-router-dom";
import "../styles/mainLayout.css";

const MainLayout = () => {
  return (
    <div className="bingo">
      <img
        className="bingo-bg"
        src="https://i.pinimg.com/originals/86/6f/30/866f30792413dcb70ce06c91c1ad3f4e.gif"
        alt="asd"
      />
      <div className="bingo-ui">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
