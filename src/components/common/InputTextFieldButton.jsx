import React from 'react';
// import { lightTheme } from '../../Theme/theme';
import ModeChange from '../../Theme/ChangeMode';
const InputTextFieldButton = ({ placeholder = '', showSideButton, writable, buttonTitle = '' }) => {
  const lightTheme = ModeChange()
  
  const inputStyle={
    width: '100%',
    padding: '8px 10px 8px 10px',
    borderRadius: '5px 0px 0px 5px',
    outline: 'none',
    border: `1px solid ${lightTheme.selectBorderColor}`,
    background: `${lightTheme.PageBackgroundColor}`,
    color: `${lightTheme.whiteText}`,
  }
  const buttonstyle={
    textTransform: 'none',
    borderRadius: '0px 5px 5px 0px',
    padding: '5px 5px',
    background: `${lightTheme.lightDarkBlue}`,
    color: `${lightTheme.whiteText}`,
    cursor: 'pointer',
    border: 'none',
  }
  return (
    <div
      style={{
        display: 'flex',
        margin: '10px 0px 10px 0px',
      }}
    >
      <input
        type="text"
        placeholder={placeholder}
        disabled={writable === false ? true : false}
        style={inputStyle}
      ></input>
      {showSideButton && (
        <button
          style={buttonstyle}
        >
          {buttonTitle}
        </button>
      )}
    </div>
  );
};

export default InputTextFieldButton;
