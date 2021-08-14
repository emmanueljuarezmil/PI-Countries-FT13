import React from 'react'
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker
} from 'react-google-maps'

const Map = ({lat, lng}) => {
    return (
        <GoogleMap
        defaultZoom={4}
        center={{lat: parseInt(lat), lng: parseInt(lng)}}
        >
            <Marker
            position={{lat: parseInt(lat), lng: parseInt(lng)}}
            />
        </GoogleMap>
    )
}

export default withScriptjs(
    withGoogleMap(
        Map
    )
)
