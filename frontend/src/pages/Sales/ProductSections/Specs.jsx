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

function specsFunc(specs, classes) {
	if (!specs) return {};

	let spec = specs;
	return Object.keys(spec).map((el) => (
		<React.Fragment key={el}>
			<Grid item xs={1}></Grid>
			<Grid item xs={11} className={classes.spec}>
				<Typography
					align="left"
					display="inline"
					className={ClassNames(classes.itemTitle)}
					variant="body1"
				>
					{[el.replace('_', ' ')]}:
				</Typography>

				<Typography
					gutterBottom
					display="inline"
					className={ClassNames(classes.item)}
					variant="body1"
				>
					{spec[el]}
				</Typography>
			</Grid>
		</React.Fragment>
	));
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

const Specs = ({ product }) => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	const [specs, setSpecs] = useState({});

	const handleClick = () => setOpen(!open);

	useEffect(() => {
		let {
			model,
			height,
			weight,
			cord,
			sound_pressure,
			motor,
			container_capacity,
			tank_capacity,
			speed,
			size,
		} = product;
		setSpecs({
			model,
			height,
			weight,
			cord,
			sound_pressure,
			motor,
			container_capacity,
			tank_capacity,
			speed,
			size,
		});
	}, [product]);

	console.log('specs page ***********');

	const specsSection = useMemo(() => specsFunc(specs, classes), [
		specs,
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
					Specifications {!open ? <ExpandMore /> : <ExpandLess />}
				</Typography>
				<Divider />
			</Grid>
			<Collapse in={open}>
				<Grid
					container
					alignContent="flex-start"
					style={{ paddingTop: '10px' }}
				>
					{specsSection}
				</Grid>
			</Collapse>
		</Grid>
	);
};

export default memo(Specs);
