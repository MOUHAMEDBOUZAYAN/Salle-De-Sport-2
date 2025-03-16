import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const CalendarComponent = ({ onSelectSlot }) => {
  const [events, setEvents] = useState([]);

  const handleSelectSlot = (slotInfo) => {
    const newEvent = {
      title: "Session réservée",
      start: slotInfo.start,
      end: slotInfo.end,
    };
    setEvents([...events, newEvent]);
    onSelectSlot(newEvent); // Passer l'événement sélectionné au parent
  };

  return (
    <div style={{ height: 500 }}>
      <Calendar
        localizer={localizer}
        events={events}
        selectable
        onSelectSlot={handleSelectSlot}
        defaultView="week"
        views={["week", "day"]}
        min={new Date(0, 0, 0, 8, 0, 0)} // Heure de début (8h)
        max={new Date(0, 0, 0, 20, 0, 0)} // Heure de fin (20h)
      />
    </div>
  );
};

export default CalendarComponent;