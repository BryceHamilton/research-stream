import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from 'google-maps-react';

const containerStyles = {
  width: '67%',
  height: '67%',
};

const Map: React.FunctionComponent<{ lat: number; lng: number }> = ({
  lat,
  lng,
}) => {
  return (
    <LoadScript googleMapsApiKey='AIzaSyC7-QGQxMNrI25oDIUwZ59a7OYGE-rNLOM'>
      <GoogleMap
        mapContainerStyle={containerStyles}
        center={{ lat, lng }}
        zoom={10}
      >
        <Marker />
        <></>
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(Map);
