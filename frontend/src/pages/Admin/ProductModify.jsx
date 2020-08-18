import React from 'react';

import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
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
	paper: {},
}));

const ProductModify = React.memo(() => {
	const classes = useStyles();

	const [id, setId] = React.useState();
	const [rental, setRental] = React.useState(1);
	const [sale_price, setSalePrice] = React.useState();
	const [units, setUnits] = React.useState();
	const [rental_price, setRentalPrice] = React.useState();
	const [name, setName] = React.useState(null);
	const [model, setModel] = React.useState(null);
	const [category, setCategory] = React.useState(null);
	const [sub_category, setSubCategory] = React.useState(null);
	const [feature_0, set0] = React.useState(null);
	const [feature_1, set1] = React.useState(null);
	const [feature_2, set2] = React.useState(null);
	const [feature_3, set3] = React.useState(null);
	const [feature_4, set4] = React.useState(null);
	const [feature_5, set5] = React.useState(null);
	const [feature_6, set6] = React.useState(null);
	const [feature_7, set7] = React.useState(null);
	const [feature_8, set8] = React.useState(null);
	const [feature_9, set9] = React.useState(null);

	const [success, setSuccess] = React.useState(false);

	const postHandler = () => {
		axios
			.put(`/products/update/${id}`, {
				name,
				model,
				category,
				sub_category,
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
				sale_price,
				rental_price,
				rental,
				units,
			})
			.then((response) => {
				console.log(response);
				setSuccess(true);
				console.log('Success product created!');
			})
			.catch((err) => console.log(err));
	};

	console.log(success);
	return (
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<Typography variant="h5" component="h5" className={classes.title}>
					Modify Product
				</Typography>
			</Grid>
			{!success ? (
				<>
					<Grid container spacing={2} justify="center">
						<Grid item xs={12} sm={10}>
							<Paper className={classes.paper}>
								<Typography variant="h5" component="h5">
									Enter id to update
								</Typography>
								<TextField
									name="id"
									className={classes.input}
									variant="standard"
									label="Product Id"
									//value={id}
									onChange={(e) => setId(e.target.value)}
								/>
								<FormControl className={classes.input}>
									<InputLabel shrink id="label">
										still for rent
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
							</Paper>
						</Grid>
						<Grid item xs={12} sm={10}>
							<TextField
								className={classes.input}
								variant="standard"
								label="name"
								name="name"
								onChange={(e) => setName(e.target.value)}
							/>
							<TextField
								className={classes.input}
								variant="standard"
								label="model"
								name="model"
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
					<Typography variant="h2">Success! Product {id} updated</Typography>
					<Button variant="contained" onClick={() => setSuccess(false)}>
						add more
					</Button>
				</Grid>
			)}
		</Grid>
	);
});

export default ProductModify;
