import React, { useState } from 'react';
import './Detail.css';
// import { lightTheme } from '../../../Theme/theme';
import { Box } from '@mui/material';
import AggregatePL from './AggredatePL/AggregatePL';
import PerTradeAverage from './PerTradeAverage/PerTradeAverage';
import DaysAndTimes from './DaysAndTimes/DaysAndTimes';
import PriceVolume from './PriceVolume/PriceVolume';
import Liquidity from './Liquidity/Liquidity';
import Instrument from './Instrument/Instrument';
import MarketBehaviour from './Marketbehaviour/MarketBehaviour';
import WinLossExpectation from './WinLossExpectation/WinLossExpectation';

import ModeChange from '../../../Theme/ChangeMode';
import { Link, Outlet } from 'react-router-dom';

const Detail = () => {
  const lightTheme = ModeChange();

  const [showComponent, setShowComponent] = useState('0');

  // styling
  const selected = {
    backgroundColor: `${lightTheme.lightDarkBlue}`,
    color: `${lightTheme.whiteText}`,
  };
  const notSelected = {
    background: 'none',
    color: `${lightTheme.textColor}`,
  };

  return (
    <div>
      <Box>
        <div className="detailMain" style={{ backgroundColor: `${lightTheme.ComponentBackgroundColor}` }}>
          <div className="detailBtns">
            <p style={{color:`${lightTheme.bluegrayColor}`}}>Details</p>
            <div
              style={{
                backgroundColor: `${lightTheme.performanceBTnDiv}`,
              }}
              className="detailBTnDiv"
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
                className="detailBtn"
                style={showComponent == '1' ? selected : notSelected}
                onClick={() => setShowComponent('1')}
              >
                <Link to="per-trade-average" style={showComponent == '1' ? selected : notSelected}>
                Per-Trade Average
                </Link>
              </button>
              <button
                className="detailBtn"
                style={showComponent == '2' ? selected : notSelected}
                onClick={() => setShowComponent('2')}
              >
                <Link to="days-times" style={showComponent == '2' ? selected : notSelected}>
                Days/Times
                </Link>
              </button>
              <button
                className="detailBtn"
                style={showComponent == '3' ? selected : notSelected}
                onClick={() => setShowComponent('3')}
              >
                <Link to="price-volume" style={showComponent == '3' ? selected : notSelected}>
                Price/Volume
                </Link>
              </button>
              <button
                className="detailBtn"
                style={showComponent == '4' ? selected : notSelected}
                onClick={() => setShowComponent('4')}
              >
                <Link to="instrument" style={showComponent == '4' ? selected : notSelected}>
                Instrument
                </Link>
              </button>
              <button
                className="detailBtn"
                style={showComponent == '5' ? selected : notSelected}
                onClick={() => setShowComponent('5')}
              >
                <Link to="market-behaviour" style={showComponent == '5' ? selected : notSelected}>
                Market Behaviour
                </Link>
              </button>
              <button
                className="detailBtn"
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

export default Detail;
