import React, { useState, memo, useEffect } from 'react';

// classnames
import ClassNames from 'classnames';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';

// context api

// components

// function featuresFunc(features, classes) {
// 	if (!features) return {};

// 	console.log('featuresFunction **');

// 	let feature = features;

// 	let section =
// 	return section;
// }

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
		} = product;

		setFeatures({
			short_description,
			feature_1,
			feature_2,
			feature_3,
			feature_4,
			feature_5,
		});
	}, [product]);

	console.log('features page ***********');

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
					{features &&
						Object.keys(features).map((el) => (
							<React.Fragment key={el}>
								{features[el] !== '' ? (
									<>
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
												{features[el]}
											</Typography>
										</Grid>
									</>
								) : null}
							</React.Fragment>
						))}
				</Grid>
			</Collapse>
		</Grid>
	);
};

export default memo(Features);
