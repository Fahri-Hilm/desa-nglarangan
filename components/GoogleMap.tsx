'use client';

import { useLoadScript, GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import { useMemo, useState } from 'react';

const mapContainerStyle = {
  width: '100%',
  height: '500px',
};

const defaultCenter = {
  lat: -7.5167,
  lng: 110.2167,
};

export default function MapComponent() {
  const [showInfo, setShowInfo] = useState(true);
  
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  });

  const center = useMemo(() => defaultCenter, []);

  if (loadError) {
    return (
      <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
        <div className="text-center text-gray-500">
          <p className="text-lg font-semibold mb-2">Error loading map</p>
          <p className="text-sm">Please check your Google Maps API Key</p>
        </div>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
        <div className="text-center text-gray-500">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700 mx-auto mb-4"></div>
          <p className="text-lg font-semibold">Loading map...</p>
        </div>
      </div>
    );
  }

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={14}
      center={center}
      options={{
        zoomControl: true,
        streetViewControl: true,
        mapTypeControl: true,
        fullscreenControl: true,
      }}
    >
      <Marker
        position={center}
        title="Dusun Nglarangan"
        onClick={() => setShowInfo(true)}
        icon={{
          url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
          scaledSize: new window.google.maps.Size(50, 50),
        }}
      />
      {showInfo && (
        <InfoWindow
          position={center}
          onCloseClick={() => setShowInfo(false)}
        >
          <div className="p-2">
            <h3 className="font-bold text-lg text-emerald-700 mb-1">📍 Dusun Nglarangan</h3>
            <p className="text-sm text-gray-600">Kec. Secang, Kab. Magelang</p>
            <p className="text-xs text-gray-500 mt-1">Jawa Tengah</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}
