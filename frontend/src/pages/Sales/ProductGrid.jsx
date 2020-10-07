import React, { useMemo, memo } from 'react';

// react router
import {
	// Switch, Route, useRouteMatch,
	Link,
} from 'react-router-dom';

// axios
//import axios from 'axios';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

// images
import picture from '../../images/BGFS5000.jpg';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100%',
		minHeight: '100vh',
	},
	title: {
		color: 'black',
	},

	media: {
		height: 350,
		backgroundSize: 'contain',
	},
	content: {
		backgroundColor: theme.palette.primary.light,
		color: 'white',
    },
    description: {
        color: theme.palette.gold.main,
        fontStyle: 'italic'
    },
    price: {
       textAlign: 'right' ,
       marginRight: '15px'
    }
}));

function productFunc(array, classes) {
	if (!array) {
		return [];
	}
	console.log(array);

	const result = array.map((product) => {
		return (
			<Grid item key={product.id} xs={12} sm={6} md={4}>
				<Card elevation={3}>
					<CardActionArea component={Link} to={`/sales/${product.id}`}>
						<CardMedia image={picture} className={classes.media} />
					</CardActionArea>
					<CardContent className={classes.content}>
						<Typography gutterBottom variant="h5">
							{product.name ? product.name : product.model}
						</Typography>
						<Typography gutterBottom variant="body1" className={classes.description}>
							{product.short_description}
						</Typography>
						<Typography variant="h6" className={classes.price}>
							$ {(product.sale_price / 100).toFixed(2)}
						</Typography>
					</CardContent>
				</Card>
			</Grid>
		);
	});

	return result;
}

const ProductGrid = ({ products }) => {
	const classes = useStyles();

	const productSection = useMemo(() => productFunc(products, classes), [
		products,
		classes,
	]);

	return (
		<Grid container spacing={3}>
			{productSection}
		</Grid>
	);
};

export default memo(ProductGrid);
