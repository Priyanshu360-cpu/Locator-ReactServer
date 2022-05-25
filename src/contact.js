
import React from 'react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
const Map: React.FC<{}> = () => {
  const ref = React.useRef(null);
const [map, setMap] = React.useState();

React.useEffect(() => {
  if (ref.current && !map) {
    setMap(new window.google.maps.Map(ref.current, {}));
  }
}, [ref, map]);
return <div ref={ref} />
};
const Contact = () => {
  const render = (status: Status) => {
    return <h1>{status}</h1>;
  };
  return (
    <div>
      <Wrapper apiKey={"key"} render={render}>
        <Map></Map>
</Wrapper>
      <h1>Page ID - {window.location.href.split("?id=")[1]}</h1>
    </div>
  );
};
  
export default Contact;