import React from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	title: {
		// padding: theme.spacing(1),
	},
	searchField: {
		display: 'flex',
		alignContent: 'baseline',
		justifyContent: 'center',
	},
	gallery: {},
}));

const LocationChecker = () => {
	const classes = useStyles();
	const [distance, setDistance] = React.useState();
	const [location, setLocation] = React.useState({
		line: '',
		zipcode: null,
	});
	const [error, setError] = React.useState();

	//const location = '26 japonica dr, orlando, fl 32807';

	const getCoords = () => {
		let searchField = `${location.line} ${location.zipcode}`;
		fetch(
			`http://www.mapquestapi.com/geocoding/v1/address?key=${process.env.REACT_APP_MAPQUEST_KEY}&location=${searchField}`
		)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				let client = {
					lat: data.results[0].locations[0].latLng.lat,
					lng: data.results[0].locations[0].latLng.lng,
				};
				getDistanceFromLatLonInKm(client);
			})

			.catch((err) => {
				setError(err);
				console.error(err);
			});
	};

	const getDistanceFromLatLonInKm = ({ lat, lng }) => {
		let lat1 = 28.261759;
		let lon1 = -81.618836;

		let lat2 = lat;
		let lon2 = lng;
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
		setDistance(d.toFixed(2));
	};

	function deg2rad(deg) {
		return deg * (Math.PI / 180);
	}

	console.log(distance);
	return (
		<Grid container spacing={2} className={classes.body} component={Paper}>
			{/* <Grid item xs={12} className={classes.title}>
				<Typography variant="h6">
					STEP 1. Check if you're service area
				</Typography>
			</Grid> */}
			<Grid item sm></Grid>
			<Grid item xs={12} sm={6} className={classes.searchField}>
				{/* <TextField
					name="line"
					label="Street Address"
					variant="standard"
					onChange={(e) => setLocation({ ...location, line: e.target.value })}
				/> */}
				<TextField
					name="line"
					variant="standard"
					label="Zipcode"
					onChange={(e) =>
						setLocation({ ...location, zipcode: e.target.value })
					}
				/>
				<Button
					variant="outlined"
					disabled={location.line === '' && location.zipcode === null}
					onClick={async () => {
						getCoords();
					}}
				>
					Check address
				</Button>
			</Grid>
			<Grid item sm>
				<Typography variant="h6">
					{!error
						? distance
							? distance <= 60
								? 'Yes we service your area'
								: "Sorry, we don't service your area"
							: null
						: 'Sorry didnt get that'}
				</Typography>
			</Grid>
			{/* <p>lng: {coords.work.lng}</p>
			<p>lat: {coords.work.lat}</p>
			<p>client Lng: {coords.client.lng}</p>
			<p>client Lat: {coords.client.lat}</p>
			<p>distance: {coords.distance}</p> */}
		</Grid>
	);
};

export default LocationChecker;
