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

const useStyles = makeStyles((theme) => ({
	title: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	divider: {
		margin: '25px 0',

		backgroundColor: 'transparent',
	},
	description: {
		textAlign: 'left',
		padding: '5px 25px',
	},
}));

const Faq = () => {
	const classes = useStyles();

	const [open, setOpen] = useState(false);

	const handleClick = () => setOpen(!open);

	return (
		<Container>
			<Grid container>
				<PageHeader title="Frequently Asked Questions" />

				<Grid item sm={1} md={2}></Grid>
				<Grid item xs={12} sm={10} md={8}>
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
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book.
						</Typography>
					</Collapse>
				</Grid>
				<Grid item sm={1} md={2}></Grid>
			</Grid>
		</Container>
	);
};

export default Faq;
