import React, { useState, memo } from 'react';

import { useForm, Controller } from 'react-hook-form';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	title: {
		textAlign: 'center',
	},

	button: {},
	form: {
		width: '100%',
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: '100%',
		},
	},
}));

const CreateProduct = memo(() => {
	const classes = useStyles();

	const [rental, setRental] = useState(false);
	// const [sale_price, setSalePrice] = useState();
	// const [units, setUnits] = useState();
	// const [rental_day, setDay] = useState();
	// const [name, setName] = useState();
	// const [model, setModel] = useState();
	// const [category, setCategory] = useState();
	// const [sub_category, setSubCategory] = useState();
	// const [rental_two_day, setTwoDay] = useState();
	// const [rental_week, setWeek] = useState();
	// const [short_description, setDesc] = useState();
	// const [cord, setCord] = useState();
	// const [weight, setWeight] = useState();
	// const [height, setHeight] = useState();
	// const [width, setWidth] = useState();
	// const [tools, setTools] = useState();
	// const [motor, setMotor] = useState();
	// const [sound_pressure, setSound] = useState();
	// const [container_capacity, setContainer] = useState();
	// const [tank_capacity, setTank] = useState();
	// const [speed, setSpeed] = useSpeed();
	// const [size, setSize] = useState();
	// const [feature_1, set1] = useState();
	// const [feature_2, set2] = useState();
	// const [feature_3, set3] = useState();
	// const [feature_4, set4] = useState();
	// const [feature_5, set5] = useState();

	const [success, setSuccess] = useState(false);

	const { register, handleSubmit, errors, control } = useForm();
	const onSubmit = (data) => {
		console.log(data, rental);
		// const data = {
		// 	name,
		// 	model,
		// 	category,
		// 	sub_category,
		// 	sale_price,
		// 	units,
		// 	rental_day,
		// 	rental_two_day,
		// 	rental_week,
		// 	short_description,
		// 	cord,
		// 	weight,
		// 	height,
		// 	width,
		// 	tools,
		// 	motor,
		// 	sound_pressure,
		// 	container_capacity,
		// 	tank_capacity,
		// 	speed,
		// 	size,
		// 	feature_1,
		// 	feature_2,
		// 	feature_3,
		// 	feature_4,
		// 	feature_5,
		// 	rental,
		// };
		// fetch('/products', {
		// 	method: 'POST',
		// 	headers: { 'Content-Type': 'application/json' },
		// 	body: JSON.stringify(data),
		// })
		// 	.then(() => {
		// 		setSuccess(true);
		// 		console.log('Success product created!');
		// 	})
		// 	.catch((err) => console.log(err));
	};

	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Typography variant="h5" component="h5" className={classes.title}>
					Create Product
				</Typography>
			</Grid>
			{!success ? (
				<>
					<form
						className={classes.form}
						noValidate
						onSubmit={handleSubmit(onSubmit)}
					>
						<Grid container spacing={2} justify="center">
							<Grid item xs={12} sm={12}>
								<Typography variant="h6">Main description</Typography>
							</Grid>

							<Grid item xs={12} sm={5}>
								<TextField
									variant="standard"
									required
									label="name"
									name="name"
									error={!!errors.name}
									inputRef={register({ required: true })}
								/>
							</Grid>
							<Grid item xs={12} sm={5}>
								<TextField
									name="model"
									variant="standard"
									label="model"
									error={!!errors.model}
									inputRef={register({ required: true })}
								/>
							</Grid>

							<Grid item xs={12} sm={10}>
								<TextField
									label="short description"
									name="short_description"
									error={!!errors.short_description}
									inputRef={register({ required: true })}
									required
								/>
							</Grid>
							<Grid item xs={12} sm={5}>
								<TextField
									name="category"
									variant="standard"
									label="category"
									error={!!errors.category}
									inputRef={register({ required: true })}
								/>
							</Grid>
							<Grid item xs={12} sm={5}>
								<TextField
									name="sub_category"
									variant="standard"
									label="sub category"
									inputRef={register}
								/>
							</Grid>
							<Grid item xs={12} sm={12}>
								<Typography variant="h6">Rental information</Typography>
							</Grid>
							<Grid item xs={12} sm={3}>
								<TextField
									name="rental_day"
									variant="standard"
									label="rental price 1 day"
									inputRef={register}
								/>
							</Grid>
							<Grid item xs={12} sm={3}>
								<TextField
									name="rental_two_day"
									variant="standard"
									label="rental price 2 days"
									inputRef={register}
								/>
							</Grid>
							<Grid item xs={12} sm={3}>
								<TextField
									name="rental_week"
									variant="standard"
									label="rental price week"
									inputRef={register}
								/>
							</Grid>
							<Grid item xs={12} sm={2}>
								<FormControlLabel
									control={
										<Controller
											as={Checkbox}
											control={control}
											name="rental"
											color="primary"
											defaultValue={false}
											onChange={(e) => setRental(e.target.checked)}
										/>
									}
									label="for rent"
								/>
							</Grid>

							<Grid item xs={12} sm={5}>
								<TextField
									name="sale_price"
									variant="standard"
									label="sale price"
									required
									error={!!errors.sale_price}
									inputRef={register({ required: true })}
								/>
							</Grid>
							<Grid item xs={12} sm={10}>
								<TextField
									name="units"
									variant="standard"
									label="# of units to sale"
									inputRef={register}
								/>
							</Grid>
							<Grid item xs={12} sm={10}>
								<TextField
									name="feature_1"
									className={classes.featureInput}
									variant="standard"
									label="feature 1"
									inputRef={register}
								/>
							</Grid>
							<Grid item xs={12} sm={10}>
								<TextField
									name="feature_2"
									className={classes.featureInput}
									variant="standard"
									label="feature 2"
									inputRef={register}
								/>
							</Grid>
							<Grid item xs={12} sm={10}>
								<TextField
									name="feature_3"
									className={classes.featureInput}
									variant="standard"
									label="feature 3"
									inputRef={register}
								/>
							</Grid>
							<Grid item xs={12} sm={10}>
								<TextField
									name="feature_4"
									className={classes.featureInput}
									variant="standard"
									label="feature 4"
									inputRef={register}
								/>
							</Grid>
							<Grid item xs={12} sm={10}>
								<TextField
									name="feature_5"
									className={classes.featureInput}
									variant="standard"
									label="feature 5"
									inputRef={register}
								/>
							</Grid>
							<Grid item xs={12} sm={10}>
								<TextField
									name="tools"
									className={classes.featureInput}
									variant="standard"
									label="tools"
									inputRef={register}
								/>
							</Grid>

							<Grid item xs={12}>
								<Button
									variant="outlined"
									type="submit"
									className={classes.title}
								>
									Submit
								</Button>
							</Grid>
						</Grid>
					</form>
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
