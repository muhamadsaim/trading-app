import React, { useState } from "react";
import { Grid } from "@mui/material";
import "./login.css";
import LoginImage from "../../assets/login/login.png";
import GoogleIcon from "../../assets/login/google.png";
import MailIcon from "../../assets/login/mail.png";
import passwordIcon from "../../assets/login/key.png";
import { BiShow, BiHide } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import ModeChange from "../../Theme/ChangeMode";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import apiService from "../../services/api/api";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator } from "../../Redux/AllAccess";
import { useEffect } from "react";
import { Helmet} from "react-helmet-async";
import { ApiError } from "../../helper/apiError";
import { ErrorMessage, SuccessMessage } from "../../helper/message";

const Login = () => {
  const navigation = useNavigate();
  const lightTheme = ModeChange();

  const dispatch = useDispatch();
  const {authenticateRoute}=bindActionCreators(actionCreator,dispatch)
  const {fileChecking}=bindActionCreators(actionCreator,dispatch)

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [emailError, setMailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [togglePassword, setTogglePassword] = useState(false);

  // handling Inputs
  const handleEmail = (e) => {
    setCredentials({
      ...credentials,
      email: e.target.value,
    });
  };
  const handlePassword = (e) => {
    setCredentials({
      ...credentials,
      password: e.target.value,
    });
  };

  // password validitons function
  const passwordValidation = () => {
    let isValid = true;
    if (credentials.password !== "") {
      if (credentials.password.length < 8) {
        isValid = false;
        setPasswordError("password is too short");
      } else {
        setPasswordError(" ");
      }
    } else {
      isValid = false;
    }
    if (credentials.password === "") {
      isValid = false;
      setPasswordError("Please insert Password");
    }

    return isValid;
  };

  // Email Validation function
  const emailValidation = () => {
    if (credentials.email !== " ") {
      var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      var result = re.test(credentials.email);
    }
    if (!result) {
      setMailError("Wrong Email");
    } else {
      setMailError(" ");
    }
    return result;
  };

  const gotoFileUpload = () => {
    navigation('/usercsv',{replace:true})
  }
  const gotoDashboard= () => {
    navigation('/dashboard',{replace:true})
  }

  // navigate to signup function
  const goToSignUp = () => {
    navigation("/signup", { replace: true });
  };


 

  // loginIn user from databse
  const LoginInFunc = async (e) => {
    e.preventDefault();
    if (emailValidation() === true && passwordValidation() === true) {
      try {
        const res = await apiService("post", "/auth/login", {}, credentials);
        let data = res;
        let loginUser = data.ValidUser.name;
        let Token = data.AuthToken;
        localStorage.setItem("userName",loginUser)
        localStorage.setItem("AuthToken", Token);
        const authToken=localStorage.getItem("AuthToken")
        if (authToken) {
          authenticateRoute(true);
          setCredentials({
            email: "",
            password: "",
          });
          const fileExistData = await apiService("get", "/auth/usersFileExist",{'x-usertoken': Token},null);
          if (fileExistData === "exist") {
            fileChecking(true);
            gotoDashboard();
          } else {
            fileChecking(false);
            SuccessMessage('Login Successfully')
            gotoFileUpload();
          }
        } else {
          ErrorMessage('Invalid User!!!');
          setCredentials({
            email: "",
            password: "",
          });
        }
      } catch (error) {
        const errorMessage = ApiError(error);
      console.error("API Error:", errorMessage);
      }
    }
  };

  
  return (
    <div>
      <Helmet>
        <title>Login</title>
        <meta name="Login" content="This is a login page" />
      </Helmet>
      <div className="mainContainerLogin">
        <div className="insideMain">
          <Grid container className="grid" columnGap={10}>
            <Grid item lg={4} md={6} sm={6}>
              <div className="imageDiv">
                <img src={LoginImage} alt="LoginImage" className="img" />
              </div>
            </Grid>
            <Grid item lg={4} md={6} sm={6}>
              <div className="formDiv">
                <p
                  className="welcome"
                  style={{ color: `${lightTheme.headingColor}` }}
                >
                  Welcome to
                </p>
                <p
                  className="journaltrade"
                  style={{ color: `${lightTheme.headingTextColor}` }}
                >
                  Journal Trade
                </p>
                <div
                  className="google"
                  onClick={() => console.log("login With Google")}
                >
                  <img
                    src={GoogleIcon}
                    alt="google Icon"
                    className="googleIcon"
                  />
                  <p
                    className="loginWithGoogle"
                    style={{ color: `${lightTheme.headingColor}` }}
                  >
                    Login with google
                  </p>
                </div>
                <div className="loginManul">
                  <div className="line"></div>
                  <p className="ortext">OR</p>
                  <div className="line"></div>
                </div>
                <p className="error">{emailError}</p>
                <div className="mailDiv">
                  <img
                    src={MailIcon}
                    alt="Mail Icon"
                    className="mailIcon"
                    style={{ color: `${lightTheme.iconColor}` }}
                  />
                  <div className="mailInputBox">
                    <p
                      className="mailtext"
                      style={{ color: `${lightTheme.headingColor}` }}
                    >
                      Email
                    </p>
                    <input
                      type="email"
                      value={credentials.email}
                      onChange={(e) => handleEmail(e)}
                      placeholder="example@gmail.com"
                      className="mailInput"
                    />
                  </div>
                </div>
                <p className="error">{passwordError}</p>
                <div className="passwordDiv">
                  <div className="insdePasswordDiv">
                    <img
                      src={passwordIcon}
                      alt="password Icon"
                      className="passwordIcon"
                      style={{ color: `${lightTheme.iconColor}` }}
                    />
                    <div className="passwordInputBox">
                      <p
                        className="passwordtext"
                        style={{ color: `${lightTheme.headingColor}` }}
                      >
                        Password
                      </p>
                      <input
                        type={togglePassword ? "text" : "password"}
                        value={credentials.password}
                        onChange={(e) => handlePassword(e)}
                        placeholder="********"
                        className="passwordInput"
                      />
                    </div>
                  </div>
                  {togglePassword ? (
                    <BiHide
                      size={20}
                      className="showHide"
                      onClick={() => setTogglePassword(!togglePassword)}
                    />
                  ) : (
                    <BiShow
                      size={20}
                      className="showHide"
                      onClick={() => setTogglePassword(!togglePassword)}
                    />
                  )}
                </div>
                <div className="checkBox">
                  <input
                    type="checkbox"
                    name="remember"
                    id="remember"
                  />
                  <label
                    htmlFor="remember"
                    className="checkboxLabel"
                    style={{ color: `${lightTheme.headingColor}` }}
                  >
                    Remember me
                  </label>
                </div>
                <div className="loginBtnDiv">
                  <button
                    className="loginBtn"
                    onClick={(e) => {
                      LoginInFunc(e);
                    }}
                    
                  >
                    Login
                  </button>
                </div>
                <p
                  className="noAccount"
                  style={{ color: `${lightTheme.headingColor}` }}
                >
                  Don't have an account!
                  <span
                    className="register"
                    onClick={() => goToSignUp()}
                    style={{ color: `${lightTheme.headingTextColor}` }}
                  >
                    Register
                  </span>
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
