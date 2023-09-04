import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
// import { lightTheme } from '../../Theme/theme';
import NavBar from '../../components/NavBar/NavBar';
import './journal.css';
import JournalComponent from '../JournalSetting/JournalComponent';
import ModeChange from '../../Theme/ChangeMode';
import { Helmet } from 'react-helmet-async';


const Journal = () => {
  const lightTheme=ModeChange()
  // const [navbarTitle, setNavbarTitle] = useState('Trade Setting');


  const mainDiv = {
    // padding: '30px 25px',
    // backgroundColor: `${lightTheme.lightPageBackground}`,
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
  };
  return (
    <div>
       <Helmet>
        <title>Journal</title>
        <meta name="Journal" content="This is a Journal page" />
      </Helmet>
      <Box sx={mainDiv}>
        {/* <NavBar name={navbarTitle} /> */}
        <JournalComponent />
      </Box>
    </div>
  );
};

export default Journal;
