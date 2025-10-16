import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css'
import LocationSVG from './icons/LocationSVG';

function Map() {
    return (
        <ReactMapGL
        mapboxAccessToken= {import.meta.env.VITE_MAPBOX_API_TOKEN}
        initialViewState={{
            longitude: -71.460891,
            latitude: 41.841987,
            zoom: 16
        }}
        style={{width: 600, height: 400}}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        >
            <NavigationControl />
            <Marker longitude={-71.460891} latitude={41.841987}>
                <LocationSVG width="2em" height="2em"/>
            </Marker>
        </ReactMapGL>
    );
}

export default Map;
