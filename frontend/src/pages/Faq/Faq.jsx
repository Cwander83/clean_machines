import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';

// components
import PageHeader from '../../components/PageHeader';
import Container from '../../containers/Container';

// images
import Image from '../../images/30G3-4.jpg';

const useStyles = makeStyles((theme) => ({
	title: {
		display: 'flex',
		justifyContent: 'space-between',
		cursor: 'pointer',
	},
	divider: {
		margin: '25px 0',

		backgroundColor: 'transparent',
	},
	description: {
		textAlign: 'left',
		padding: '5px 25px',
	},
	image: {
		width: '100%',
		height: '100%',
		boxShadow:
			'rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px',
		borderRadius: '4px',
		marginTop: '40px',
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	},
}));

const Faq = () => {
	const classes = useStyles();

	const [open, setOpen] = useState(false);

	const handleClick = () => setOpen(!open);

	return (
		<Container>
			<Grid container direction="row">
				<PageHeader title="Frequently Asked Questions" />
				<Grid item md={1}></Grid>

				{/* text */}
				<Grid item xs={12} md={5}>
					<Grid item sm={1} md={1}></Grid>
					<Grid item xs={12} sm={10} md={10}>
						<Divider className={classes.divider} />
						<Typography
							variant="h5"
							onClick={handleClick}
							className={classes.title}
						>
							Where do we deliver? {!open ? <ExpandMore /> : <ExpandLess />}
						</Typography>
						<Divider />
						<Collapse in={open}>
							<Typography
								gutterBottom
								variant="body1"
								className={classes.description}
							>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book.
							</Typography>
						</Collapse>
					</Grid>
					<Grid item sm={1} md={1}></Grid>
				</Grid>
				{/* image */}
				<Grid item md={5}>
					<img
						src={Image}
						className={classes.image}
						alt="Clean Machines Rental Company Bissell steam cleaner"
					/>
				</Grid>
				<Grid item md={1}></Grid>
			</Grid>
		</Container>
	);
};

export default Faq;
