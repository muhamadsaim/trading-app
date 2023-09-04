import React from "react";
import "./upcomingEvents.css";
import { Divider } from "@mui/material";
import ModeChange from "../../../Theme/ChangeMode";
// import {lightTheme} from '../../../Theme/theme'

const UpcomingEvents = () => {

  const lightTheme = ModeChange();
  
  const Events = [
    {
      event: 'Market analysis with Zak',
      date: 'Sat, Oct 22 4 - 4:30pm (EDT)',
    },
    {
      event: "Webinar with Mark O'brin",
      date: 'Sat, Oct 22 4 - 4:30pm (EDT)',
    },
    {
      event: 'BTC / USD',
      date: 'Sat, Oct 22 4 - 4:30pm (EDT)',
    },
    {
      event: 'BTC / USD',
      date: 'Sat, Oct 22 4 - 4:30pm (EDT)',
    },
    {
      event: 'BTC / USD',
      date: 'Sat, Oct 22 4 - 4:30pm (EDT)',
    },
    {
      event: 'BTC / USD',
      date: 'Sat, Oct 22 4 - 4:30pm (EDT)',
    },
  ];
  const mainEventsDiv = {
    backgroundColor:`${lightTheme.ComponentBackgroundColor}`,
    border: `1px solid ${lightTheme.eventsColor}`,

    maxHeight: '382px',
    overflow:'scroll'
  }
  const eventDiv={
    borderBottom:`1px solid ${lightTheme.eventBorderColor}`
  }
  return (
    <div className="mainEventsDiv" style={mainEventsDiv}>
      <p className="upcomingEvent" style={{color:`${lightTheme.headingTextColor}`}}>Upcoming Events</p>
      {Events.map((event, index) => {
        return (
          <div key={index}>
            <div className="eventDiv" style={eventDiv} >
              <ul>
                <li className="event" style={{ color: `${lightTheme.headingTextColor}` }}>
                  {event.event}
                </li>
              </ul>
              <p className="eventDate" style={{ color: `${lightTheme.textColor}` }}>
                {event.date}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UpcomingEvents;
