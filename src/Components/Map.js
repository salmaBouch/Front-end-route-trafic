import React, { useState, useEffect } from "react";
import "../Styles/MapStyles.css";
import metadata from "../MetaData.json";

import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import { Icon,L } from "leaflet";
import Sidebar from './SideBar';
import LeafletRoutingMachine from "./LeafletRoutingMachine";

////////////////////////////////////////////////////////////////
export default function Map() {
 ///////////////////////////////////////////////////////////////////
  //les setters pour le point de départ et de destination
  const [startRoute, setStartRoute] = useState("");
  const [endRoute, setEndRoute] = useState("");
  const [startPoint, setStartPoint] = useState(null);
  const [endPoint, setEndPoint] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [showPolyline, setShowPolyline] = useState(false);
  const [showLeafleftRoutingMachine, setshowLeafleftRoutingMachine] = useState(false);
  const [coords, setcoords] = useState([]);
  // Trouver les coordonnées du début et de la fin de la route
  let startCoords, endCoords;
  for (let i = 0; i < metadata.length; i++) {
    if (metadata[i].POINT_1_NAME === '4578') {
      startCoords = {
        lat: parseFloat(metadata[i].POINT_1_LAT),
        lng: parseFloat(metadata[i].POINT_1_LNG),
      };
    }

    if (metadata[i].POINT_2_NAME === '4581') {
      endCoords = {
        lat: parseFloat(metadata[i].POINT_2_LAT),
        lng: parseFloat(metadata[i].POINT_2_LNG),
      };
    }
  }

  // Ajouter les positions à la liste des positions
  const positions = [];
  if (startCoords && endCoords) {
    positions.push([startCoords.lat, startCoords.lng]);
    positions.push([endCoords.lat, endCoords.lng]);
  }
  /////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////
  //icon de localisteur pour marker
  const customIcon = new Icon({
    iconUrl: require("../assets/localisateur.gif"),
    iconSize: [38, 38],
  });

  //////////////////////////////////////////////////////////////////////
  const tranconsRoute = [[
    {
      "point": "4578",
      "distance": 0,
      "POINT_1_LNG": "10.259470361936565",
      "POINT_1_LAT": "56.20496203409241"
    },
    {
      "point": "4565",
      "distance": 602,
      "POINT_1_LNG": "10.250786139881143",
      "POINT_1_LAT": "56.20251117218925"
    },
    {
      "point": "4567",
      "distance": 1193,
      "POINT_1_LNG": "10.241876431877131",
      "POINT_1_LAT": "56.20056009742038"
    },
    {
      "point": "4340",
      "distance": 2119,
      "POINT_1_LNG": "10.236217525131224",
      "POINT_1_LAT": "56.205074"
    },
    {
      "point": "4346",
      "distance": 3496,
      "POINT_1_LNG": "10.233619432540877",
      "POINT_1_LAT": "56.21728389714838"
    },
    {
      "point": "4327",
      "distance": 4854,
      "POINT_1_LNG": "10.246299305557386",
      "POINT_1_LAT": "56.22521120818609"
    },
    {
      "point": "4326",
      "distance": 11549,
      "POINT_1_LNG": "10.144907008598352",
      "POINT_1_LAT": "56.21385651069573"
    },
    {
      "point": "4349",
      "distance": 12744,
      "POINT_1_LNG": "10.161157250404358",
      "POINT_1_LAT": "56.208646307573304"
    },
    {
      "point": "4350",
      "distance": 13819,
      "POINT_1_LNG": "10.175406949737521",
      "POINT_1_LAT": "56.20417258212644"
    },
    {
      "point": "4564",
      "distance": 16755,
      "POINT_1_LNG": "10.216251775463206",
      "POINT_1_LAT": "56.196878435033454"
    },
    {
      "point": "4581",
      "distance": 17274,
      "POINT_1_LNG": "10.218878251485876",
      "POINT_1_LAT": "56.19371107014121"
    }
  ]]
  const routes = [
    [
      {
        "point": "4578",
        "distance": 0,
        "POINT_1_LNG": "10.259470361936565",
        "POINT_1_LAT": "56.20496203409241"
      },
       {
         "point": "4565",
         "distance": 602,
         "POINT_1_LNG": "10.250786139881143",
         "POINT_1_LAT": "56.20251117218925"
     }
    //   {
    //     "point": "4567",
    //     "distance": 1193,
    //     "POINT_1_LNG": "10.241876431877131",
    //     "POINT_1_LAT": "56.20056009742038"
    //   },
    //   {
    //     "point": "4340",
    //     "distance": 2119,
    //     "POINT_1_LNG": "10.236217525131224",
    //     "POINT_1_LAT": "56.205074"
    //   },
    //   {
    //     "point": "4346",
    //     "distance": 3496,
    //     "POINT_1_LNG": "10.233619432540877",
    //     "POINT_1_LAT": "56.21728389714838"
    //   },
    //   {
    //     "point": "4327",
    //     "distance": 4854,
    //     "POINT_1_LNG": "10.246299305557386",
    //     "POINT_1_LAT": "56.22521120818609"
    //   },
    //   {
    //     "point": "4326",
    //     "distance": 11549,
    //     "POINT_1_LNG": "10.144907008598352",
    //     "POINT_1_LAT": "56.21385651069573"
    //   },
    //   {
    //     "point": "4349",
    //     "distance": 12744,
    //     "POINT_1_LNG": "10.161157250404358",
    //     "POINT_1_LAT": "56.208646307573304"
    //   },
    //   {
    //     "point": "4350",
    //     "distance": 13819,
    //     "POINT_1_LNG": "10.175406949737521",
    //     "POINT_1_LAT": "56.20417258212644"
    //   },
    //   {
    //     "point": "4564",
    //     "distance": 16755,
    //     "POINT_1_LNG": "10.216251775463206",
    //     "POINT_1_LAT": "56.196878435033454"
    //   },
    //   {
    //     "point": "4581",
    //     "distance": 17274,
    //     "POINT_1_LNG": "10.218878251485876",
    //     "POINT_1_LAT": "56.19371107014121"
    //   }
    // ],
    // [
    //   {
    //     "point": "4578",
    //     "distance": 0,
    //     "POINT_1_LNG": "10.259470361936565",
    //     "POINT_1_LAT": "56.20496203409241"
    //   },
    //   {
    //     "point": "4565",
    //     "distance": 602,
    //     "POINT_1_LNG": "10.250786139881143",
    //     "POINT_1_LAT": "56.20251117218925"
    //   },
    //   {
    //     "point": "4567",
    //     "distance": 1193,
    //     "POINT_1_LNG": "10.241876431877131",
    //     "POINT_1_LAT": "56.20056009742038"
    //   },
    //   {
    //     "point": "4340",
    //     "distance": 2119,
    //     "POINT_1_LNG": "10.236217525131224",
    //     "POINT_1_LAT": "56.205074"
    //   },
    //   {
    //     "point": "4346",
    //     "distance": 3496,
    //     "POINT_1_LNG": "10.233619432540877",
    //     "POINT_1_LAT": "56.21728389714838"
    //   },
    //   {
    //     "point": "4327",
    //     "distance": 4854,
    //     "POINT_1_LNG": "10.246299305557386",
    //     "POINT_1_LAT": "56.22521120818609"
    //   },
    //   {
    //     "point": "4326",
    //     "distance": 11549,
    //     "POINT_1_LNG": "10.144907008598352",
    //     "POINT_1_LAT": "56.21385651069573"
    //   },
    //   {
    //     "point": "4349",
    //     "distance": 12744,
    //     "POINT_1_LNG": "10.161157250404358",
    //     "POINT_1_LAT": "56.208646307573304"
    //   },
    //   {
    //     "point": "4350",
    //     "distance": 13819,
    //     "POINT_1_LNG": "10.175406949737521",
    //     "POINT_1_LAT": "56.20417258212644"
    //   },
    //   {
    //     "point": "4564",
    //     "distance": 16755,
    //     "POINT_1_LNG": "10.216251775463206",
    //     "POINT_1_LAT": "56.196878435033454"
    //   },
    //   {
    //     "point": "4581",
    //     "distance": 17274,
    //     "POINT_1_LNG": "10.218878251485876",
    //     "POINT_1_LAT": "56.19371107014121"
    //   }
    // ],
    // [
    //   {
    //     "point": "4578",
    //     "distance": 0,
    //     "POINT_1_LNG": "10.259470361936565",
    //     "POINT_1_LAT": "56.20496203409241"
    //   },
    //   {
    //     "point": "4565",
    //     "distance": 602,
    //     "POINT_1_LNG": "10.250786139881143",
    //     "POINT_1_LAT": "56.20251117218925"
    //   },
    //   {
    //     "point": "4567",
    //     "distance": 1193,
    //     "POINT_1_LNG": "10.241876431877131",
    //     "POINT_1_LAT": "56.20056009742038"
    //   },
    //   {
    //     "point": "4340",
    //     "distance": 2119,
    //     "POINT_1_LNG": "10.236217525131224",
    //     "POINT_1_LAT": "56.205074"
    //   },
    //   {
    //     "point": "4346",
    //     "distance": 3496,
    //     "POINT_1_LNG": "10.233619432540877",
    //     "POINT_1_LAT": "56.21728389714838"
    //   },
    //   {
    //     "point": "4327",
    //     "distance": 4854,
    //     "POINT_1_LNG": "10.246299305557386",
    //     "POINT_1_LAT": "56.22521120818609"
    //   },
    //   {
    //     "point": "4326",
    //     "distance": 11549,
    //     "POINT_1_LNG": "10.144907008598352",
    //     "POINT_1_LAT": "56.21385651069573"
    //   },
    //   {
    //     "point": "4349",
    //     "distance": 12744,
    //     "POINT_1_LNG": "10.161157250404358",
    //     "POINT_1_LAT": "56.208646307573304"
    //   },
    //   {
    //     "point": "4350",
    //     "distance": 13774,
    //     "POINT_1_LNG": "10.175406949737521",
    //     "POINT_1_LAT": "56.20417258212644"
    //   },
    //   {
    //     "point": "4564",
    //     "distance": 16710,
    //     "POINT_1_LNG": "10.216251775463206",
    //     "POINT_1_LAT": "56.196878435033454"
    //   },
    //   {
    //     "point": "4581",
    //     "distance": 17229,
    //     "POINT_1_LNG": "10.218878251485876",
    //     "POINT_1_LAT": "56.19371107014121"
    //   }
    // ],
    // [
    //   {
    //     "point": "4578",
    //     "distance": 0,
    //     "POINT_1_LNG": "10.259470361936565",
    //     "POINT_1_LAT": "56.20496203409241"
    //   },
    //   {
    //     "point": "4565",
    //     "distance": 602,
    //     "POINT_1_LNG": "10.250786139881143",
    //     "POINT_1_LAT": "56.20251117218925"
    //   },
    //   {
    //     "point": "4567",
    //     "distance": 1193,
    //     "POINT_1_LNG": "10.241876431877131",
    //     "POINT_1_LAT": "56.20056009742038"
    //   },
    //   {
    //     "point": "4340",
    //     "distance": 2119,
    //     "POINT_1_LNG": "10.236217525131224",
    //     "POINT_1_LAT": "56.205074"
    //   },
    //   {
    //     "point": "4346",
    //     "distance": 3496,
    //     "POINT_1_LNG": "10.233619432540877",
    //     "POINT_1_LAT": "56.21728389714838"
    //   },
    //   {
    //     "point": "4327",
    //     "distance": 4854,
    //     "POINT_1_LNG": "10.246299305557386",
    //     "POINT_1_LAT": "56.22521120818609"
    //   },
    //   {
    //     "point": "4326",
    //     "distance": 11549,
    //     "POINT_1_LNG": "10.144907008598352",
    //     "POINT_1_LAT": "56.21385651069573"
    //   },
    //   {
    //     "point": "4349",
    //     "distance": 12744,
    //     "POINT_1_LNG": "10.161157250404358",
    //     "POINT_1_LAT": "56.208646307573304"
    //   },
    //   {
    //     "point": "4350",
    //     "distance": 13774,
    //     "POINT_1_LNG": "10.175406949737521",
    //     "POINT_1_LAT": "56.20417258212644"
    //   },
    //   {
    //     "point": "4564",
    //     "distance": 16710,
    //     "POINT_1_LNG": "10.216251775463206",
    //     "POINT_1_LAT": "56.196878435033454"
    //   },
    //   {
    //     "point": "4581",
    //     "distance": 17229,
    //     "POINT_1_LNG": "10.218878251485876",
    //     "POINT_1_LAT": "56.19371107014121"
    //   }
    // ],
    // [
    //   {
    //     "point": "4578",
    //     "distance": 0,
    //     "POINT_1_LNG": "10.259470361936565",
    //     "POINT_1_LAT": "56.20496203409241"
    //   },
    //   {
    //     "point": "4565",
    //     "distance": 602,
    //     "POINT_1_LNG": "10.250786139881143",
    //     "POINT_1_LAT": "56.20251117218925"
    //   },
    //   {
    //     "point": "4567",
    //     "distance": 1193,
    //     "POINT_1_LNG": "10.241876431877131",
    //     "POINT_1_LAT": "56.20056009742038"
    //   },
    //   {
    //     "point": "4340",
    //     "distance": 2119,
    //     "POINT_1_LNG": "10.236217525131224",
    //     "POINT_1_LAT": "56.205074"
    //   },
    //   {
    //     "point": "4346",
    //     "distance": 3496,
    //     "POINT_1_LNG": "10.233619432540877",
    //     "POINT_1_LAT": "56.21728389714838"
    //   },
    //   {
    //     "point": "4327",
    //     "distance": 4854,
    //     "POINT_1_LNG": "10.246299305557386",
    //     "POINT_1_LAT": "56.22521120818609"
    //   },
    //   {
    //     "point": "4326",
    //     "distance": 11549,
    //     "POINT_1_LNG": "10.144907008598352",
    //     "POINT_1_LAT": "56.21385651069573"
    //   },
    //   {
    //     "point": "4349",
    //     "distance": 12724,
    //     "POINT_1_LNG": "10.161157250404358",
    //     "POINT_1_LAT": "56.208646307573304"
    //   },
    //   {
    //     "point": "4350",
    //     "distance": 13754,
    //     "POINT_1_LNG": "10.175406949737521",
    //     "POINT_1_LAT": "56.20417258212644"
    //   },
    //   {
    //     "point": "4564",
    //     "distance": 16690,
    //     "POINT_1_LNG": "10.216251775463206",
    //     "POINT_1_LAT": "56.196878435033454"
    //   },
    //   {
    //     "point": "4581",
    //     "distance": 17209,
    //     "POINT_1_LNG": "10.218878251485876",
    //     "POINT_1_LAT": "56.19371107014121"
    //   }
    // ],
    // [
    //   {
    //     "point": "4578",
    //     "distance": 0,
    //     "POINT_1_LNG": "10.259470361936565",
    //     "POINT_1_LAT": "56.20496203409241"
    //   },
    //   {
    //     "point": "4565",
    //     "distance": 602,
    //     "POINT_1_LNG": "10.250786139881143",
    //     "POINT_1_LAT": "56.20251117218925"
    //   },
    //   {
    //     "point": "4567",
    //     "distance": 1193,
    //     "POINT_1_LNG": "10.241876431877131",
    //     "POINT_1_LAT": "56.20056009742038"
    //   },
    //   {
    //     "point": "4572",
    //     "distance": 2075,
    //     "POINT_1_LNG": "10.228639215938529",
    //     "POINT_1_LAT": "56.19765179702361"
    //   },
    //   {
    //     "point": "4581",
    //     "distance": 2874,
    //     "POINT_1_LNG": "10.218878251485876",
    //     "POINT_1_LAT": "56.19371107014121"
    //   }
    // ],
    // [
    //   {
    //     "point": "4578",
    //     "distance": 0,
    //     "POINT_1_LNG": "10.259470361936565",
    //     "POINT_1_LAT": "56.20496203409241"
    //   },
    //   {
    //     "point": "4565",
    //     "distance": 602,
    //     "POINT_1_LNG": "10.250786139881143",
    //     "POINT_1_LAT": "56.20251117218925"
    //   },
    //   {
    //     "point": "4567",
    //     "distance": 1193,
    //     "POINT_1_LNG": "10.241876431877131",
    //     "POINT_1_LAT": "56.20056009742038"
    //   },
    //   {
    //     "point": "4572",
    //     "distance": 2075,
    //     "POINT_1_LNG": "10.228639215938529",
    //     "POINT_1_LAT": "56.19765179702361"
    //   },
    //   {
    //     "point": "4581",
    //     "distance": 2874,
    //     "POINT_1_LNG": "10.218878251485876",
    //     "POINT_1_LAT": "56.19371107014121"
    //   }
    // ],
    // [
    //   {
    //     "point": "4578",
    //     "distance": 0,
    //     "POINT_1_LNG": "10.259470361936565",
    //     "POINT_1_LAT": "56.20496203409241"
    //   },
    //   {
    //     "point": "4565",
    //     "distance": 602,
    //     "POINT_1_LNG": "10.250786139881143",
    //     "POINT_1_LAT": "56.20251117218925"
    //   },
    //   {
    //     "point": "4567",
    //     "distance": 1193,
    //     "POINT_1_LNG": "10.241876431877131",
    //     "POINT_1_LAT": "56.20056009742038"
    //   },
    //   {
    //     "point": "4572",
    //     "distance": 2075,
    //     "POINT_1_LNG": "10.228639215938529",
    //     "POINT_1_LAT": "56.19765179702361"
    //   },
    //   {
    //     "point": "4581",
    //     "distance": 2872,
    //     "POINT_1_LNG": "10.218878251485876",
    //     "POINT_1_LAT": "56.19371107014121"
    //   }
    // ],
    // [
    //   {
    //     "point": "4578",
    //     "distance": 0,
    //     "POINT_1_LNG": "10.259470361936565",
    //     "POINT_1_LAT": "56.20496203409241"
    //   },
    //   {
    //     "point": "4565",
    //     "distance": 602,
    //     "POINT_1_LNG": "10.250786139881143",
    //     "POINT_1_LAT": "56.20251117218925"
    //   },
    //   {
    //     "point": "4567",
    //     "distance": 1193,
    //     "POINT_1_LNG": "10.241876431877131",
    //     "POINT_1_LAT": "56.20056009742038"
    //   },
    //   {
    //     "point": "4572",
    //     "distance": 2074,
    //     "POINT_1_LNG": "10.228639215938529",
    //     "POINT_1_LAT": "56.19765179702361"
    //   },
    //   {
    //     "point": "4581",
    //     "distance": 2871,
    //     "POINT_1_LNG": "10.218878251485876",
    //     "POINT_1_LAT": "56.19371107014121"
    //   }
    ]
  ]

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
    console.log(typeof (endPoint));
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
    console.log("start point : " + JSON.stringify(startCoords));
    console.log("end point : " + JSON.stringify(endCoords));
    const newMarkers = [];
    newMarkers.push(startCoords, endCoords);

    console.log("****************");
    if (startCoords && endCoords) {
      setStartPoint(startCoords.startPoint);
      setEndPoint(endCoords.endPoint);
    }
    const coord = []
    for (let i = 0; i < routes.length; i++) {
      for (let j = 0; j < routes[i].length; j++) {
        coord.push([routes[i][j].POINT_1_LAT, routes[i][j].POINT_1_LNG]);
      }
    }
    setcoords(coord)
    console.log(coord);
    // return coords;
  };


  ////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////




  return (
    <div style={{ display: "flex" }}>
      {/**********************navBar********************/}

      <Sidebar/>

      {/**********************MAP-Leaflet********************/}
      <MapContainer
        center={[56.156635, 10.210365]}
        zoom={13}
        scrollWheelZoom={false}
        className="leaflet-container"
        id='map'
        style={{ zIndex: 0 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <div style={{}} className="map-form">
          <label>
          Starting point :
            <input
              type="text"
              name="startRoute"
              // value={startRoute}
              id="startPoint"
              onChange={handleRouteChange}
            />
          </label>
          <label>
          Destination point:
            <input
              type="text"
              name="endRoute"
              // value={endRoute}
              id="endPoint"
              onChange={handleRouteChange}
            />
          </label>
          <button onClick={() => { handleSearch(); setshowLeafleftRoutingMachine(true); }}>Go</button>
        </div>
        {showLeafleftRoutingMachine && <LeafletRoutingMachine waypoints={coords} />}
        {/* {showPolyline && <Polyline pathOptions={{ color: 'black' }} positions={positions} />} */}
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