import mapboxgl from 'mapbox-gl';
import {Map, Source, Layer} from 'react-map-gl/mapbox';
import type { CircleLayerSpecification } from 'react-map-gl/mapbox-legacy';
import type { FeatureCollection, Geometry, GeoJsonProperties } from "geojson";
import { useEffect, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_API_TOKEN;

function SimpleMap({long = -93.6248586, lat = 41.58527859, controls = true}) {
	const [view, setView] = useState({
		longitude: long,
		latitude: lat,
		zoom: 11
	});

	useEffect(() => {
		setView(prev => ({
			longitude: long,
			latitude: lat,
			zoom: prev.zoom
		}));
	}, [long, lat]);
		
	return (
		<Map
			mapboxAccessToken={`${import.meta.env.VITE_MAPBOX_API_TOKEN}`}
			{...view}
      		mapStyle="mapbox://styles/mapbox/streets-v9"
			style={{
				minHeight: "16rem"
			}}
			onMove={(e) => setView(e.viewState)}
		>
		</Map>
	)
};

export function RadiusMap({long = -93.6248586, lat = 41.58527859, controls = true, radiusMiles = 10, draggable = true}) {
	const [geojson, setGeojson] = useState<FeatureCollection<Geometry, GeoJsonProperties> | null>(null);
	const [view, setView] = useState({
		longitude: long,
		latitude: lat,
		zoom: 9
	});
	const [radius, setRadius] = useState(0);

	function setCircle() {
		setGeojson({
			type: "FeatureCollection",
			features: [
				{
					type: "Feature",
					geometry: {
							type: "Point",
							coordinates: [view.longitude, view.latitude],
					},
					properties: null
				},
			],
		});
	}

	function calculateCircleRadius() {
		const radiusMeters = radiusMiles * 1609.34;
		const metersPerPixel = 40075016.686 * Math.abs(Math.cos(view.latitude * Math.PI / 180)) / Math.pow(2, view.zoom + 8);
		const radiusPixels = radiusMeters / metersPerPixel;
		
		setRadius(radiusPixels);
	}

	useEffect(() => {
		setView(prev => ({
			longitude: long,
			latitude: lat,
			zoom: prev.zoom
		}));
	}, [long, lat]);

	useEffect(() => {
		if (view.latitude && view.longitude) setCircle();
	}, [view.latitude, view.longitude]);

	useEffect(() => {
		calculateCircleRadius();
	}, [radiusMiles, view.zoom]);

	const layerStyle: CircleLayerSpecification = {
		id: "radius-cirlce",
		type: "circle",
		paint: {
			"circle-radius": radius,
			"circle-color": "#4C9DB0",
			"circle-opacity": 0.5,
			"circle-stroke-width": 3,
			"circle-stroke-color": "#4C9DB0",
		},
		source: ""
	};
		
	return (
		<Map
			mapboxAccessToken={`${import.meta.env.VITE_MAPBOX_API_TOKEN}`}
			{...view}
      		mapStyle="mapbox://styles/mapbox/streets-v9"
			style={{
				minHeight: "16rem"
			}}
			onMove={(e) => {if (draggable) setView(e.viewState)}}
			onLoad={setCircle}
		>
			{
				geojson && (
					<Source id="radius-circle" type="geojson" data={geojson}>
						<Layer {...layerStyle} />
					</Source>
				)
			}
		</Map>
	)
};

export default SimpleMap;
