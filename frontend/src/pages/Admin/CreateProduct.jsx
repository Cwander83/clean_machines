import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	title: {
		textAlign: 'center',
	},
	featureInput: {
		width: '100%',
		padding: theme.spacing(2),
	},
	input: {
		padding: theme.spacing(2),
	},
	button: {},
}));

const CreateProduct = React.memo(() => {
	const classes = useStyles();

	const [rental, setRental] = React.useState(1);
	const [sale_price, setSalePrice] = React.useState();
	const [units, setUnits] = React.useState();
	const [rental_price, setRentalPrice] = React.useState();
	const [name, setName] = React.useState();
	const [model, setModel] = React.useState();
	const [category, setCategory] = React.useState();
	const [sub_category, setSubCategory] = React.useState();
	const [feature_0, set0] = React.useState();
	const [feature_1, set1] = React.useState();
	const [feature_2, set2] = React.useState();
	const [feature_3, set3] = React.useState();
	const [feature_4, set4] = React.useState();
	const [feature_5, set5] = React.useState();
	const [feature_6, set6] = React.useState();
	const [feature_7, set7] = React.useState();
	const [feature_8, set8] = React.useState();
	const [feature_9, set9] = React.useState();

	const [success, setSuccess] = React.useState(false);

	const postHandler = () => {
		const data = {
			name,
			model,
			category,
			sub_category,
			sale_price,
			units,
			rental_price,
			feature_0,
			feature_1,
			feature_2,
			feature_3,
			feature_4,
			feature_5,
			feature_6,
			feature_7,
			feature_8,
			feature_9,
			rental,
		};
		fetch('/products', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		})
			.then(() => {
				setSuccess(true);
				console.log('Success product created!');
			})
			.catch((err) => console.log(err));
	};

	return (
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<Typography variant="h5" component="h5" className={classes.title}>
					Create Product
				</Typography>
			</Grid>
			{!success ? (
				<>
					<Grid container spacing={2} justify="center">
						<Grid item xs={12} sm={10}>
							<TextField
								className={classes.input}
								variant="standard"
								required
								label="name"
								name="name"
								onChange={(e) => setName(e.target.value)}
							/>

							<TextField
								name="model"
								className={classes.input}
								variant="standard"
								label="model"
								onChange={(e) => setModel(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12} sm={10}>
							<TextField
								name="category"
								className={classes.input}
								variant="standard"
								label="category"
								onChange={(e) => setCategory(e.target.value)}
							/>

							<TextField
								name="sub_category"
								className={classes.input}
								variant="standard"
								label="sub category"
								onChange={(e) => setSubCategory(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12} sm={10}>
							<TextField
								name="rental_price"
								className={classes.input}
								variant="standard"
								label="rental price"
								onChange={(e) => setRentalPrice(e.target.value)}
							/>

							<TextField
								name="sale_price"
								className={classes.input}
								variant="standard"
								label="sale price"
								onChange={(e) => setSalePrice(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12} sm={10}>
							<TextField
								name="units"
								className={classes.input}
								variant="standard"
								label="# of units to sale"
								onChange={(e) => setUnits(e.target.value)}
							/>
							<FormControl className={classes.input}>
								<InputLabel shrink id="label">
									for rent
								</InputLabel>
								<Select
									name="rental"
									labelId="label"
									value={rental}
									onChange={(e) => setRental(e.target.value)}
								>
									<MenuItem value={1}>YES</MenuItem>
									<MenuItem value={0}>NO</MenuItem>
								</Select>
							</FormControl>
						</Grid>
						<Grid item xs={12} sm={10}>
							<TextField
								name="feature_0"
								className={classes.featureInput}
								variant="standard"
								label="feature"
								onChange={(e) => set0(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12} sm={10}>
							<TextField
								name="feature_1"
								className={classes.featureInput}
								variant="standard"
								label="feature"
								onChange={(e) => set1(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12} sm={10}>
							<TextField
								name="feature_2"
								className={classes.featureInput}
								variant="standard"
								label="feature"
								onChange={(e) => set2(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12} sm={10}>
							<TextField
								name="feature_3"
								className={classes.featureInput}
								variant="standard"
								label="feature"
								onChange={(e) => set3(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12} sm={10}>
							<TextField
								name="feature_4"
								className={classes.featureInput}
								variant="standard"
								label="feature"
								onChange={(e) => set4(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12} sm={10}>
							<TextField
								name="feature_5"
								className={classes.featureInput}
								variant="standard"
								label="feature"
								onChange={(e) => set5(e.target.value)}
							/>{' '}
						</Grid>
						<Grid item xs={12} sm={10}>
							<TextField
								name="feature_6"
								className={classes.featureInput}
								variant="standard"
								label="feature"
								onChange={(e) => set6(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12} sm={10}>
							<TextField
								name="feature_7"
								className={classes.featureInput}
								variant="standard"
								label="feature"
								onChange={(e) => set7(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12} sm={10}>
							<TextField
								name="feature_8"
								className={classes.featureInput}
								variant="standard"
								label="feature"
								onChange={(e) => set8(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12} sm={10}>
							<TextField
								name="feature_9"
								className={classes.featureInput}
								variant="standard"
								label="feature"
								onChange={(e) => set9(e.target.value)}
							/>
						</Grid>
					</Grid>
					<Grid item xs={12}>
						<Button
							variant="outlined"
							type="submit"
							className={classes.title}
							onClick={postHandler}
						>
							Submit
						</Button>
					</Grid>
				</>
			) : (
				<Grid item xs={12}>
					<Typography variant="h2">Success! Product Created</Typography>
					<Button variant="contained" onClick={() => setSuccess(false)}>
						add more
					</Button>
				</Grid>
			)}
		</Grid>
	);
});

export default CreateProduct;
