import React from "react";

import { Outlet } from "react-router-dom";
import Nav from "../component/Nav/Nav";

const Main = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
