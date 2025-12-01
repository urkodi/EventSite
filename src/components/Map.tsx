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

interface RadiusMapProps {
	initialCenter?: [number, number];
	initialRadius?: number;
	showSearch?: boolean;
	showRadiusControl?: boolean;
	className?: string;
}

function RadiusMap({ 
	initialCenter = [-93.6248586, 41.58527859], 
	initialRadius = 1,
	showSearch = true,
	showRadiusControl = true,
	className = "w-96 h-96"
}: RadiusMapProps) {
	const mapContainerRef = useRef<HTMLDivElement>(null);
	const mapRef = useRef<mapboxgl.Map | null>(null);
	const markerRef = useRef<mapboxgl.Marker | null>(null);
	const [radiusMiles, setRadiusMiles] = useState(initialRadius);
	const [center, setCenter] = useState<[number, number]>(initialCenter);
	const [searchQuery, setSearchQuery] = useState('');
	const [isSearching, setIsSearching] = useState(false);
	const [searchError, setSearchError] = useState('');
		
	useEffect(() => {
		if (!mapContainerRef.current) return;

		const map = new mapboxgl.Map({ 
			container: mapContainerRef.current,
			style: "mapbox://styles/mapbox/streets-v11",
			center,
			zoom: 11,
		});

		mapRef.current = map;

		// Add marker at center
		const marker = new mapboxgl.Marker({
			color: '#4C9DB0'
		})
			.setLngLat(center)
			.addTo(map);
		
		markerRef.current = marker;

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
					"fill-opacity": 0.4,
				},
			});

			map.addLayer({
				id: "circle-outline",
				type: "line",
				source: "circle-source",
				paint: {
					"line-color": "#4C9DB0",
					"line-width": 3,
				},
			});
		});

		return () => {
			marker.remove();
			map.remove();
		};
	}, []);

	useEffect(() => {
		const map = mapRef.current;
		if (!map?.getSource("circle-source")) return;

		const radiusInMeters = radiusMiles * 1609.34;
		const circle = createGeoJSONCircle(center, radiusInMeters);

		(map.getSource("circle-source") as mapboxgl.GeoJSONSource).setData(circle);
		
		// Update marker position
		if (markerRef.current) {
			markerRef.current.setLngLat(center);
		}
		
		// Fly to new center
		map.flyTo({
			center,
			zoom: 11,
			duration: 1000
		});
	}, [radiusMiles, center]);

	const handleSearch = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!searchQuery.trim()) return;

		setIsSearching(true);
		setSearchError('');

		try {
			const response = await fetch(
				`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(searchQuery)}.json?access_token=${mapboxgl.accessToken}&limit=1`
			);

			if (!response.ok) throw new Error('Search failed');

			const data = await response.json();

			if (data.features && data.features.length > 0) {
				const [lng, lat] = data.features[0].center;
				setCenter([lng, lat]);
				setSearchError('');
			} else {
				setSearchError('Location not found. Try a different search.');
			}
		} catch (error) {
			console.error('Geocoding error:', error);
			setSearchError('Error searching location. Please try again.');
		} finally {
			setIsSearching(false);
		}
	};

	return (
		<div className={`relative ${className}`}>
			{/* Search Bar */}
			{showSearch && (
				<div className="absolute z-10 top-2 left-2 right-2">
					<form onSubmit={handleSearch} className="flex gap-2">
						<div className="flex-1 relative">
							<svg 
								className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-lightermoonstone" 
								fill="currentColor" 
								viewBox="0 0 20 20"
							>
								<path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
							</svg>
							<input
								type="text"
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								placeholder="Search for a location..."
								disabled={isSearching}
								className="w-full pl-10 pr-4 py-2 border border-lightermoonstone rounded-lg bg-white text-moonstone outline-none focus:border-moonstone transition shadow-md"
							/>
						</div>
						<button
							type="submit"
							disabled={isSearching}
							className="px-4 py-2 bg-moonstone text-white rounded-lg hover:bg-lightermoonstone transition shadow-md flex items-center gap-2 disabled:opacity-50"
						>
							{isSearching ? (
								<span className="text-sm">Searching...</span>
							) : (
								<>
									<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
										<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
									</svg>
									<span className="text-sm">Search</span>
								</>
							)}
						</button>
					</form>
					{searchError && (
						<div className="mt-2 bg-red-100 border border-red-400 text-red-700 px-3 py-2 rounded-lg text-sm">
							{searchError}
						</div>
					)}
				</div>
			)}

			{/* Radius Control */}
			{showRadiusControl && (
				<div className="absolute z-10 bottom-2 left-2 bg-white rounded-lg shadow-lg p-3 text-sm border border-lightermoonstone">
					<label htmlFor="radius" className="block mb-2 font-semibold text-moonstone">
						Radius: {radiusMiles.toFixed(1)} miles
					</label>
					<input
						id="radius"
						type="range"
						min="1"
						max="50"
						step="0.5"
						value={radiusMiles}
						onChange={(e) => setRadiusMiles(parseFloat(e.target.value))}
						className="w-40 accent-moonstone"
					/>
				</div>
			)}

			<div ref={mapContainerRef} className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl" />
		</div>
	);
};

export default RadiusMap;