import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
const containerStyle = {
  width: '1600px',
  height: '500px'
};

const center = {
  lat: parseFloat(window.location.href.split("?coord=")[1].split(",")[0]),
  lng:  parseFloat(window.location.href.split("?coord=")[1].split(",")[1])
};
const onLoad = marker => {
  console.log('marker: ', marker)
}
const onClick = marker => {
  console.log('marker: ', marker)
}

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: ""
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <><h1>Location ID - {window.location.href.split("?id=")[1].split("?")[0]}</h1> <></>
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={7}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker
      icon={"https://cdn.discordapp.com/emojis/855018524044820480.gif?size=64"}
      onClick={onClick}
      position={center}
    />
    </GoogleMap></>
      
  ) : <></>
}

export default React.memo(MyComponent)