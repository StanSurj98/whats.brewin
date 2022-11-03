import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./BreweryProfile.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";


const Event = (props) => {
  
  const [event, setEvent] = useState({});

  console.log('props:', props)

  const id = Math.floor(Math.random() * (4 - 1) + 1)
  useEffect(() => {
    axios.get(`/events/${id}`)
      .then((res) => {
        const event = res.data
        setEvent(event)
      })
  },[])

  return (
    <div className="event">
      <div className="header">
        <h3>Upcoming Events</h3>
      </div>
      <div className="event-content">
        <div className="event-left">
          <h6 className="event-date">
            <FontAwesomeIcon className="calendar" icon={faCalendar} />
            <div>{event.date}</div>
          <h6 className="event-likes">$ {event.ticket_price}</h6>
          </h6>
        </div>
        <div className="event-right">
          <h4 className="event-title">{event.event}</h4>
          <h6 className="event-address">
            {event.location}, {props.brewery.city} {props.brewery.state} USA</h6>
          <h6 className="event-likes">{event.description}</h6>
        </div>
      </div>
    </div>
  );
};

export default Event;