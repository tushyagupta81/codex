// import React from 'react'

// const EventCard = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default EventCard

import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // For navigation

const EventCard = () => {
  const [eventCount, setEventCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/api/events")
      .then((res) => {
        const eventsThisWeek = res.data.filter(isThisWeek);
        setEventCount(eventsThisWeek.length);
      })
      .catch((err) => console.error("Error fetching events", err));
  }, []);

  // Helper function to check if an event is in the current week
  const isThisWeek = (event) => {
    const eventDate = new Date(event.date);
    const today = new Date();
    const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay())); // Start of week
    const endOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 6)); // End of week

    return eventDate >= startOfWeek && eventDate <= endOfWeek;
  };

  return (
    <div 
      className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition"
      onClick={() => navigate("/events")} // Redirect to the events page
    >
      <h3 className="text-md font-semibold">Upcoming Events</h3>
      <p className="text-gray-600">{eventCount} events this week</p>
    </div>
  );
};

export default EventCard;

