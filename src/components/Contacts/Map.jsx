import React from 'react';
import { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import style from './Map.module.css'

export default function Map() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyDgzxQ7lnJA7M-wTGeNqluMomk9AsGSor4"
    });

    if (!isLoaded) return <div>Loading...</div>

    return <Maps />;
}

function Maps() {
    const center = useMemo(() => ({ lat: 45.689954548163584, lng: 8.931679138727091 }));

    return (
        <GoogleMap
            zoom={19}
            center={center}
            mapContainerClassName={style.map}>
            <Marker position={{ "lat": 45.689969076016595, "lng": 8.931639369788869 }} />
        </GoogleMap>
    );
}
