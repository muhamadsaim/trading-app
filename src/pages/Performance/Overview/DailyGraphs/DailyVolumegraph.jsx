import React, { useEffect, useState } from 'react';
import { Grid, Box } from '@mui/material';
import Chart from 'react-apexcharts';
import ModeChange from '../../../../Theme/ChangeMode';
import apiService from '../../../../services/api/api';
import { useSelector } from 'react-redux';
import { ApiError } from '../../../../helper/apiError';

const DailyVolumegraph = () => {
  const lightTheme = ModeChange();
const mode=useSelector((state)=>state.mode)
  const [DailyVolumeChart, setDailyVolumeChart] = useState({
    series:[],
    options:{}
  });

  const getDailyVolumeData = async () => {
    try {
      const authToken = localStorage.getItem('AuthToken');
      const res = await apiService('get', '/performance/overview/DailyVolumeGraph', { 'x-usertoken': authToken }, null)
      const data = res;
      const transformedData = Object.entries(data).map(([key, value]) => ({
        name: key,
        value: value.toFixed(2),
      }));
      const seriesData = [
        {
          data: transformedData.map((item) => item.value),
        },
      ]
      const optionsData = transformedData.map((item) => item.name);
        
      setDailyVolumeChart({
        series: seriesData,
        options: {
          colors: [`${lightTheme.blueGraphColor}`],
          chart: {
            type: 'bar',
            height: 350,
            toolbar: {
              show: false,
            },
          },
          plotOptions: {
            bar: {
              // borderRadius: 2,
              border: 15,
              vertical: true,
              // distributed: true
            },
          },
          dataLabels: {
            enabled: false,
          },
          xaxis: {
            categories: optionsData,
            labels: {
              style: {
                colors:`${lightTheme.graphAxis}`
              }
            }
          },
          yaxis: {
            tickAmount: 5,
            labels: {
              style: {
                colors:`${lightTheme.graphAxis}`
              }
            }
          },
        },
      })
    } catch (error) {
      const errorMessage = ApiError(error);
    console.error('API Error:', errorMessage);
    }
  }

  useEffect(() => {
    getDailyVolumeData();
  },[mode])

 

  // styling
  const mainDiv = {
    // backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    marginTop: '25px',
  };
  const GridItem = {
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    padding: '20px 10px',
    // marginTop:'15px'
    borderRadius: '8px',
  };
  const graphTitle = {
    color: `${lightTheme.headingTextColor}`,
    fontSize: '20px',
    fontWeight: '600',
  };
  return (
    <div>
            <p style={graphTitle}>Daily Volume (Last 30 Trending Days)</p>
            <div>
              <Chart options={DailyVolumeChart.options} series={DailyVolumeChart.series} type="bar" height={350} />
            </div>
    </div>
  );
};

export default DailyVolumegraph;
