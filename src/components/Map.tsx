import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 37.8136,
      lng: 144.9631,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    // <div style={{ height: "100vh", width: "55%" }}>
    <div className="right-panel">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY! }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals={true}
      >
        <AnyReactComponent lat={37.8136} lng={144.9631} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}
