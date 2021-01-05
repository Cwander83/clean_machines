import React from 'react';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// components
import PageHeader from '../../components/PageHeader';
import Container from '../../containers/Container';

const useStyles = makeStyles((theme) => ({
	root: {
		marginBottom: '40px',
	},
	title: {
		fontSize: '24px',
		marginTop: '30px',
		marginBottom: '10px',
		[theme.breakpoints.down('sm')]: {
			fontSize: '20px',
		},
	},
	video: {
		width: 1000,
		height: 536,

		[theme.breakpoints.down('md')]: {
			width: 500,
			height: 268,
		},
		[theme.breakpoints.down('sm')]: {
			width: 500,
			height: 288,
		},
		[theme.breakpoints.down('xs')]: {
			width: 270,
			height: 154,
		},
	},
}));

const Videos = () => {
	const classes = useStyles();

	return (
		<Container>
			<Grid container className={classes.root}>
				<PageHeader title="Videos" />
				<Grid container>
					<Grid item xs={12}>
						<Typography variant="h4" className={classes.title}>
							This vs That Bissell BigGreen Commercial BG10 Extractor
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<iframe
							className={classes.video}
							src="https://www.youtube.com/embed/4t2N5J4CluE"
							title="Clean Machine Rental and Sales - This vs That Bissell BigGreen Commercial BG10 Extractor"
							frameBorder="1"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</Grid>
				</Grid>
				<Grid container>
					<Grid item xs={12}>
						<Typography variant="h4" className={classes.title}>
							Bissell Big Green Commercial BG10 Upright Deep Cleaner
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<iframe
							className={classes.video}
							src="https://www.youtube.com/embed/3bkz0mlzFbM"
							title="Clean Machine Rental and Sales - Bissell Big Green Commercial BG10 Upright Deep Cleaner"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</Grid>
				</Grid>
				<Grid container>
					<Grid item xs={12}>
						<Typography variant="h4" className={classes.title}>
							How to: Use BG10 Extractor Accessory
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<iframe
							className={classes.video}
							src="https://www.youtube.com/embed/dvRcKAp4oQA"
							title="Clean Machine Rental and Sales - How to: Use BG10 Extractor Accessory"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</Grid>
				</Grid>
				<Grid container>
					<Grid item xs={12}>
						<Typography variant="h4" className={classes.title}>
							Carpet Cleaning with the Bissell Big Green Clean Machine!
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<iframe
							className={classes.video}
							src="https://www.youtube.com/embed/xVgdhfC_6gM"
							title="Clean Machine Rental and Sales - Carpet Cleaning with the Bissell Big Green Clean Machine!"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Videos;
