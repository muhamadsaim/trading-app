import React, { useState } from 'react';
import { Box, Divider, Grid, TextField } from '@mui/material';
import { MdOutlineLock } from 'react-icons/md';
import ModeChange from '../../../Theme/ChangeMode';
import { Outlet, Link } from 'react-router-dom'

const Compare = () => {
  const lightTheme = ModeChange();
  const [applyFllter, setApplyFilter] = useState('0');
  const [showComponent, setShowComponent] = useState('0');

  // styling
  const mainDiv = {
    padding: '25px 15px',
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,

    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
  };

  const gridItem = {
    marginTop: '30px',
    border: `1px solid ${lightTheme.borderColor}`,
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    borderRadius: '8px',
  };
  const silverGold = {
    fontSize: '18px',
    fontWeight: '500',
    color: `${lightTheme.textColor}`,
    textAlign: 'center',
    padding: '5px 0',
  };
  const plMain = {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '10px 20px',
  };
  const plType = {
    color: `${lightTheme.headingTextColor}`,
    fontWeight: '500',
    fontSize: '14px',
  };
  const selected = {
    backgroundColor: `${lightTheme.lightDarkBlue}`,
    color: `${lightTheme.whiteText}`,
  };
  const notSelected = { background: 'none', color: `${lightTheme.textColor}` };
  return (
    <div>
      <Box sx={mainDiv}>
        <p style={silverGold}>
          These reports are only available for silver and gold users.
          <span style={{ color: `${lightTheme.headingTextColor}` }}>Upgrade now!</span>
        </p>
        {/* P & L type filters button */}
        <div style={plMain}>
          <p style={plType}>P&L Type :</p>
          <div
            className="plBtnDiv"
            style={{
              backgroundColor: `${lightTheme.performanceBTnDiv}`,
            }}
          >
            <button
              className="left-roundedPLType"
              style={applyFllter == '0' ? selected : notSelected}
              onClick={() => setApplyFilter('0')}
            >
              $
            </button>
            <button
              className="plBtn"
              style={applyFllter == '1' ? selected : notSelected}
              onClick={() => setApplyFilter('1')}
            >
              T
            </button>
            <button
              className="right-roundedPLType"
              style={applyFllter == '2' ? selected : notSelected}
              onClick={() => setApplyFilter('2')}
            >
              R{' '}
              <MdOutlineLock
                color="red"
                size={10}
                style={applyFllter == '2' ? { color: `${lightTheme.whiteText}` } : { color: `${lightTheme.textColor}` }}
              />
            </button>
          </div>
          <a
            href="#"
            style={{
              color: `${lightTheme.linkColor}`,
              textDecoration: 'underline',
            }}
          >
            Help
          </a>
        </div>
        {/* Aggregare and per-trade filters button */}
        <div className="winlossMain" style={{ backgroundColor: `${lightTheme.ComponentBackgroundColor}` }}>
          <div className="winlossBtns">
            <div
              style={{
                backgroundColor: `${lightTheme.performanceBTnDiv}`,
              }}
              className="winlossBTnDiv"
            >
              <button
                className="left-rounded"
                style={showComponent == '0' ? selected : notSelected}
                onClick={() => setShowComponent('0')}
              >
                <Link to="aggregate-pl" style={showComponent == '0' ? selected : notSelected}>
                Aggregate P&L
                </Link>
              </button>
              <button
                className="winlossBtn"
                style={showComponent == '1' ? selected : notSelected}
                onClick={() => setShowComponent('1')}
              >
                <Link to="per-trade-average" style={showComponent == '1' ? selected : notSelected}>
                Per-Trade Average
                </Link>
              </button>
              <button
                className="winlossBtn"
                style={showComponent == '2' ? selected : notSelected}
                onClick={() => setShowComponent('2')}
              >
                <Link to="days-times" style={showComponent == '2' ? selected : notSelected}>
                Days/Times
                </Link>
              </button>
              <button
                className="winlossBtn"
                style={showComponent == '3' ? selected : notSelected}
                onClick={() => setShowComponent('3')}
              >
                <Link to="price-volume" style={showComponent == '3' ? selected : notSelected}>
                Price/Volume
                </Link>
              </button>
              <button
                className="winlossBtn"
                style={showComponent == '4' ? selected : notSelected}
                onClick={() => setShowComponent('4')}
              >
                <Link to="instrument" style={showComponent == '4' ? selected : notSelected}>
                Instrument
                </Link>
              </button>
              <button
                className="winlossBtn"
                style={showComponent == '5' ? selected : notSelected}
                onClick={() => setShowComponent('5')}
              >
                <Link to="market-behaviour" style={showComponent == '5' ? selected : notSelected}>
                Market Behaviour
                </Link>
              </button>
              <button
                className="winlossBtn"
                style={showComponent == '6' ? selected : notSelected}
                onClick={() => setShowComponent('6')}
              >
                <Link to="winloss-expectation" style={showComponent == '6' ? selected : notSelected}>
                Wins/Loss/Expectation
                </Link>
              </button>
              <button
                className="right-rounded"
                style={showComponent == '7' ? selected : notSelected}
                onClick={() => setShowComponent('7')}
              >
                <Link to="liquidity" style={showComponent == '7' ? selected : notSelected}>
                Liquidity
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div>
         
          <Outlet/>
        </div>
      </Box>
    </div>
  );
};

export default Compare;
