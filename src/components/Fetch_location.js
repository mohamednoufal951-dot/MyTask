import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "03b2251cf0d74e75bb66c12087d75ccd";

// Custom hook for fetching location
 const Fetch_Location = (lat, lon) => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!lat || !lon) return;

    const fetchLocation = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=${API_KEY}`
        );

        if (response.data && response.data.features.length > 0) {
          setLocation(response.data.features[0].properties);
        } else {
          setLocation(null);
        }
      } catch (err) {
        setError(err.message || "Error fetching location");
      } finally {
        setLoading(false);
      }
    };

    fetchLocation();
  }, [lat, lon]);

  return { location, loading, error };
};
export default Fetch_Location;