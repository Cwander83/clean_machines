import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
// import Divider from '@material-ui/core/Divider';
import DialogSale from '../components/Dialogs/DialogSale';

import DialogRental from '../components/Dialogs/DialogRental';

import picture from '../images/BGH19E.jpg';

const useStyles = makeStyles((theme) => ({
	paper: {
		width: '100%',
	},
	image: {
		width: 'auto',
		height: '100%',
		maxHeight: '350px',
	},
	informationGrid: {
		textAlign: 'left',
	},
	title: {
		padding: '0 0 10px 30px',
		textTransform: 'uppercase',
	},
	modelText: {
		padding: '0 0 0 30px',
		fontSize: '16px',
		color: 'black',
	},
	priceText: {
		padding: '5px 10px',
		marginRight: '10px',
		fontSize: '14px',
	},
	modelText2: {
		padding: '0 0 0 80px',
		textTransform: 'uppercase',
	},
	modelTitle: {
		display: 'flex',
		flexDirection: 'row',
		margin: '10px 0',
	},
	list: {
		paddingLeft: '60px',
		margin: '0',
	},
	pricesGrid: {
		color: 'black',
		marginTop: '10px',
		flexDirection: 'row',
		display: 'flex',
	},
	listItem: {
		listStyle: 'none',
	},
	button: {
		margin: '5px 0 15px 30px',
	},
	quickTitle: {
		marginRight: '30px',
	},
}));

const SingleRental = ({ product }) => {
	const [open, setOpen] = React.useState(false);
	const [open2, setOpen2] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const handleClickOpen2 = () => {
		setOpen2(true);
	};

	const handleClose2 = () => {
		setOpen2(false);
	};

	const classes = useStyles();
	return (
		<Grid container spacing={2}>
			<Grid item sm={2}>
				<Typography variant="h5"> Rent now</Typography>
				<Typography variant="h6">price per day $</Typography>
				<Typography variant="h6">2 Day special</Typography>
				<Typography variant="h6">Weekly price</Typography>
				

			</Grid>
			<Grid item xs={12} sm={4}>
				<img className={classes.image} src={picture} alt="model" />
			</Grid>

			<Grid item xs={12} sm={6} className={classes.informationGrid}>
				<Grid item xs={12}>
					<Typography className={classes.title} variant="h6">
						{!product.name ? product.model : product.name}
					</Typography>
				</Grid>

				<Grid item xs={12} className={classes.button}>
					<Button
						variant="contained"
						className={classes.priceText}
						onClick={handleClickOpen}
					>
						Buy now ${product.sale_price}
					</Button>
					<Button
						variant="contained"
						className={classes.priceText}
						onClick={handleClickOpen2}
					>
						rent now
					</Button>
				</Grid>
				<Grid item xs={12} className={classes.modelTitle}>
					<Typography
						color="textSecondary"
						variant="h6"
						className={classes.modelText}
					>
						Model
					</Typography>
					<Typography color="textSecondary" className={classes.modelText2}>
						{product.model}
					</Typography>
				</Grid>
				<Grid item xs={12} className={classes.modelTitle}>
					<Typography
						color="textSecondary"
						variant="h6"
						className={classes.modelText}
					>
						Features
					</Typography>
					<ul className={classes.list}>
						<li className={classes.listItem}>
							<Typography color="textSecondary">
								{product.feature_0 ? product.feature_0 : <></>}
							</Typography>
						</li>
						<li className={classes.listItem}>
							<Typography color="textSecondary">
								{product.feature_1 ? product.feature_1 : <></>}
							</Typography>
						</li>
						<li className={classes.listItem}>
							<Typography color="textSecondary">
								{product.feature_2 ? product.feature_2 : <></>}
							</Typography>
						</li>
						<li className={classes.listItem}>
							<Typography color="textSecondary">
								{product.feature_3 ? product.feature_3 : <></>}
							</Typography>
						</li>
						<li className={classes.listItem}>
							<Typography color="textSecondary">
								{product.feature_4 ? product.feature_4 : <></>}
							</Typography>
						</li>
						<li className={classes.listItem}>
							<Typography color="textSecondary">
								{product.feature_5 ? product.feature_5 : <></>}
							</Typography>
						</li>
						<li className={classes.listItem}>
							<Typography color="textSecondary">
								{product.feature_6 ? product.feature_6 : <></>}
							</Typography>
						</li>
						<li className={classes.listItem}>
							<Typography color="textSecondary">
								{product.feature_7 ? product.feature_7 : <></>}
							</Typography>
						</li>
						<li className={classes.listItem}>
							<Typography color="textSecondary">
								{product.feature_8 ? product.feature_8 : <></>}
							</Typography>
						</li>
						<li className={classes.listItem}>
							<Typography color="textSecondary">
								{product.feature_9 ? product.feature_9 : <></>}
							</Typography>
						</li>
						{/* <Typography color="textPrimary">
						${product.rental_price} a day
					</Typography>
					<Typography color="textPrimary">
						buy for ${product.sale_price}
					</Typography> */}
					</ul>
				</Grid>

				<Grid item xs={12} className={classes.pricesGrid}></Grid>
			</Grid>
			<DialogRental open={open2} handleClose={handleClose2} />
			<DialogSale open={open} handleClose={handleClose} />
		</Grid>
	);
};

export default SingleRental;
