import React from 'react';

//import { Link } from 'react-router-dom';

// axios
import axios from 'axios';

// material ui
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// images
import GoogleImage from '../images/google-maps-central-fl.jpg';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},

	image: {
		width: '100%',
	},
	button: {
		// margin: '0 auto',
		// height: '40px',
		width: '100%',
		margin: '10px 0 0 0',
		backgroundColor: theme.palette.primary.light,
		color: 'white',
	},
	disabled: {
		backgroundColor: 'white',
		color: 'black',
		borderColor: theme.palette.primary.light,
	},
	textField: {
		marginTop: '10px',
		width: '100%',
		// marginLeft: 'auto',
		// marginRight: 'auto',
	},
}));

const LocationChecker = () => {
	const classes = useStyles();
	const [distance, setDistance] = React.useState();
	const [zipcode, setZipCode] = React.useState('');
	const [error, setError] = React.useState();

	//const location = '26 japonica dr, orlando, fl 32807';

	const getCoords = async () => {
		let search = `${zipcode}`;
		await axios
			.get(`/api/location/search/`, { params: zipcode })
			.then((data) => {
				console.log('data: ', data);
				// let client = {
				// 	lat: data.results[0].locations[0].latLng.lat,
				// 	lng: data.results[0].locations[0].latLng.lng,
				// };
				// getDistanceFromLatLonInKm(client);
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

	console.log(zipcode);
	return (
		<Grid container spacing={2} direction="row">
			<Grid item xs={12} sm={6}>
				<img src={GoogleImage} alt="map" className={classes.image} />
			</Grid>

			<Grid item xs={12} sm={6}>
				<Grid container spacing={2} direction="row">
					<Grid item xs={1}></Grid>
					<Grid item xs={10}>
						<TextField
							className={classes.textField}
							name="line"
							variant="standard"
							placeholder="32804"
							label="Zipcode"
							autoFocus={true}
							onChange={(e) => setZipCode({ zipcode: e.target.value })}
						/>
					</Grid>
					<Grid item xs={1}></Grid>
					<Grid item xs={1}></Grid>
					<Grid item xs={10}>
						<Button
							className={classes.button}
							classes={{
								disabled: classes.disabled,
							}}
							variant="contained"
							disabled={zipcode === ''}
							onClick={getCoords}
						>
							Check address
						</Button>
					</Grid>
					<Grid item xs={1}></Grid>
					<Grid item xs={1}></Grid>
					<Grid item xs={10}>
						<Typography variant="h6">
							{!error
								? distance
									? distance <= 60
										? 'Congratulations, we service your area'
										: "Sorry, we don't service your area."
									: null
								: 'Sorry, Please enter valid 5-Digit Zipcode.'}
						</Typography>
					</Grid>
					<Grid item xs={1}></Grid>
				</Grid>
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
