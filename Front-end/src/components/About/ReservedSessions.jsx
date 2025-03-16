import React from "react";
import moment from "moment"; // Importer moment

const ReservedSessions = ({ sessions, onDeleteSession, onEditSession }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Sessions Réservées</h2>
      <ul>
        {sessions.map((session, index) => (
          <li key={index} className="mb-4 p-4 border rounded-lg shadow-sm bg-white">
            <div className="flex justify-between items-center">
              <div>
                <strong className="text-lg">{session.title}</strong> -{" "}
                <span className="text-gray-600">
                  {moment(session.start).format("DD/MM/YYYY HH:mm")} à{" "}
                  {moment(session.end).format("HH:mm")}
                </span>
              </div>
              <div>
                {/* Bouton de modification */}
                <button
                  onClick={() => onEditSession(index)}
                  className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2 hover:bg-blue-600 transition duration-300"
                >
                  Modifier
                </button>

                {/* Bouton de suppression */}
                <button
                  onClick={() => onDeleteSession(index)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-300"
                >
                  Supprimer
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReservedSessions;