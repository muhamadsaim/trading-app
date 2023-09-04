import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { lightTheme } from '../../../Theme/theme';
import {
  Button,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  TextField,
} from "@mui/material";
import { FormGroup } from "@mui/material";
import { tradeDetail, tradeTable } from "./ConstantData";
import InputTextFieldButton from "../../../components/common/InputTextFieldButton";
import InputTextField from "../../../components/common/InputTextField";
import CustomButton from "../../../components/common/CustomButton";
import ModeChange from "../../../Theme/ChangeMode";

const PrivacyAndPublicProfile = () => {
  const lightTheme = ModeChange();
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const mainAccordion = {
    borderRadius: "8px 8px 0px 0px",
    background: `${lightTheme.ComponentBackgroundColor}`,
    marginBottom: "30px",
    "&:before": {
      display: "none",
    },
  };
  const accordionDetail = {
    padding: "10px 20px 10px 20px",
    borderBottom: `1px solid ${lightTheme.selectBorderColor}`,
    borderRight: `1px solid ${lightTheme.selectBorderColor}`,
    borderLeft: `1px solid ${lightTheme.selectBorderColor}`,
    borderRadius: "0px 0px 8px 8px",
  };
  const accordionLastDetail = {
    padding: "10px 10px 10px 20px",
    // border: '1px solid rgba(226, 226, 226, 0.4)',
    borderBottom: `1px solid ${lightTheme.selectBorderColor}`,
    borderRight: `1px solid ${lightTheme.selectBorderColor}`,
    borderLeft: `1px solid ${lightTheme.selectBorderColor}`,
    borderRadius: "0px 0px 8px 8px",
  };
  const accordionAboveDetail = {
    padding: "5px 10px 5px 20px",
    // border: '1px solid rgba(226, 226, 226, 0.4)',
    borderBottom: `1px solid ${lightTheme.selectBorderColor}`,
    borderRight: `1px solid ${lightTheme.selectBorderColor}`,
    borderLeft: `1px solid ${lightTheme.selectBorderColor}`,
    borderRadius: "0px 0px 0px 0px",
  };
  const typoStyling = {
    color: `${lightTheme.headingTextColor}`,
    fontSize: "14px",
    fontWeight: "500",
  };
  const accordionHeader = {
    color: `${lightTheme.headingTextColor}`,
    background: `${lightTheme.PageBackgroundColor}`,
    borderRadius: "8px 8px 0px 0px",
  };
  const accordionTypo = {
    color: `${lightTheme.textColor}`,
    padding: "0px 20px 0px 0px",
  };
  const checkBoxColor = {
    color: `${lightTheme.headingTextColor}`,
  };
  const metricsAccoText = {
    color: `${lightTheme.textColor}`,
    fontSize: "12px",
    fontWeight: "400",
  };
  const  AccorInsideHeading={
    color: `${lightTheme.textColor}`,
    fontSize: "16px",
    fontWeight: "500",
  }
  return (
    <div style={{width: "70%" }}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        elevation={0}
        sx={mainAccordion}
      >
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={accordionHeader}
        >
          <Typography style={typoStyling}>Public Profile</Typography>
        </AccordionSummary>
        <AccordionDetails style={accordionDetail}>
          <Typography style={accordionTypo}>
            Share With Anyone.
            <InputTextFieldButton
              buttonTitle="Copy"
              showSideButton={true}
              placeholder="https://shared.ratulhassansync.com/scovium"
              writable={false}
            />
            <CustomButton buttonTitle="Open" />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        elevation={0}
        sx={mainAccordion}
      >
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={accordionHeader}
        >
          <Typography style={typoStyling}>Trades</Typography>
        </AccordionSummary>
        <AccordionDetails style={accordionAboveDetail}>
          <Typography style={accordionTypo}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <p
                  style={ AccorInsideHeading}
                >
                  Private
                </p>
              </div>
              <FormControlLabel
                control={
                  <Checkbox
                    style={checkBoxColor}
                    /*checked={allChecked? true: false}*/ size="medium"
                  />
                }
              />
            </div>
          </Typography>
        </AccordionDetails>
        <AccordionDetails style={accordionAboveDetail}>
          <Typography style={accordionTypo}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <p
                  style={ AccorInsideHeading}
                >
                  Public
                </p>
              </div>
              <FormControlLabel
                control={
                  <Checkbox
                    /*checked={allChecked? true: false}*/
                    style={checkBoxColor}
                    size="medium"
                  />
                }
              />
            </div>
          </Typography>
        </AccordionDetails>
        <AccordionDetails style={accordionLastDetail}>
          <Typography style={accordionTypo}>
            <CustomButton buttonTitle="Apply to All" />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        elevation={0}
        sx={mainAccordion}
      >
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={accordionHeader}
        >
          <Typography style={typoStyling}>Share URL List</Typography>
        </AccordionSummary>

        <AccordionDetails style={accordionDetail}>
          <Typography style={accordionTypo}>
            <AccordionSummary
              // expandIcon="Action"
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={accordionHeader}
            >
              <Typography style={{ fontSize: "14px", fontWeight: "400" }}>
                Name
              </Typography>
            </AccordionSummary>

            <AccordionDetails style={accordionDetail}>
              <Typography style={accordionTypo}>
                No Shared Link Created
              </Typography>
            </AccordionDetails>
            <CustomButton buttonTitle="Add New" />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        elevation={0}
        sx={mainAccordion}
      >
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={accordionHeader}
        >
          <Typography style={typoStyling}>
            Trade Detail Date to Share
          </Typography>
        </AccordionSummary>

        {tradeDetail &&
          tradeDetail.map((val, id) => {
            return (
              <AccordionDetails
                style={
                  Number(tradeDetail?.length - 1) === id
                    ? accordionLastDetail
                    : accordionAboveDetail
                }
                id={val.id}
                key={id}
              >
                <Typography style={accordionTypo}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <p
                        style={{
                          color: `${lightTheme.textColor}`,
                          fontSize: "16px",
                          fontWeight: "500",
                        }}
                      >
                        {val.name}
                      </p>
                    </div>
                    <FormControlLabel
                      control={
                        <Checkbox
                          style={checkBoxColor}
                          /*checked={allChecked? true: false}*/ size="medium"
                        />
                      }
                    />
                  </div>
                </Typography>
              </AccordionDetails>
            );
          })}
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
        elevation={0}
        sx={mainAccordion}
      >
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={accordionHeader}
        >
          <Typography style={typoStyling}>Metrics</Typography>
        </AccordionSummary>
        <AccordionDetails style={accordionAboveDetail}>
          <Typography style={accordionTypo}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",

                alignItems: "center",
              }}
            >
              <div style={{ width: "60%" }}>
                <p
                  style={ AccorInsideHeading}
                >
                  Entire Account
                </p>
                <p
                  style={metricsAccoText}
                >
                  Group executions by the instrument when falling within a
                  certain period of time.
                </p>
              </div>
              <FormControlLabel
                control={
                  <Checkbox
                    style={checkBoxColor}
                    /*checked={allChecked? true: false}*/ size="medium"
                  />
                }
              />
            </div>
          </Typography>
        </AccordionDetails>
        <AccordionDetails style={accordionAboveDetail}>
          <Typography style={accordionTypo}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",

                alignItems: "center",
              }}
            >
              <div style={{ width: "60%" }}>
                <p
                  style={ AccorInsideHeading}
                >
                  Portfolio(s) Selected
                </p>
                <p
                  style={metricsAccoText}
                >
                  Metrics will be generated only based on the portfolios you
                  selected to share regardless of the trades that are public
                </p>
              </div>
              <FormControlLabel
                control={
                  <Checkbox
                    style={checkBoxColor}
                    /*checked={allChecked? true: false}*/ size="medium"
                  />
                }
              />
            </div>
          </Typography>
        </AccordionDetails>
        <AccordionDetails style={accordionAboveDetail}>
          <Typography style={accordionTypo}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",

                alignItems: "center",
              }}
            >
              <div style={{ width: "60%" }}>
                <p
                  style={ AccorInsideHeading}
                >
                  Shared Trades
                </p>
                <p
                  style={metricsAccoText}
                >
                  Metric will be generated only based on public trades
                </p>
              </div>
              <FormControlLabel
                control={
                  <Checkbox
                    style={checkBoxColor}
                    /*checked={allChecked? true: false}*/ size="medium"
                  />
                }
              />
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
        elevation={0}
        sx={mainAccordion}
      >
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={accordionHeader}
        >
          <Typography style={typoStyling}>Filtered Shared Data</Typography>
        </AccordionSummary>
        <AccordionDetails style={accordionDetail}>
          <Typography style={accordionTypo}>
            Portfolios To Share
            <InputTextField placeholder="None Portfolio" writable={false} />
            <CustomButton buttonTitle="Edit" />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
        elevation={0}
        sx={mainAccordion}
      >
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={accordionHeader}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography style={typoStyling}>Trade Table to Share</Typography>
            <p style={{ fontSize: "12px", fontWeight: "400" }}>
              Select which data to be shared with the wotld
            </p>
          </div>
        </AccordionSummary>

        {tradeTable &&
          tradeTable.map((val, id) => {
            return (
              <AccordionDetails
                style={
                  Number(tradeTable?.length - 1) === id
                    ? accordionLastDetail
                    : accordionAboveDetail
                }
                id={val.id}
                key={id}
              >
                <Typography style={accordionTypo}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <p
                        style={{
                          color: `${lightTheme.textColor}`,
                          fontSize: "16px",
                          fontWeight: "500",
                        }}
                      >
                        {val.name}
                      </p>
                    </div>
                    <FormControlLabel
                      control={
                        <Checkbox
                          style={checkBoxColor}
                          /*checked={allChecked? true: false}*/ size="medium"
                        />
                      }
                    />
                  </div>
                </Typography>
              </AccordionDetails>
            );
          })}
      </Accordion>
    </div>
  );
};
export default PrivacyAndPublicProfile;
