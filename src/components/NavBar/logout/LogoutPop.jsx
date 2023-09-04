import * as React from "react";
import { Box, Badge, Avatar, Divider } from "@mui/material";
import avatar from "../../../assets/icons/avatar.png";
import { styled } from "@mui/material/styles";
import ModeChange from "../../../Theme/ChangeMode";
import Popover from "@mui/material/Popover";
import { MdUploadFile } from "react-icons/md";
import { GrDocumentPerformance, GrPower } from "react-icons/gr";
import { AiOutlinePoweroff } from "react-icons/ai";
import { FaPowerOff } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./logout.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator } from "../../../Redux/AllAccess";

export default function LogoutPop() {
  const lightTheme = ModeChange();
  const navigation = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const userName = localStorage.getItem("userName");
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const dispatch = useDispatch();
  const { authenticateRoute } = bindActionCreators(actionCreator, dispatch);
  const mode = useSelector((state) => state.mode);
  const fileCheck = useSelector((state) => state.fileCheck);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  const NameandDesignation = {
    fontSize: "12px",
    paddingTop: "2px",
    marginRight: "10px",
    lineHeight: "15px",
  };

  const personInfo = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  };

  const userStyle = {
    fontWeight: "600",
    letterSpacing: "0.5px",
    textAlign: "right",
    color: `${lightTheme.textColor}`,
  };
  const admin = {
    fontWeight: "500",
    letterSpacing: "1px",
    textAlign: "right",
    color: `${lightTheme.userPost}`,
  };

  const logDiv = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    padding: "15px 10px",
  };

  const textStyle = {
    fontWeight: "500",
    textAlign: "left",
    width: "77%",
    color: `${lightTheme.textColor}`,
  };

  const gotoLogin = () => {
    navigation("/login", { replace: true });
  };
  const gotoFile = () => {
    navigation("/usercsv", { replace: true });
  };
  const gotoPerformance = () => {
    navigation("/performance", { replace: true });
  };

  const handleLogout = () => {
    localStorage.removeItem("AuthToken");
    localStorage.removeItem("userName");
    authenticateRoute(false);
    gotoLogin();
  };

 
  return (
    <div>
      <button
        onClick={handleClick}
        style={{ border: "0", background: "none", cursor: "pointer" }}
      >
        <div style={personInfo}>
          <Box sx={NameandDesignation}>
            <p style={userStyle}>{userName && userName}</p>
            <p style={admin}>Admin</p>
          </Box>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar
              alt="Remy Sharp"
              srcSet={avatar}
              style={{
                border: "1px solid #e2e2e2",
                backgroundColor: `${lightTheme.avatarBackgroundRGBA}`,
              }}
            />
          </StyledBadge>
        </div>
      </button>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        style={{ top: "10px", right: "20px" }}
      >
        <div
          style={{
            width: "150px",
            padding: "10px 0px",
            backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
          }}
        >
          {fileCheck && (
            <div>
              {" "}
              <div style={logDiv} className="logDiv" onClick={gotoFile}>
                {mode ? (
                  <img src="/sidebarImages/uploadW.png" alt="performance" height={18}/>
                ) : (
                  <img src="/sidebarImages/upload.png" alt="performance" height={18}/>
                )}

                <p style={textStyle}> Upload File</p>
              </div>
              <div style={logDiv} onClick={gotoPerformance}>
                {mode ? (
                <img src="/sidebarImages/performanceW.png" alt="performance" height={20}/>
                ) : (
                  <img src="/sidebarImages/performance.png" alt="performance" height={20}/>
                )}

                <p style={textStyle}> Performance</p>
              </div>
            </div>
          )}

          <div style={logDiv} className="logoutDiv" onClick={handleLogout}>
            {
              mode ? <FaPowerOff size={20} color="#666CFF"/> : <FaPowerOff size={20} color="red"/>
            }
            
            <p
              style={{
                fontWeight: "500",
                textAlign: "left",
                width: "77%",
                color: `${lightTheme.logout}`,
              }}
            >
              Logout
            </p>
          </div>
        </div>
      </Popover>
    </div>
  );
}
