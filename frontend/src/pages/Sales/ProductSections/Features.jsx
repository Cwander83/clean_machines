import React, { useState, memo, useMemo, useEffect } from 'react';

// classnames
import ClassNames from 'classnames';

// axios
//import axios from 'axios';

// react router
//import { useParams } from 'react-router-dom';

// material ui
import { makeStyles } from '@material-ui/core/styles';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import Collapse from '@material-ui/core/Collapse';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';

// context api

// components

function featuresFunc(features, classes) {
	if (!features) return {};

	console.log('featuresFunction **');

	let feature = features;

	let section = Object.keys(feature).map((el) => (
		<React.Fragment key={el}>
			<Grid item xs={1}></Grid>
			<Grid item xs={11} className={classes.spec}>
				<Typography
					align="left"
					display="inline"
					className={ClassNames(classes.itemTitle)}
					variant="body1"
				>
					&bull;
				</Typography>

				<Typography
					gutterBottom
					display="inline"
					className={ClassNames(classes.item)}
					variant="body1"
				>
					{feature[el]}
				</Typography>
			</Grid>
		</React.Fragment>
	));
	return section;
}

const useStyles = makeStyles((theme) => ({
	title: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	itemTitle: {
		fontWeight: 600,
		marginRight: '5px',
		textTransform: 'capitalize',
	},
	spec: {
		textAlign: 'left',
	},
}));

const Features = ({ product }) => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	const [features, setFeatures] = useState({});

	const handleClick = () => setOpen(!open);

	useEffect(() => {
		let {
			short_description,
			feature_1,
			feature_2,
			feature_3,
			feature_4,
			feature_5,
			tools,
		} = product;

		setFeatures({
			short_description,
			feature_1,
			feature_2,
			feature_3,
			feature_4,
			feature_5,
			tools,
		});
	}, [product]);

	console.log('features page ***********');

	const featuresSection = useMemo(() => featuresFunc(features, classes), [
		features,
		classes,
	]);
	return (
		<Grid container justify="flex-start" style={{ marginBottom: '30px' }}>
			<Grid item xs={12}>
				<Typography
					variant="h5"
					onClick={handleClick}
					className={classes.title}
				>
					Features {!open ? <ExpandMore /> : <ExpandLess />}
				</Typography>
				<Divider />
			</Grid>
			<Collapse in={open}>
				<Grid
					container
					alignContent="flex-start"
					style={{ paddingTop: '10px' }}
				>
					{featuresSection}
				</Grid>
			</Collapse>
		</Grid>
	);
};

export default memo(Features);
