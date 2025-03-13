import { useEffect, useState, useRef, useMemo } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Loader } from "../CPLoader";
import { DivLoader } from "./index";
import { Marker as LeafletMarker } from "leaflet";

interface CPMapaProps {
    onCoordinateChange: (latitude: number, longitude: number) => void;
}

export function CPMapa({ onCoordinateChange }: CPMapaProps) {
    const [markerCoordinate, setMarkerCoordinate] = useState({
        latitude: -6.888765940097697,
        longitude: -38.55928242075309,
    });

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const newCoordinates = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    };
                    setMarkerCoordinate(newCoordinates);
                    onCoordinateChange(newCoordinates.latitude, newCoordinates.longitude);
                },
                () => {
                    alert("Permissão Negada: Precisamos de sua permissão para acessar sua localização.");
                }
            );
        } else {
            alert("Geolocalização não é suportada pelo seu navegador.");
        }
    }, []);

    return (
        <MapContainer center={[markerCoordinate.latitude, markerCoordinate.longitude]} zoom={13} scrollWheelZoom>
            <TileLayer attribution='&copy; OpenStreetMap contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <DraggableMarker markerCoordinate={markerCoordinate} setMarkerCoordinate={setMarkerCoordinate} onCoordinateChange={onCoordinateChange} />
        </MapContainer>
    );
}

function DraggableMarker({ markerCoordinate, setMarkerCoordinate, onCoordinateChange }: { markerCoordinate: any; setMarkerCoordinate: any; onCoordinateChange: (latitude: number, longitude: number) => void }) {
    const markerRef = useRef<LeafletMarker | null>(null);

    const eventHandlers = useMemo(
        () => ({
            dragend() {
                const marker = markerRef.current;
                if (marker) {
                    const newPosition = marker.getLatLng();
                    setMarkerCoordinate({ latitude: newPosition.lat, longitude: newPosition.lng });
                    onCoordinateChange(newPosition.lat, newPosition.lng);
                }
            },
        }),
        []
    );

    return (
        <Marker draggable eventHandlers={eventHandlers} position={[markerCoordinate.latitude, markerCoordinate.longitude]} ref={markerRef} />
    );
}
