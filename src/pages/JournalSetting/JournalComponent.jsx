import React, { useState } from "react";
import { Box } from "@mui/material";
import "../Journal/journal.css";
import ModeChange from "../../Theme/ChangeMode";
import { Helmet } from "react-helmet-async";
import NavBar from "../../components/NavBar/NavBar";
import { Outlet,Link } from "react-router-dom";

const JournalComponent = () => {
  const lightTheme = ModeChange();
  const [showComponent, setShowComponent] = useState("0");
  const [navbarTitle, setNavbarTitle] = useState('Trade Setting');
  // styling
  const mainDiv = {
    marginTop: "25px",
    borderRadius: "8px",
    // background:`${lightTheme.lightPageBackground}`
  };
  const sideBarStyle = {
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    padding: "15px 15px",
    display: "flex",
    flexDirection: "column",
    borderRadius: "8px",
    width: "250px",
    flex: "0 1 30%",
    maxHeight: "550px",
  };
  const sideBarContentStyle = {
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    // padding: '30px 30px',
    display: "flex",
    flexDirection: "column",
    borderRadius: "8px",
    flex: "0 1 70%",
  };
  const mainJournalCom = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    columnGap: "30px",
    // backgroundColor:`${lightTheme.lightPageBackground}`
  };
  const selected = {
    color: `${lightTheme.textColor}`,
    background: `${lightTheme.PageBackgroundColor}`,
  };

  const notSelected = { color: `${lightTheme.textColor}`, background: "none" };
  return (
    <>
      <Helmet>
        <title>Journal Setting</title>
        <meta name="Journal Setting" content="This is a Journal Setting page" />
      </Helmet>
      <div
        style={{
          padding: "30px 25px",
          backgroundColor: `${lightTheme.lightPageBackground}`,
        }}
      >
        <NavBar name={navbarTitle} />
        <Box sx={mainDiv}>
          <div style={mainJournalCom}>
            <div style={sideBarStyle}>
              <button
                className="JournalBtn"
                style={showComponent == "0" ? selected : notSelected}
                onClick={() => {
                  setShowComponent("0");
                  setNavbarTitle("Trade Setting");
                }}
              >
                <Link to="trade-setting" style={showComponent == "0" ? selected : notSelected}>
                Trade Setting
                </Link>
              </button>
              <button
                className="JournalBtn"
                style={showComponent == "1" ? selected : notSelected}
                onClick={() => {
                  setShowComponent("1");
                  setNavbarTitle("Privacy & Public Profile");
                }}
              >
                <Link to="privacy-public-profile" style={showComponent == "1" ? selected : notSelected}>
                Privacy & Public Profile
                </Link>
              </button>
              <button
                className="JournalBtn"
                style={showComponent == "2" ? selected : notSelected}
                onClick={() => {
                  setShowComponent("2");
                  setNavbarTitle("Portfolio");
                }}
              >
                <Link to="portfolio" style={showComponent == "2" ? selected : notSelected}>
                Portfolio
                </Link>
              </button>
              <button
                className="JournalBtn"
                style={showComponent == "3" ? selected : notSelected}
                onClick={() => {
                  setShowComponent("3");
                  setNavbarTitle("Commissions");
                }}
              >
                <Link to="commission" style={showComponent == "3" ? selected : notSelected}>
                Commissions
                </Link>
              </button>
              <button
                className="JournalBtn"
                style={showComponent == "4" ? selected : notSelected}
                onClick={() => {
                  setShowComponent("4");
                  setNavbarTitle("Fees");
                }}
              >
                <Link to="fee" style={showComponent == "4" ? selected : notSelected}>
                Fees
                </Link>
              </button>
              <button
                className="JournalBtn"
                style={showComponent == "5" ? selected : notSelected}
                onClick={() => {
                  setShowComponent("5");
                  setNavbarTitle("Chart Settings");
                }}
              >
                <Link to="chart-setting" style={showComponent == "5" ? selected : notSelected}>
                Chart Settings
                </Link>
              </button>
              <button
                className="JournalBtn"
                style={showComponent == "6" ? selected : notSelected}
                onClick={() => {
                  setShowComponent("6");
                  setNavbarTitle("Custom Spread");
                }}
              >
                <Link to="custom-spread" style={showComponent == "6" ? selected : notSelected}>
                Custom Spread
                </Link>
              </button>
              <button
                className="JournalBtn"
                style={showComponent == "7" ? selected : notSelected}
                onClick={() => {
                  setShowComponent("7");
                  setNavbarTitle("Trades Widgets");
                }}
              >
                <Link to="trade-widgets" style={showComponent == "7" ? selected : notSelected}>
                Trades Widgets
                </Link>
              </button>
              <button
                className="JournalBtn"
                style={showComponent == "8" ? selected : notSelected}
                onClick={() => {
                  setShowComponent("8");
                  setNavbarTitle("Market Replay Settings");
                }}
              >
                <Link to="market-replay-setting" style={showComponent == "8" ? selected : notSelected}>
                Market Replay Settings
                </Link>
              </button>
              <button
                className="JournalBtn"
                style={showComponent == "9" ? selected : notSelected}
                onClick={() => {
                  setShowComponent("9");
                  setNavbarTitle("Theme");
                }}
              >
                <Link to="theme" style={showComponent == "9" ? selected : notSelected}>
                Theme
                </Link>
              </button>
            </div>
            <div style={sideBarContentStyle}>
              <div style={{ padding: "20px"}}>
                <Outlet/>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
};

export default JournalComponent;
