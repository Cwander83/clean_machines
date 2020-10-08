import React, { useContext } from 'react';

// react router
import { Link } from 'react-router-dom';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// icons
import canister from '../../images/icons/canister.jpg';
import backpack from '../../images/icons/backpack.jpg';
import airmover from '../../images/icons/airmover.jpg';
import extractor from '../../images/icons/extractors.jpg';
import extrawide from '../../images/icons/extrawide.jpg';
import floormachine from '../../images/icons/floormachine.jpg';
import formula from '../../images/icons/formula.jpg';
import powersweeper from '../../images/icons/powersweeper.jpg';
import steammachine from '../../images/icons/steammachine.jpg';
import sweeper from '../../images/icons/sweeper.jpg';
import upright from '../../images/icons/upright.jpg';
import accessories from '../../images/icons/accessories.jpg';
import Divider from '@material-ui/core/Divider';

// context api
import { SalesContext } from '../../context/sales-context';

const useStyles = makeStyles((theme) => ({
	button: {
		display: 'flex',
		MarginLeft: '40px',
		justifyContent: 'flex-start',
		'&:hover': {
			backgroundColor: 'transparent',
		},
		'.MuiTouchRipple-child': {
			backgroundColor: theme.palette.primary.light,
		},
	},
	label: {
		transition: 'all .2s ease-in-out',
		'&:hover': {
			textDecoration: 'underline',
			textDecorationColor: theme.palette.gold.main,
			transform: 'scale(1.1)',
		},
	},
	grid: {},
	image: {
		height: '45px',
		width: 'auto',
	},

	imageBox: {
		width: '55px',
	},
	text: {
		fontSize: '14px',
		letterSpacing: '.09em',
		alignSelf: 'flex-end',
		marginBottom: '10px',
		textTransform: 'capitalize',
	},
	sectionTitle: {
		textAlign: 'left',
		paddingLeft: '60px',
		textTransform: 'uppercase',
	},
}));
const SalesBox = () => {
	const classes = useStyles();

	let { setCategory } = useContext(SalesContext);

	const vacuums = [
		{
			title: 'Upright Vacuums',
			image: upright,
			path: '/sales',
			value: 'upright',
		},
		{
			title: 'Canister Vacuums',
			image: canister,
			path: '/sales',
			value: 'canister',
		},
		{
			title: 'Backpack Vacuums',
			image: backpack,
			path: '/sales',
			value: 'backpack',
		},
		{
			title: 'Extra-wide Vacuums',
			image: extrawide,
			path: '/sales',
			value: 'extra-wide',
		},
	];

	return (
		<Grid container direction="row" justify="flex-start" spacing={2}>
			<Grid item xs={12} sm={6}>
				<Typography variant="h6" className={classes.sectionTitle}>
					Vacuums
				</Typography>
				<Divider />

				{vacuums.map((link, i) => {
					return (
						<Grid item xs={12} className={classes.grid} key={i}>
							<Button
								disableFocusRipple
								disableRipple
								className={classes.button}
								classes={{
									label: classes.label,
								}}
								component={Link}
								to={link.path}
								onClick={() => setCategory(`${link.value}`)}
							>
								<Box className={classes.imageBox}>
									<img
										src={link.image}
										alt={link.title}
										className={classes.image}
									/>
								</Box>
								<Typography variant="h6" className={classes.text}>
									{link.title}
								</Typography>
							</Button>
						</Grid>
					);
				})}
				<Grid item xs={12}>
					<Typography variant="h6" className={classes.sectionTitle}>
						air movers
					</Typography>
					<Divider />

					<Grid item xs={12} className={classes.grid}>
						<Button
							disableFocusRipple
							disableRipple
							className={classes.button}
							classes={{
								label: classes.label,
							}}
							component={Link}
							to="/sales"
							onClick={() => setCategory('air-mover')}
						>
							<Box className={classes.imageBox}>
								<img
									src={airmover}
									alt="bissell air mover"
									className={classes.image}
								/>
							</Box>
							<Typography variant="h6" className={classes.text}>
								Air Movers
							</Typography>
						</Button>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="h6" className={classes.sectionTitle}>
						steam machines
					</Typography>
					<Divider />
					<Grid item xs={12} className={classes.grid}>
						<Button
							disableFocusRipple
							disableRipple
							className={classes.button}
							classes={{
								label: classes.label,
							}}
							component={Link}
							to="/sales"
							onClick={() => setCategory('steam-machine')}
						>
							<Box className={classes.imageBox}>
								<img
									src={steammachine}
									alt="bissell steam machine"
									className={classes.image}
								/>
							</Box>
							<Typography variant="h6" className={classes.text}>
								Steam machines
							</Typography>
						</Button>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={12} sm={6}>
				<Grid item xs={12}>
					<Typography variant="h6" className={classes.sectionTitle}>
						extractors
					</Typography>
					<Divider />

					<Grid item xs={12} className={classes.grid}>
						<Button
							disableFocusRipple
							disableRipple
							className={classes.button}
							classes={{
								label: classes.label,
							}}
							component={Link}
							to="/sales"
							onClick={() => setCategory('extractor')}
						>
							<Box className={classes.imageBox}>
								<img
									src={extractor}
									alt="bissell extractor"
									className={classes.image}
								/>
							</Box>
							<Typography variant="h6" className={classes.text}>
								Extractors
							</Typography>
						</Button>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="h6" className={classes.sectionTitle}>
						sweepers
					</Typography>
					<Divider />

					<Grid item xs={12} className={classes.grid}>
						<Button
							disableFocusRipple
							disableRipple
							className={classes.button}
							classes={{
								label: classes.label,
							}}
							component={Link}
							to="/sales"
							onClick={() => setCategory('power-sweeper')}
						>
							<Box className={classes.imageBox}>
								<img
									src={powersweeper}
									alt="bissell power sweeper"
									className={classes.image}
								/>
							</Box>
							<Typography variant="h6" className={classes.text}>
								Power sweepers
							</Typography>
						</Button>
					</Grid>
					<Grid item xs={12} className={classes.grid}>
						<Button
							disableFocusRipple
							disableRipple
							className={classes.button}
							classes={{
								label: classes.label,
							}}
							component={Link}
							to="/sales"
							onClick={() => setCategory('sweeper')}
						>
							<Box className={classes.imageBox}>
								<img
									src={sweeper}
									alt="bissell sweeper"
									className={classes.image}
								/>
							</Box>
							<Typography variant="h6" className={classes.text}>
								Sweepers
							</Typography>
						</Button>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="h6" className={classes.sectionTitle}>
						floor machines
					</Typography>
					<Divider />

					<Grid item xs={12} className={classes.grid}>
						<Button
							disableFocusRipple
							disableRipple
							className={classes.button}
							classes={{
								label: classes.label,
							}}
							component={Link}
							to="/sales"
							onClick={() => setCategory('floor-machine')}
						>
							<Box className={classes.imageBox}>
								<img
									src={floormachine}
									alt="bissell floor machines"
									className={classes.image}
								/>
							</Box>
							<Typography variant="h6" className={classes.text}>
								Floor Machines
							</Typography>
						</Button>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Typography variant="h6" className={classes.sectionTitle}>
						Accessories
					</Typography>
					<Divider />
					<Grid item xs={12} className={classes.grid}>
						<Button
							disableFocusRipple
							disableRipple
							className={classes.button}
							classes={{
								label: classes.label,
							}}
							component={Link}
							to="/sales"
							onClick={() => setCategory('formula')}
						>
							<Box className={classes.imageBox}>
								<img
									src={formula}
									alt="cleaning formula"
									className={classes.image}
								/>
							</Box>
							<Typography variant="h6" className={classes.text}>
								cleaning formula
							</Typography>
						</Button>
					</Grid>
					<Grid item xs={12} className={classes.grid}>
						<Button
							disableFocusRipple
							disableRipple
							className={classes.button}
							classes={{
								label: classes.label,
							}}
							component={Link}
							to="/sales"
							onClick={() => setCategory('accessories')}
						>
							<Box className={classes.imageBox}>
								<img
									src={accessories}
									alt="bissell accessories"
									className={classes.image}
								/>
							</Box>
							<Typography variant="h6" className={classes.text}>
								Accessories
							</Typography>
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default SalesBox;
