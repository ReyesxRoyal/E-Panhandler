// src/components/Map.js
import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';

function Map() {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCLq4IzeOgDqlZHa2FViAkrdQxlG72IuRk`;
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat: 0, lng: 0 },
          zoom: 13,
        });
      };
    }
  }, []);

  return (
    <Box
      ref={mapRef}
      sx={{
        height: '400px',
        width: '100%',
        borderRadius: 1,
        overflow: 'hidden',
        boxShadow: 1,
      }}
    />
  );
}

export default Map;