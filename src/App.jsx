import React, { useState } from "react";
import InvitationLanding from "./InvitationLanding/InvitationLanding";
import InvitationLanding2 from "./InvitationLanding/InvitationLanding2";
import InvitationLanding3 from "./InvitationLanding/InvitationLanding3";
import InvitationLanding4 from "./InvitationLanding/InvitationLanding4";

function App() {
  const [selectedLanding, setSelectedLanding] = useState(null);

  const renderLanding = () => {
    switch (selectedLanding) {
      case 1:
        return <InvitationLanding />;
      case 2:
        return <InvitationLanding2 />;
      case 3:
        return <InvitationLanding3 />;
      case 4:
        return <InvitationLanding4 />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col items-center justify-center">
      {!selectedLanding ? (
        <div className="flex flex-col items-center space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <button
              onClick={() => setSelectedLanding(1)}
              className="px-6 py-3 bg-yellow-600 text-white rounded-lg shadow-md hover:bg-yellow-700 transition"
            >
              Opción 1
            </button>
            <button
              onClick={() => setSelectedLanding(2)}
              className="px-6 py-3 bg-yellow-600 text-white rounded-lg shadow-md hover:bg-yellow-700 transition"
            >
              Opción 2
            </button>
            <button
              onClick={() => setSelectedLanding(3)}
              className="px-6 py-3 bg-yellow-600 text-white rounded-lg shadow-md hover:bg-yellow-700 transition"
            >
              Opción 3
            </button>
            <button
              onClick={() => setSelectedLanding(4)}
              className="px-6 py-3 bg-yellow-600 text-white rounded-lg shadow-md hover:bg-yellow-700 transition"
            >
              Opción 4
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full h-full">
          <button
            onClick={() => setSelectedLanding(null)}
            className="fixed top-4 left-4 px-4 py-2 bg-yellow-600 text-white rounded-lg shadow-md hover:bg-yellow-700 transition z-50"
          >
            Volver al menú
          </button>
          {renderLanding()}
        </div>
      )}
    </div>
  );
}

export default App;
