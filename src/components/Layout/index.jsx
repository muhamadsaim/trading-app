import React from "react";
import Sidebar from "../sideBar/Sidebar";
import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
     
      <div style={{ display: "flex", height: "100%" }}>
        <Sidebar style={{ height: "100%" }} />
        <div style={{ flex: 1 }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
