import React from 'react';

import { useParams } from 'react-router-dom';

import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({}));

const RentalsDetails = () => {
	const classes = useStyles();
	//let { url, path } = useRouteMatch();
    let { id } = useParams();
    
    console.log('id: ' + id );

	const [data, setData] = React.useState({});
	React.useEffect(() => {
		const fetchData = async () => {
			const result = await axios(`/rentals/${id}`);
			
			setData(result.data);
		};
		fetchData();
	}, []);

	console.log(data);

	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Typography variant="body1">{data.billing_name}</Typography>
			</Grid>
		</Grid>
	);
};

export default RentalsDetails;
