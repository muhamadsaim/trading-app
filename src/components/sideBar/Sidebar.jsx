import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import logo from "../../assets/login/logo.png";
import { NavLink, useFetcher } from "react-router-dom";
import { Divider, Tooltip } from "@mui/material";
import ModeChange from "../../Theme/ChangeMode";
import NewsCard from "./NewsCard";
import { useDispatch, useSelector } from "react-redux";
import apiService from "../../services/api/api";
import { bindActionCreators } from "redux";
import { actionCreator } from "../../Redux/AllAccess";
import { ApiError } from "../../helper/apiError";
import { menuDark } from "./constantData";
import { menuLight } from "./constantData";

const Sidebar = () => {
  const lightTheme = ModeChange();
  const dispatch = useDispatch();
  const { fileChecking } = bindActionCreators(actionCreator, dispatch);
  const authenticateUser = useSelector((state) => state.authenticateUser);
  const mode = useSelector((state) => state.mode);
  const fileCheck = useSelector((state) => state.fileCheck);
  const [isOpen, setIsOpen] = useState(false);
  const [menuItemDark,setMenuItemDark]=useState(menuDark)
  const [menuItemLight,setMenuItemLight]=useState(menuLight)

 
  const fileUploadDark = [
    {
      path: "/usercsv",
      name: "Upload File",
      icon: "/sidebarImages/upload.png",
    },
  ];
  const fileUploadLight = [
    {
      path: "/usercsv",
      name: "Upload File",
      icon: "/sidebarImages/uploadW.png",
    },
  ];
  const settingLight = [
    {
      path: "/setting",
      name: "Setting",
      icon: "/sidebarImages/settingW.png",
    },
  ];
  const settingDark = [
    {
      path: "/setting",
      name: "Setting",
      icon: "/sidebarImages/setting.png",
    },
  ];

  const linkStyle = {
    "&:hover": {
      backgroundColor: `${lightTheme.hoverColor}`,
    },
    "&:active": {
      backgroundColor: `${lightTheme.activeColor}`,
    },
  };

  const checkFileExistence = async () => {
    try {
      const Token = localStorage.getItem("AuthToken");
      const response = await apiService(
        "get",
        "/auth/usersFileExist",
        { "x-usertoken": Token },
        null
      );
      if (response === "exist") {
        fileChecking(true);
      } else {
        fileChecking(false);
      }
    } catch (error) {
      const errorMessage = ApiError(error);
      console.error("API Error:", errorMessage);
    }
  };

  useEffect(() => {
    checkFileExistence();
  }, []);

  const fullMenuItem = mode ? menuItemLight : menuItemDark;
  const fileUploadItem = mode ? fileUploadLight : fileUploadDark;
  const menuItems = fileCheck ? fullMenuItem : fileUploadItem;

  const settingTheme = mode ? settingLight : settingDark;
  const settingToggle = fileCheck ? settingTheme : null;

  return (
    <div className="container">
      {authenticateUser && (
        <div
          className="sidebar"
          style={{
            width: isOpen ? "250px" : "70px",
            backgroundColor: lightTheme.ComponentBackgroundColor,
          }}
        >
          {/* Top Section of Sidebar */}

          <div className="topSection">
            <div className="logoSection">
              <img
                src={logo}
                alt="logo Image"
                className="logoImg"
                style={{ backgroundColor: "transparent" }}
              />
              <p
                className="name"
                style={{
                  display: isOpen ? "block" : "none",
                  color: lightTheme.textColor,
                }}
              >
                Journal Trade
              </p>
            </div>
            <div className="openArrow">
              {isOpen ? (
                <IoIosArrowDropleftCircle
                  size={30}
                  onClick={() => setIsOpen(!isOpen)}
                  style={{ color: lightTheme.sidebarArrow }}
                />
              ) : (
                <IoIosArrowDroprightCircle
                  size={30}
                  onClick={() => setIsOpen(!isOpen)}
                  style={{ color: lightTheme.sidebarArrow }}
                />
              )}
            </div>
          </div>
          <Divider
            style={{
              width: "100%",
              position: "relative",
              top: "-18px",
              zIndex: "-1",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.03)",
            }}
          />

          {/* Sidebar Navigations */}

          <div className="menuItems">
            {menuItems.map((item, index) => {
              return (
                <NavLink
                  to={item.path}
                  key={index}
                  className={mode ? "darklink" : "link"}
                  style={{
                    margin: isOpen ? "5px 10px" : "5px 8px",
                    color: lightTheme.textColor,
                  }}
                >
                  <Tooltip title={item.name} placement="right-start">
                    <div
                      className="icon"
                      style={{ color: lightTheme.sidebarIcon }}
                    >
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="sidebarImages"
                      />
                    </div>
                  </Tooltip>
                  <div
                    className="link_text"
                    style={{
                      display: isOpen ? "block" : "none",
                      color: lightTheme.textColor,
                    }}
                  >
                    {item.name}
                  </div>
                </NavLink>
              );
            })}
          </div>
          {/* Sidebar News Section */}
          {isOpen ? (
            <div className="news">
              <NewsCard />
            </div>
          ) : null}

          {/* setting navigation */}
          {fileCheck && (
            <div
              className="setting"
              style={{ position: isOpen ? "absolute" : "absolute" }}
            >
              {settingToggle.map((item, index) => {
                return (
                  <NavLink
                    to={item.path}
                    key={index}
                    className={mode ? "darklink" : "link"}
                    style={{
                      margin: isOpen ? "5px 10px" : "5px 8px",
                      color: lightTheme.textColor,
                    }}
                  >
                    <Tooltip title={item.name} placement="right-start">
                      <div
                        className="icon"
                        style={{ color: lightTheme.sidebarIcon }}
                      >
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="sidebarImages"
                        />
                      </div>
                    </Tooltip>
                    <div
                      className="link_text"
                      style={{
                        display: isOpen ? "block" : "none",
                        color: lightTheme.textColor,
                      }}
                    >
                      {item.name}
                    </div>
                  </NavLink>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* <main>{children}</main> */}
    </div>
  );
};

export default Sidebar;
