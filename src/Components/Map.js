import React, { useState, useEffect } from "react";
import "../Styles/MapStyles.css";
import metadata from "../MetaData.json";
import CustomNav from "./NavMap.js";
import NavHome from "../assets/HomeNav.gif";
import Compte from "../assets/compteNav.gif";
import Settings from "../assets/Settings.gif";
import disconnect from "../assets/disconnect.png";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import { Icon,L } from "leaflet";

////////////////////////////////////////////////////////////////

export default function Map() {
  ///////////////////////////////////////////////////////////////////
  //les setters pour le point de départ et de destination
  const [startRoute, setStartRoute] = useState("");
  const [endRoute, setEndRoute] = useState("");
  const [startPoint, setStartPoint] = useState(null);
  const [endPoint, setEndPoint] = useState(null);
  const [markers, setMarkers] = useState([]);

  /////////////////////////////////////////////////////////////////////
  //icon de localisteur pour marker
  const customIcon = new Icon({
    iconUrl: require("../assets/localisateur.gif"),
    iconSize: [38, 38],
  });

  //////////////////////////////////////////////////////////////////////
  const routes = [
    {
      0: "4578",
      1: "4569",
      2: "4353",
      3: "4356",
      4: "4352",
      5: "4327",
      6: "4346",
      7: "4340",
      8: "4567",
      9: "4572",
      10: "4581",
    },
    {
      0: "4578",
      1: "4569",
      2: "4353",
      3: "4356",
      4: "4352",
      5: "4327",
      6: "4346",
      7: "4340",
      8: "4567",
      9: "4572",
      10: "4564",
      11: "4361",
      12: "3155",
      13: "3154",
      14: "2660",
      15: "2661",
      16: "4351",
      17: "4581",
    },
    {
      0: "4578",
      1: "4569",
      2: "4353",
      3: "4356",
      4: "4352",
      5: "4327",
      6: "4346",
      7: "4340",
      8: "4567",
      9: "4572",
      10: "4564",
      11: "4361",
      12: "3155",
      13: "3154",
      14: "2660",
      15: "2661",
      16: "4351",
      17: "4581",
    },
    {
      0: "4578",
      1: "4569",
      2: "4353",
      3: "4356",
      4: "4352",
      5: "4327",
      6: "4346",
      7: "4340",
      8: "4567",
      9: "4572",
      10: "4564",
      11: "4361",
      12: "3155",
      13: "3154",
      14: "2660",
      15: "2661",
      16: "4351",
      17: "4582",
      18: "4581",
    },
  ];

  function getCoordinates(routeNumber) {
    const route = metadata.find((r) => Object.values(r).includes(routeNumber));
    if (!route) {
      alert("not found");
      console.log(`Route ${routeNumber} not found in metadata`);
      return null;
    }
    const startPoint = {
      lat: parseFloat(route.POINT_1_LAT),
      lng: parseFloat(route.POINT_1_LNG),
    };

    const endPoint = {
      lat: parseFloat(route.POINT_2_LAT),
      lng: parseFloat(route.POINT_2_LNG),
    };

    return { startPoint, endPoint };
  }

  const handleRouteChange = (event) => {
    if (event.target.name === "startRoute") {
      setStartRoute(event.target.value);
    } else {
      setEndRoute(event.target.value);
    }
  };
  ///////////////////////////////////////////////////////////
  const handleSearch = () => {
    const startCoords = getCoordinates(startRoute);
    const startPoint = document.getElementById("startPoint").value;
    console.log(startPoint);
    const endCoords = getCoordinates(endRoute);
    const endPoint = document.getElementById("endPoint").value;
    console.log(typeof(endPoint));
    console.log("/*********************");
    metadata.forEach((obj) => {
      if (obj.POINT_1_NAME === startPoint) {
        const startCoords = {
          lat: String(obj.POINT_1_LAT),
          lng: String(obj.POINT_1_LNG),
        };
        
      }
      
      if (obj.POINT_2_NAME === endPoint) {
        const endCoords = {
          lat: (obj.POINT_2_LAT),
          lng: (obj.POINT_2_LNG),
        };
      }
    });
    console.log("start point : "+JSON.stringify(startCoords));
    console.log("end point : "+JSON.stringify(endCoords));
    const newMarkers = [];
    newMarkers.push(startCoords, endCoords);
   
    console.log("****************");
    if (startCoords && endCoords) {
      setStartPoint(startCoords.startPoint);
      setEndPoint(endCoords.endPoint);
    }
     
      const polylines = [];

  metadata.forEach((obj) => {
    if (obj.POINT_1_NAME === startPoint && obj.POINT_2_NAME === endPoint) {
      const path = [[obj.POINT_1_LAT, obj.POINT_1_LNG], [obj.POINT_2_LAT, obj.POINT_2_LNG]];
      
      const polyline = L.Polyline(path, { color: 'red' });
      
      polyline.addTo('map');
      polylines.push(polyline);
    }
  });

  if (polylines.length === 0) {
    alert(`Aucune route trouvée entre ${startPoint} et ${endPoint}.`);
  }
    
   // return newMarkers;
  };
  ////////////////////////////////////////////////////////////////
  
 


  return (
    <div style={{ display: "flex" }}>
      {/**********************navBar********************/}

      <CustomNav
        li={[
          [" Home", NavHome],
          ["Compte", Compte],
          ["Settings", Settings],
          ["Log-out ", disconnect],
        ]}
      />

      {/**********************MAP-Leaflet********************/}
      <MapContainer
        center={[56.156635, 10.210365]}
        zoom={13}
        scrollWheelZoom={false}
        className="leaflet-container"
        id='map'
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
   
        <div style={{ marginTop: 50 }} className="map-form">
          <label>
            Point de départ :
            <input
              type="text"
              name="startRoute"
              // value={startRoute}
              id="startPoint"
              onChange={handleRouteChange}
            />
          </label>
          <label>
            Destination :
            <input
              type="text"
              name="endRoute"
              // value={endRoute}
              id="endPoint"
              onChange={handleRouteChange}
            />
          </label>
          <button onClick={handleSearch}>Search</button>
        </div>
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={[marker.lat, marker.lng]}
            icon={customIcon}
          >
            <Popup>Informations de métadonnées pour le point {index + 1}</Popup>
          </Marker>
        ))}
        {startPoint && endPoint && (
          <>
            <Marker
              position={[startPoint.lat, startPoint.lng]}
              icon={customIcon}
            >
              <Popup>Informations de métadonnées pour le point de départ</Popup>
            </Marker>
            <Marker position={[endPoint.lat, endPoint.lng]} icon={customIcon}>
              <Popup>Informations de métadonnées pour le point d'arrivée</Popup>
            </Marker>
          </>
        )}
        
        
      </MapContainer>
    </div>
  );
}
