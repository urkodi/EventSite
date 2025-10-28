import mapboxgl from 'mapbox-gl';
import type { FeatureCollection} from "geojson";
import { useEffect, useRef, useState } from 'react';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_API_TOKEN;

function createGeoJSONCircle(center: [number, number], radiusInMeters: number, points = 64): FeatureCollection {
	const coords = {
		latitude: center[1],
		longitude: center[0],
	};
	
	const km = radiusInMeters / 1000;
	const ret: [number, number][] = [];

	const distanceX = km / (111.320 * Math.cos((coords.latitude * Math.PI) / 180));
	const distanceY = km / 110.574;

	for (let i = 0; i < points; i++) {
		const theta = (i / points) * (2 * Math.PI);
		const x = distanceX * Math.cos(theta);
		const y = distanceY * Math.sin(theta);
		ret.push([coords.longitude + x, coords.latitude + y]);
	}
	ret.push(ret[0]); 

	return {
		type: "FeatureCollection",
		features: [
			{
				type: "Feature",
				geometry: {
						type: "Polygon",
						coordinates: [ret],
				},
				properties: null
			},
		],
	};
}

function RadiusMap() {
	const mapContainerRef = useRef<HTMLDivElement>(null);
	const mapRef = useRef<mapboxgl.Map | null>(null);
	const [radiusMiles, setRadiusMiles] = useState(1);
	const center: [number, number] = [-93.6248586, 41.58527859];
		
	useEffect(() => {
		if (!mapContainerRef.current) return;

		const map = new mapboxgl.Map({ 
			container: mapContainerRef.current,
			style: "mapbox://styles/mapbox/streets-v11",
			center,
			zoom: 11,
		});

		mapRef.current = map;

		map.on("load", () => {
			const radiusInMeters = radiusMiles * 1609.34;
			const circle = createGeoJSONCircle(center, radiusInMeters);

			map.addSource("circle-source", {
				type: "geojson",
				data: circle,
			});

			map.addLayer({
				id: "circle-fill",
				type: "fill",
				source: "circle-source",
				paint: {
					"fill-color": "#9BCED5",
					"fill-opacity": 0.8,
				},
			});

			map.addLayer({
				id: "circle-outline",
				type: "line",
				source: "circle-source",
				paint: {
					"line-color": "#4C9DB0",
					"line-width": 2,
				},
			});
		});

		return () => map.remove();
	}, []);

	useEffect(() => {
		const map = mapRef.current;
		if (!map?.getSource("circle-source")) return;

		const radiusInMeters = radiusMiles * 1609.34;
		const circle = createGeoJSONCircle(center, radiusInMeters);

		(map.getSource("circle-source") as mapboxgl.GeoJSONSource).setData(circle);
	}, [radiusMiles]);

	return (
		<div className="w-96 h-96 relative">
			<div className="absolute z-10 top-2 left-2 bg-white rounded-lg shadow p-3 text-sm">
				<label htmlFor="radius" className="block mb-1 font-semibold">
					Radius: {radiusMiles.toFixed(1)} miles
				</label>
				<input
					id="radius"
					type="range"
					min="5"
					max="250"
					step="1"
					value={radiusMiles}
					onChange={(e) => setRadiusMiles(parseFloat(e.target.value))}
					className="w-40"
				/>
			</div>
			<div ref={mapContainerRef} className="relative w-full h-full rounded-2xl overflow-hidden" />
		</div>
	);
};

export default RadiusMap;
