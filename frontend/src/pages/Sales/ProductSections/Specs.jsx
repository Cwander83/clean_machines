import React, { useState, memo } from 'react';

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

const useStyles = makeStyles((theme) => ({
    title: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    itemTitle: {
        fontWeight: 600,
    }
}));

const Specs = ({ product }) => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	const handleClick = () => setOpen(!open);
	return (
		<Grid container>
			<Grid item xs={12}>
				<Typography variant="h5" onClick={handleClick} className={classes.title}>
					Specs {!open ? <ExpandMore /> : <ExpandLess />}
				</Typography>
				<Divider />
			</Grid>
			<Collapse in={open}>
				<Grid item xs={12}>
					{!product.weight ? (
						<Grid item xs={12} className={classes.head}>
							<Grid item xs={7} sm={8} md={7} lg={5}>
								<Typography
									align="left"
									display="inline"
									className={ClassNames(classes.itemTitle)}
									variant="body1"
								>
									Weight
								</Typography>
							
								<Typography
									gutterBottom
									display="inline"
									className={ClassNames(classes.item)}
									variant="body1"
								>
									{product.weight}
								</Typography>
							</Grid>
						</Grid>
					) : (
						<></>
					)}
                    {!product.height ? (
					<Grid item xs={12} className={classes.head}>
						<Grid item xs={7} sm={8} md={7} lg={5}>
							<Typography
								align="left"
								display="inline"
								className={ClassNames(classes.title)}
								variant="h6"
							>
								Height
							</Typography>
						</Grid>
						<Grid item xs={6} sm={4} md={5} lg>
							<Typography
								gutterBottom
								display="inline"
								className={ClassNames(classes.body1, classes.uppercase)}
								variant="body1"
							>
								{product.height}
							</Typography>
						</Grid>
					</Grid>
				) : (
					<></>
				)}
				{product.cord ? (
					<Grid item xs={12} className={classes.head}>
						<Grid item xs={7} sm={8} md={7} lg={5}>
							<Typography
								align="left"
								display="inline"
								className={ClassNames(classes.title)}
								variant="h6"
							>
								Cord
							</Typography>
						</Grid>
						<Grid item xs={6} sm={4} md={5} lg>
							<Typography
								gutterBottom
								display="inline"
								className={ClassNames(classes.body1, classes.uppercase)}
								variant="body1"
							>
								{product.cord}
							</Typography>
						</Grid>
					</Grid>
				) : (
					<></>
				)}
				</Grid>
			</Collapse>
		</Grid>
	);
};

export default memo(Specs);
