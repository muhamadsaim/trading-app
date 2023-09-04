import { Box, Grid, Divider } from "@mui/material";
import React, { useState } from "react";
// import { lightTheme } from "../../../../Theme/theme";
import { MdOutlineLock } from "react-icons/md";
import ModeChange from "../../../../Theme/ChangeMode";
import {staticData} from './static'

const WinLossAggregatePL = () => {
  const lightTheme = ModeChange();
  const [applyFllter, setApplyFilter] = useState("0");
  const [showLock, setShowLock] = useState(true);
  const [TotalGainLossData,setTotalGainLossData]=useState(staticData)

 
  // styling
  const mainDiv = {
    // padding: "30px 25px",
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
  };
  const gridItem = {
    border: `1px solid ${lightTheme.borderColor}`,
    borderRadius: "8px",
    backgroundColor:`${lightTheme.performanceComponentColor}`
  };
  const note = {
    color: `${lightTheme.textColor}`,
    fontSize: "18px",
    fontWeight: "500",
    padding: "5px 15px",
  };
  const plMainDiv = {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "10px 20px",
  };
  const plType = {
    color: `${lightTheme.headingTextColor}`,
    fontWeight: "500",
    fontSize: "14px",
  };
  const selected = {
    backgroundColor: `${lightTheme.lightDarkBlue}`,
    color: `${lightTheme.whiteText}`,
  };
  const notSelected = { background: "none", color: `${lightTheme.textColor}` };
  const winlossMain = { padding: "5px 15px", display: "flex", alignItems: "center" }
  const winCircle={
    backgroundColor: `${lightTheme.profit}`,
    height: "25px",
    width: "25px",
    borderRadius: "50%",
  }
  const winning={
    color: `${lightTheme.profit}`,
    fontWeight: "500",
    fontSize: "16px",
    padding: "0 5px",
  }
  const lossCircle={
    backgroundColor: `${lightTheme.loss}`,
    height: "25px",
    width: "25px",
    borderRadius: "50%",
  }
  const lossing={
    color: `${lightTheme.loss}`,
    fontWeight: "500",
    fontSize: "16px",
    padding: "0 5px",
  }
  const staticWin={
    backgroundColor: `${lightTheme.darkGreencolorGraph}`,
    padding: "15px 15px",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
  }
  const staticText={
    fontSize: "16px",
    fontWeight: "600",
    color: `${lightTheme.whiteText}`,
  }
  const staticWinData={
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 15px",
    borderBottom:`1px solid ${lightTheme.selectBorderColor}`
  }
  const name={
    fontWeight: "500",
    fontSize: "16px",
    color: `${lightTheme.headingTextColor}`,
  }
  const nameVal={
    fontWeight: "400",
    fontSize: "16px",
    color: `${lightTheme.textColor}`,
  }
  const staticLoss={
    backgroundColor: `${lightTheme.darkRedcolorGraph}`,
    padding: "15px 15px",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
  }
  const staticlossText={
    fontSize: "16px",
    fontWeight: "600",
    color: `${lightTheme.whiteText}`,
  }
  return (
    <div>
      <Box sx={mainDiv}>
        <p style={note}>
          Note: this report displays data for intraday trades only, regardless
          of 'duration' filter setting above.
        </p>
        {/* P & L type filters */}
        <div style={plMainDiv}>
          <p style={plType}>P&L Type :</p>
          <div
            className="plBtnDiv"
            style={{
              backgroundColor: `${lightTheme.performanceBTnDiv}`,
            }}
          >
            <button
              className="left-roundedPLType"
              style={applyFllter == "0" ? selected : notSelected}
              onClick={() => setApplyFilter("0")}
            >
              $
            </button>
            <button
              className="plBtn"
              style={applyFllter == "1" ? selected : notSelected}
              onClick={() => setApplyFilter("1")}
            >
              T
            </button>
            <button
              className="right-roundedPLType"
              style={applyFllter == "2" ? selected : notSelected}
              onClick={() => setApplyFilter("2")}
            >
              R{" "}
              <MdOutlineLock
                color="red"
                size={10}
                style={
                  applyFllter == "2"
                    ? { color: `${lightTheme.whiteText}` }
                    : { color: `${lightTheme.textColor}` }
                }
              />
            </button>
          </div>
          <a
            href="#"
            style={{
              color: `${lightTheme.linkColor}`,
              textDecoration: "underline",
            }}
          >
            Help
          </a>
        </div>
        {/* winning days and losing days */}
        <div
          style={winlossMain}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <p
              style={winCircle}
            ></p>
            <p
              style={winning}
            >
              Winning Days
            </p>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", marginLeft: "5px" }}
          >
            <p
              style={lossCircle}
            ></p>
            <p
              style={lossing}
            >
              Losing Days
            </p>
          </div>
        </div>
        <div style={{ padding: "30px 15px" }}>
          <Grid container columnGap={4} rowGap={4}>
            <Grid lg={5.7} md={12} sm={12} sx={gridItem}>
              <div
                style={{
                  borderRadius: "8px",
                }}
              >
                <div
                  style={staticWin}
                >
                  <p
                    style={staticText}
                  >
                    Statistics-Winning Days
                  </p>
                </div>
                <Divider />
                {TotalGainLossData.map((data, index) => {
                  return (
                    <div key={index}>
                      <div
                        key={index}
                        style={staticWinData}
                      >
                        <p
                          style={name}
                        >
                          {data.name}
                        </p>
                        <p
                          style={nameVal}
                        >
                          {showLock ? (
                            <img src={data.lock} alt="lockIcon" height={20} />
                          ) : (
                            `${data.value}`
                          )}
                        </p>
                      </div>
                      {/* <Divider /> */}
                    </div>
                  );
                })}
              </div>
            </Grid>
            <Grid lg={5.7} md={12} sm={12} sx={gridItem}>
              <div
                style={{
                  borderRadius: "8px",
                }}
              >
                <div
                  style={staticLoss}
                >
                  <p
                    style={staticlossText}
                  >
                    Statistics-Losing Days
                  </p>
                </div>
                <Divider />
                {TotalGainLossData.map((data, index) => {
                  return (
                    <div key={index}>
                      <div
                        key={index}
                        style={staticWinData}
                      >
                        <p
                          style={name}
                        >
                          {data.name}
                        </p>
                        <p
                          style={nameVal}
                        >
                          {showLock ? (
                            <img src={data.lock} alt="lockIcon" height={20} />
                          ) : (
                            `${data.value}`
                          )}
                        </p>
                      </div>
                      {/* <Divider /> */}
                    </div>
                  );
                })}
              </div>
            </Grid>
          </Grid>
        </div>
      </Box>
    </div>
  );
};

export default WinLossAggregatePL;
