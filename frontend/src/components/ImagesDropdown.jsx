import React, { useState, memo, useEffect } from 'react';

// classnames
//import ClassNames from 'classnames';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';

const useStyles = makeStyles((theme) => ({
	root: {
		marginBottom: '30px',
		justifyContent: 'flex-start',
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	title: {
		display: 'flex',
		justifyContent: 'space-between',
	},

	image: {
		width: '100%',
		margin: 'auto',
	},
}));

const ImagesDropdown = ({ model, numberOfUrls }) => {
	const classes = useStyles();

	const [open, setOpen] = useState(false);

	const [numberUrls, setNumber] = useState([]);

	const handleClick = () => setOpen(!open);

	useEffect(() => {
		setNumber([...new Array(numberOfUrls)]);
	}, [model, numberOfUrls]);

	return (
		<Grid className={classes.root} container>
			<Grid item xs={12}>
				<Typography
					variant="h5"
					onClick={handleClick}
					className={classes.title}
				>
					Gallery {!open ? <ExpandMore /> : <ExpandLess />}
				</Typography>
				<Divider />
			</Grid>
			<Collapse in={open}>
				<Grid
					container
					alignContent="flex-start"
					style={{ paddingTop: '10px' }}
				>
					{model &&
						numberUrls.map((ele, index) => (
							<div key={index}>
								<img
									src={`https://products.oss.nodechef.com/${model}-${
										index + 1
									}.jpg`}
									alt={'Clean Machines Rentals - ' + model}
									className={classes.image}
								/>
							</div>
						))}
				</Grid>
			</Collapse>
		</Grid>
	);
};

export default memo(ImagesDropdown);
