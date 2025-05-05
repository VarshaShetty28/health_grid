import { useState } from "react";
import { MapPin } from "lucide-react";

export default function HospitalMapEmbed() {
  const [mapKey, setMapKey] = useState(0);

  const handleReset = () => {
    setMapKey(prev => prev + 1);
  };

  const mapSrc = "https://www.google.com/maps?q=Father+Muller+Hospital,+Mangalore&output=embed";

  return (
    <div className="mb-16 relative">
      <div className="w-full h-80 rounded-xl shadow-md overflow-hidden">
        <iframe
          key={mapKey}
          title="Hospital Location - Mangalore"
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* Button moved to top-right corner */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
          title="Reset to Hospital Location"
        >
          <MapPin size={20} color="#3b82f6" />
        </button>
      </div>
    </div>
  );
}


// Embed Google Map: Used an iframe to embed a Google Map showing the hospital location.

// Reset Button: Added a MapPin icon button for resetting the map to the original location.

// Button Positioning: Placed the button in the top-left corner to avoid overlapping with map controls.

// State Management: Used React’s useState hook to track the iframe’s key, triggering a reload when the button is clicked.

// Iframe Reset: Reloaded the iframe by changing the key, simulating a reset of the map view.