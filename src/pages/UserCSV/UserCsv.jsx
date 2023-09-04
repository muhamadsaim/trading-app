import React, { useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Box } from "@mui/material";
import ModeChange from "../../Theme/ChangeMode";
import { useState } from "react";
import Upload from "../../assets/icons/uploadImage.png";
import apiService from "../../services/api/api";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator } from "../../Redux/AllAccess";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ApiError } from "../../helper/apiError";
import { SuccessMessage } from "../../helper/message";
import { AiFillDelete } from "react-icons/ai";
import { ToastContainer } from "react-toastify";

const UserCsv = () => {
  const lightTheme = ModeChange();
  const navigation = useNavigate();

  const dispatch = useDispatch();
  const { fileChecking } = bindActionCreators(actionCreator, dispatch);
  const fileCheck = useSelector((state) => state.fileCheck);

  const [selectedFile, setSelectedFile] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const[deleteFirst,setDeleteFirst]=useState(false)

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "text/csv") {
      setSelectedFile(file);
      setErrorMessage(" ");
    } else {
      setSelectedFile(null);
      setErrorMessage("Invalid file format. Please select a CSV file.");
    }
  };

  const gotoDashboard = () => {
    navigation("/dashboard", { replace: true });
  };

  const authToken = localStorage.getItem("AuthToken");
  const uploadFile = async () => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    try {
      const response = await apiService(
        "post",
        "/usercsv",
        { "Content-Type": "multipart/form-data", "x-usertoken": authToken },
        formData
      );
      if (response) {
        fileChecking(true);
        SuccessMessage("File Uploaded Successfully");
        gotoDashboard();
      }
    } catch (error) {
      const errorMessage = ApiError(error);
      console.error("API Error:", errorMessage);
    }
  };

  const isCSVFile = selectedFile && selectedFile.type === "text/csv";
  const submitDisabled = !isCSVFile;

  // styling
  const mainDiv = {
    padding: "30px 25px",
    backgroundColor: `${lightTheme.PageBackgroundColor}`,
    height: "100vh",
  };

  const fileMain = {
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    marginTop: "20px",
    borderRadius: "8px",
    padding: "35px 15px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  };
  const inputMain = {
    padding: "35px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid gray",
    borderStyle: "dashed",
    width: "70%",
  };
  const submitButton = {
    border: "none",
    borderRadius: "5px",
    backgroundColor: `${lightTheme.lightDarkBlue}`,
    color: "white",
    width: "10%",
    padding: "7px 5px",
    marginTop: "10px",
    cursor: "pointer",
    fontSize: "17px",
    fontWeight: "bold",
    margin: "10px 0",
  };
  const disableButton = {
    ...submitButton,
    backgroundColor: `${lightTheme.PageBackgroundColor}`,
  };
  const csvFileStyle = {
    color: `${lightTheme.lightDarkBlue}`,
    fontSize: "18px",
    fontWeight: "700",
    margin: "15px 0",
  };
  const inputStyle = {
    color: `${lightTheme.lightDarkBlue}`,
    // border: "1px solid red",
    textAlign: "center",
    width: "25%",
    margin: "10px 0",
  };

  const deleteBTn = {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: `${lightTheme.lightDarkBlue}`,
    padding: "10px",
    borderRadius: "8px",
    width: "90px",
    color: "white",
    position: "absolute",
    right: "5%",
    cursor: "pointer",
  };

  const handleDelete = async () => {
    const response = await apiService(
      "delete",
      "/auth/deletefile",
      { "Content-Type": "multipart/form-data", "x-usertoken": authToken },
      null
    );
    if (response) {
      fileChecking(false);
      SuccessMessage('File Deleted')
      setDeleteFirst(true)
      // console.log("response", response);
    }
  };



  return (
    <div>
      <Helmet>
        <title>File Upload</title>
        <meta name="File Upload" content="This is a File Upload page" />
      </Helmet>
      <Box sx={mainDiv}>
        <NavBar name={"UserCsv"} />
        <div style={fileMain}>
          {fileCheck &&
            <div style={deleteBTn} onClick={handleDelete}>
              <AiFillDelete size={20} color="white" />
              <p style={{ marginTop: "2px" }}>Delete</p>
            </div>
          }
          <div style={inputMain}>
            <img src={Upload} alt="upload" height={100} />
            <p style={csvFileStyle}>Upload your CSV file</p>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

            <input
              type="file"
              onChange={(e) => {
                handleFile(e);
              }}
              style={inputStyle}
            />
            {
            fileCheck?<p style={{color:'red'}}>Please <strong>delete</strong> first to add new file</p>:  
           <button
             onClick={() => uploadFile()}
             style={submitDisabled ? disableButton : submitButton}
             disabled={submitDisabled}
           >
             upload
           </button>
            }
          </div>
        </div>
      </Box>
      <ToastContainer/>
    </div>
  );
};

export default UserCsv;
