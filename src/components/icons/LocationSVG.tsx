function LocationSVG({width, height}: {width: string, height: string}) {
    return (
        <svg viewBox="0 0 24 24" width={width} height={height} fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8"/></svg>
    )
}

export default LocationSVG;