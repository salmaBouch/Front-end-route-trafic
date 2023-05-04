import React, { useEffect } from 'react'
import L from 'leaflet'
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css"
import { useMap } from 'react-leaflet'
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
function LeafletRoutingMachine({ waypoints }) {
    const map = useMap();
    useEffect(() => {
        for (let i = 0; i < waypoints.length; i++) {
            if (waypoints[i]==waypoints[0]) {
                L.Routing.control({
                    waypoints,
                    lineOptions: {
                        styles: [{
                            color: getRandomColor(),
                            weigth: 4,
                        }]
                    },
                    routeWhileDragging: true
                }).addTo(map);
            }
            
        }

    }, [])
    return null;
}

export default LeafletRoutingMachine