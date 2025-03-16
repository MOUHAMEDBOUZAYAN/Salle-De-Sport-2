import React from "react";

const ReservedSessions = ({ sessions }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Sessions Réservées</h2>
      <ul>
        {sessions.map((session, index) => (
          <li key={index} className="mb-2">
            <strong>{session.title}</strong> -{" "}
            {moment(session.start).format("DD/MM/YYYY HH:mm")} à{" "}
            {moment(session.end).format("HH:mm")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReservedSessions;