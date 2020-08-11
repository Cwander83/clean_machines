import React from 'react';
import Button from '@material-ui/core/Button';

const LocationChecker = () => {
	const [coords, setCoords] = React.useState({
		work: { lat: 28.261759, lng: -81.618836 },
		client: { lng: null, lat: null },
		distance: 0,
	});

	const location = '26 japonica dr, orlando, fl 32807';

	const getCoords = () => {
		fetch(
			`http://www.mapquestapi.com/geocoding/v1/address?key=${process.env.REACT_APP_MAPQUEST_KEY}&location=${location}`
		)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setCoords({
					...coords,
					client: {
						lat: data.results[0].locations[0].latLng.lat,
						lng: data.results[0].locations[0].latLng.lng,
					},
				});

				console.log(JSON.stringify(data.results[0].locations[0], null, 2));
			});
	};

	function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
		var R = 3958.8;
		var dLat = deg2rad(lat2 - lat1);
		var dLon = deg2rad(lon2 - lon1);
		var a =
			Math.sin(dLat / 2) * Math.sin(dLat / 2) +
			Math.cos(deg2rad(lat1)) *
				Math.cos(deg2rad(lat2)) *
				Math.sin(dLon / 2) *
				Math.sin(dLon / 2);
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		var d = R * c;
		setCoords({ ...coords, distance: d.toFixed(2) });
	}

	function deg2rad(deg) {
		return deg * (Math.PI / 180);
	}
	return (
		<>
			<Button onClick={getCoords}>get address</Button>
			<Button
				onClick={() =>
					getDistanceFromLatLonInKm(
						coords.work.lat,
						coords.work.lng,
						coords.client.lat,
						coords.client.lng
					)
				}
			>
				get distance
			</Button>
			<p>lng: {coords.work.lng}</p>
			<p>lat: {coords.work.lat}</p>
			<p>client Lng: {coords.client.lng}</p>
			<p>client Lat: {coords.client.lat}</p>
			<p>distance: {coords.distance}</p>
		</>
	);
};

export default LocationChecker;
