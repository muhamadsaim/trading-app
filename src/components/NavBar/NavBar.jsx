import React, { useState } from "react";
import { Box, Grid, Badge, Stack, Avatar } from "@mui/material";

import NotificationMenu from "./NotificationMenu/NotificationMenu";
import Filter from "./Filters/Filter";
import SwitchMode from "./Switch/SwitchMode";
import ModeChange from "../../Theme/ChangeMode";
import LogoutPop from "./logout/LogoutPop";

const NavBar = ({ name }) => {
  const lightTheme = ModeChange();

  

  const mainDiv = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "20px",
    paddingRight: "20px",
    width: "100%",
    height: "62px",
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    boxShadow: `${lightTheme.boxShadow}`,
    borderRadius: "6px",
  };
  const rightDiv = {
    display: "flex",
    alignItems: "center",
  };
  const filterAndNotify = {
    display: "flex",
  };
  const leftDiv = {
    color: `${lightTheme.headingTextColor}`,
  };

  const personInfo = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  };

 

  return (
    <div style={mainDiv}>
      <div>
        <h4 style={leftDiv}>{name}</h4>
      </div>
      <div style={rightDiv}>
        <SwitchMode />
        <div style={filterAndNotify}>
          <Filter />
          <NotificationMenu />
        </div>
        
        <LogoutPop/>
      </div>
    </div>
  );
};

export default NavBar;
