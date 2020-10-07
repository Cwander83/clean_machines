import React, { useState, memo, useEffect } from 'react';

// react router
import { Switch, Route, useRouteMatch } from 'react-router-dom';

// axios
import axios from 'axios';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import ExpandMore from '@material-ui/icons/ExpandMore';

// components
import SaleProduct from './SaleProduct';
import ProductGrid from './ProductGrid';

const useStyles2 = makeStyles((theme) => ({
	li: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	nestedList: {},
	toolBar: {
		justifyContent: 'space-between',
	},
	button: {
		
	},
}));

function Categories() {
	const classes = useStyles2();
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	const view = (
		<Toolbar className={classes.toolBar}>
			<Button
				className={classes.button}
				aria-controls="vacuum-menu"
				aria-haspopup="true"
				onClick={handleClick}
			>
				Vacuums
				<ExpandMore />
			</Button>
			<Button className={classes.button}>Power Sweepers</Button>
			<Button className={classes.button}>Sweepers</Button>
			<Button className={classes.button}>Extractors</Button>
			<Button className={classes.button}>Air Movers</Button>
			<Button className={classes.button}>steam machines</Button>
			<Button className={classes.button}>cleaning Formulas</Button>
			<Button className={classes.button}>accessories</Button>
			<Menu
				id="vacuum-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<MenuItem onClick={handleClose}>All Vacuums</MenuItem>
				<MenuItem onClick={handleClose}>Upright</MenuItem>
				<MenuItem onClick={handleClose}>Canister</MenuItem>
				<MenuItem onClick={handleClose}>Backpack</MenuItem>
			</Menu>
		</Toolbar>
	);

	return view;
}

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100%',
		minHeight: 'calc(100vh - 30px)',
	},
	title: {
		fontFamily: 'Roboto Black',
		width: '100%',
		height: '200px',
		backgroundColor: theme.palette.primary.light,
		color: theme.palette.gold.main,
		fontSize: '60px',
		padding: 'auto',
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
	},

	media: {
		height: 350,
		backgroundSize: 'contain',
	},
	content: {},
}));

const Sales = () => {
	const classes = useStyles();

	let { path } = useRouteMatch();

	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios('/products/sales');
			setProducts(result.data);
		};
		fetchData();
	}, []);
	console.log('sales home page');

	return (
		<Container maxWidth="xl" className={classes.root}>
			<Grid container>
				<Grid item xs={12}>
					<Typography variant="h3" className={classes.title}>
						Shop by Category
					</Typography>
					<Categories />
				</Grid>

				<Switch>
					<Route exact path={path}>
						<ProductGrid products={products} />
					</Route>
					<Route path={`${path}/:id`}>
						<Grid item xs={12}>
							<SaleProduct />
						</Grid>
					</Route>
				</Switch>
			</Grid>
		</Container>
	);
};

export default memo(Sales);
