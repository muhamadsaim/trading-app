import React, { useState } from 'react';
import './Performance.css';
import { Box } from '@mui/material';
// import { lightTheme } from '../../Theme/theme';
import NavBar from '../../components/NavBar/NavBar';
import Overview from './Overview/OverView';
// import Compare from './Compare/DaysAndTimes/DaysAndTimes'
import Detail from './Details/Detail';
import TradeLogTopGraph from '../TradeLog/TradeLogTopGraphs/TradeLogTopGraphs';
import Compare from './Compare/Compare';
import WinVSLossDays from './WinVSLossDays/WinVSLossDays';
import Drawdown from './DrawDown/Drawdown';
import TagBreakDown from './TagBreakDown/TagBreakDown';
import ModeChange from '../../Theme/ChangeMode';
import { Helmet } from 'react-helmet-async';
import { Link, Outlet } from 'react-router-dom';


const Performance = () => {
  const lightTheme = ModeChange();
  const [showComponent, setShowComponent] = useState('0');


  // styling
  const mainDiv = {
    padding: '30px 25px',
    backgroundColor: `${lightTheme.lightPageBackground}`,
  };
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
      <Helmet>
        <title>Performance</title>
        <meta name="Performance" content="This is a Performance page" />
      </Helmet>
      <Box sx={mainDiv}>
        <NavBar name={'Performance'} />
        <TradeLogTopGraph />
        <div className="performanceMain" style={{ backgroundColor: `${lightTheme.ComponentBackgroundColor}` }}>
          <div className="ReportBtns">
            <p style={{color:`${lightTheme.bluegrayColor}`}}>Reports</p>
            <div
              style={{
                backgroundColor: `${lightTheme.performanceBTnDiv}`,
              }}
              className="performanceBTnDiv"
            >
              <button
                className="left-roundedPerformance"
                style={showComponent == '0' ? selected : notSelected}
                onClick={() => setShowComponent('0')}
              >
                <Link to='overview' style={showComponent == '0' ? selected : notSelected}>
                
                Overview
                </Link>
              </button>
              <button
                className="performanceBtn"
                style={showComponent == '1' ? selected : notSelected}
                onClick={() => setShowComponent('1')}
              >
                <Link to='detail' style={showComponent == '1' ? selected : notSelected}>
                Detailed
                </Link>
              </button>
              <button className="performanceBtn" style={showComponent == '2' ? selected : notSelected}>
                <Link to='option' style={showComponent == '2' ? selected : notSelected}>
                Options
                </Link>
              </button>
              <button className="performanceBtn" style={showComponent == '3' ? selected : notSelected}>
                <Link to='risk' style={showComponent == '3' ? selected : notSelected}>
                Risk
                
                </Link>

              </button>
              <button
                className="performanceBtn"
                style={showComponent == '4' ? selected : notSelected}
                onClick={() => setShowComponent('4')}
              >
                <Link to='winVsloss' style={showComponent == '4' ? selected : notSelected}>
                Wins VS Losses
                </Link>

              </button>
              <button
                className="performanceBtn"
                style={showComponent == '5' ? selected : notSelected}
                onClick={() => setShowComponent('5')}
              >
                <Link to='drawdown' style={showComponent == '5' ? selected : notSelected}>
                Drawdown
                </Link>
              </button>
              <button
                className="performanceBtn"
                style={showComponent == '6' ? selected : notSelected}
                onClick={() => setShowComponent('6')}
              >
                <Link to='compare' style={showComponent == '6' ? selected : notSelected}>
                Compare
                </Link>
              </button>
              <button
                className="performanceBtn"
                style={showComponent == '7' ? selected : notSelected}
                onClick={() => setShowComponent('7')}
              >
                <Link to='tag-breakdown' style={showComponent == '7' ? selected : notSelected}>
                
                Tag BreakDown
                </Link>
              </button>
              <button
                className="right-roundedPLType"
                style={showComponent == '8' ? selected : notSelected}
                onClick={() => setShowComponent('8')}
              >
                <Link to='calendar' style={showComponent == '8' ? selected : notSelected}>
                Calendar
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div>
          {/* {showComponent == '0' ? <Overview /> : null} */}
          {/* {showComponent == '1' ? <Detail /> : null} */}
          {/* {showComponent == '4' ? <WinVSLossDays /> : null} */}
          {/* {showComponent == '6' ? <Compare /> : null}
          {showComponent == '5' ? <Drawdown /> : null}
          {showComponent == '7' ? <TagBreakDown /> : null} */}
          <Outlet/>
        </div>
      </Box>
    </div>
  );
};

export default Performance;
