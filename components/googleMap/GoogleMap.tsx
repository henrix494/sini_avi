"use client";
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  borderRadius: "inherit", // Matches the parent's border-radius
};

const center = {
  lat: 32.0461,
  lng: 34.8516,
};

const GoogleMapComponent = () => {
  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}
    >
      <div className="max-lg:mt-10" style={{ backgroundColor: "#fafafa" }}>
        <div>
          <h3 className="  text-main-bg text-4xl font-bold text-center">
            :איפה אנחנו נימצאים
          </h3>
        </div>
        <div className="responsive-map-container">
          <GoogleMap mapContainerStyle={mapStyle} center={center} zoom={10}>
            <Marker position={center} />
          </GoogleMap>
        </div>
      </div>
    </LoadScript>
  );
};

export default GoogleMapComponent;
