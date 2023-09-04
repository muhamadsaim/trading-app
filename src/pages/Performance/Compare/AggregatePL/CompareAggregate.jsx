import React, { useState } from "react";
import { Box, Divider, Grid, TextField } from "@mui/material";
import "./CompareAggregate.css";
import ModeChange from "../../../../Theme/ChangeMode";
import CustomSelect from "../../../../components/common/CustomSelect";
import { staticData } from "./static";

const CompareAggregate = () => {
  const lightTheme = ModeChange();
  const [showLock, setShowLock] = useState(true);
  const [TotalGainLossData,setTotalGainLossData]=useState(staticData)

 
  // styling
  const mainDiv = {
    padding: "25px 15px",
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,

    borderBottomLeftRadius: "8px",
    borderBottomRightRadius: "8px",
  };

  const generateReportBtn = {
    color: `${lightTheme.whiteText}`,
    backgroundColor: `${lightTheme.lightDarkBlue}`,
    borderRadius: "8px",
    padding: "10px 0",
    width: "130px",
    border: "none",
    cursor: "pointer",
  };
  const resetBtn = {
    color: `${lightTheme.headingTextColor}`,
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    borderRadius: "8px",
    padding: "10px 0",
    width: "130px",
    marginLeft: "10px",
    cursor: "pointer",
    border: `1px solid ${lightTheme.selectBorderColor}`,
  };
  const formMain = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "20px 0",
  };
  const formInputText = {
    color: `${lightTheme.textColor}`,
    fontSize: "14px",
    fontWeight: "500",
    paddingBottom: "10px",
  };
  const staticGroupOne = {
    backgroundColor: `${lightTheme.staticGroupOne}`,
    padding: "15px 15px",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
  };
  const staticGroupText = {
    fontSize: "16px",
    fontWeight: "600",
    color: `${lightTheme.whiteText}`,
  };
  const name = {
    fontWeight: "500",
    fontSize: "16px",
    color: `${lightTheme.headingTextColor}`,
  };
  const value = {
    fontWeight: "400",
    fontSize: "16px",
    color: `${lightTheme.textColor}`,
  };
  const staticGroupTwo = {
    backgroundColor: `${lightTheme.staticGroupTwo}`,
    padding: "15px 15px",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
  };
  const inputStyle = {
    width: "210px",
    height: "38px",
    border: `1px solid ${lightTheme.selectBorderColor}`,
    borderRadius: "4px",
    outline: "none",
    backgroundColor: `${lightTheme.selectColor}`,
    color: `${lightTheme.selectValueColor}`,
  };

  return (
    <div>
      <Box sx={mainDiv}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p style={{ color: `${lightTheme.textColor}`, padding: "0 15px" }}>
            Quick Report:{" "}
          </p>
          {/* <Select placeholder="Select" className="reportSelect" /> */}
          <CustomSelect placeholder="Select" className="reportSelect" />
          <p style={{ color: `${lightTheme.textColor}`, padding: "0 10px" }}>
            or build a custom report below.
          </p>
        </div>
        <p
          style={{
            color: `${lightTheme.textColor}`,
            fontWeight: "500",
            padding: "25px 15px",
          }}
        >
          Note: this report ignores the global filter settings above; set
          specific group filters below.
        </p>
        {/* generate button  */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <button style={generateReportBtn}>Generate Report</button>
          <button style={resetBtn}>Reset</button>
        </div>
        {/* report forms */}
        <Grid container columnGap={4} rowGap={4} my={3}>
          <Grid
            item
            lg={5.8}
            md={12}
            sm={12}
            style={{
              border: `1px solid ${lightTheme.borderColor}`,
              borderRadius: "8px",
              backgroundColor: `${lightTheme.performanceComponentColor}`,
            }}
            p={2}
          >
            <div style={formMain}>
              <div>
                <p style={formInputText}>Symbol</p>
                <input style={inputStyle}></input>
              </div>
              <div>
                <p style={formInputText}>Tag</p>
                <input style={inputStyle}></input>
              </div>
            </div>
            <div style={formMain}>
              <div>
                <p style={formInputText}>Slide</p>
                <CustomSelect placeholder="All" className="slideSelect" />
              </div>
              <div>
                <p style={formInputText}>Start Date</p>
                <input style={inputStyle}></input>
              </div>
            </div>
            <div style={formMain}>
              <div>
                <p style={formInputText}>Duration</p>
                <CustomSelect placeholder="All" className="slideSelect" />
              </div>
              <div>
                <p style={formInputText}>End Date</p>
                <input style={inputStyle}></input>
              </div>
            </div>
            <div style={formMain}>
              <div>
                <p style={formInputText}>Trade P&L</p>
                <CustomSelect placeholder="All" className="slideSelect" />
              </div>
            </div>
          </Grid>
          <Grid
            item
            lg={5.8}
            md={12}
            sm={12}
            style={{
              border: `1px solid ${lightTheme.borderColor}`,
              borderRadius: "8px",
              backgroundColor: `${lightTheme.performanceComponentColor}`,
            }}
            p={2}
          >
            <div style={formMain}>
              <div>
                <p style={formInputText}>Symbol</p>
                <input style={inputStyle}></input>
              </div>
              <div>
                <p style={formInputText}>Tag</p>
                <input style={inputStyle}></input>
              </div>
            </div>
            <div style={formMain}>
              <div>
                <p style={formInputText}>Slide</p>
                <CustomSelect placeholder="All" className="slideSelect" />
              </div>
              <div>
                <p style={formInputText}>Start Date</p>
                <input style={inputStyle}></input>
              </div>
            </div>
            <div style={formMain}>
              <div>
                <p style={formInputText}>Duration</p>
                <CustomSelect placeholder="All" className="slideSelect" />
              </div>
              <div>
                <p style={formInputText}>End Date</p>
                <input style={inputStyle}></input>
              </div>
            </div>
            <div style={formMain}>
              <div>
                <p style={formInputText}>Trade P&L</p>
                <CustomSelect placeholder="All" className="slideSelect" />
              </div>
            </div>
          </Grid>
          {/* Statistics Data Group */}
          <Grid lg={5.8} md={12} sm={12}>
            <div
              style={{
                borderRadius: "8px",
                border: `1px solid ${lightTheme.borderColor}`,
                backgroundColor: `${lightTheme.performanceComponentColor}`,
              }}
            >
              <div style={staticGroupOne}>
                <p style={staticGroupText}>Statistics Group 1</p>
              </div>
              <Divider />
              {TotalGainLossData.map((data, index) => {
                return (
                  <div key={index}>
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "15px 15px",
                        borderBottom:`1px solid ${lightTheme.selectBorderColor}`
                      }}
                    >
                      <p style={name}>{data.name}</p>
                      <p style={value}>
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
          <Grid lg={5.8} md={12} sm={12}>
            <div
              style={{
                borderRadius: "8px",
                border: `1px solid ${lightTheme.selectBorderColor}`,
                backgroundColor: `${lightTheme.performanceComponentColor}`,
              }}
            >
              <div style={staticGroupTwo}>
                <p style={staticGroupText}>Statistics Group 2</p>
              </div>
              <Divider />
              {TotalGainLossData.map((data, index) => {
                return (
                  <div key={index}>
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "15px 15px",
                        borderBottom: `1px solid ${lightTheme.selectBorderColor}`,
                      }}
                    >
                      <p style={name}>{data.name}</p>
                      <p style={value}>
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
      </Box>
    </div>
  );
};

export default CompareAggregate;
