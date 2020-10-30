import React from 'react';

//import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// components
import PageHeader from '../../components/PageHeader';
import Container from '../../containers/Container';

//const useStyles = makeStyles((theme) => ({}));

const Videos = () => {
	//const classes = useStyles();

	return (
		<Container>
			<Grid container>
				<PageHeader title="Videos" />
				<Grid item xs sm={2}></Grid>
			</Grid>
		</Container>
	);
};

export default Videos;
