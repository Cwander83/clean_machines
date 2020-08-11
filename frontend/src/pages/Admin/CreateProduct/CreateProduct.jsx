import React from 'react';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import Grid from '@material-ui/core/Grid';


// ?  
// ?  
   // * add and change rental units to a checkbox
// ?  
// ?  
// ?  


const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	title: {
		textAlign: 'center',
	},

	button: {},
}));

const CreateProduct = () => {
	const classes = useStyles();
	const {
		// handleSubmit,
		register,
	} = useForm();

	// const onSubmit = (data) => {
	// 	fetch('/products/post', {
	// 		method: 'POST',
	// 		headers: { 'Content-Type': 'application/json' },
	// 		body: JSON.stringify(data),
	// 	})
	// 		.then((data) => console.log(data))
	// 		.catch((err) => console.log(err));
	// };

	return (
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<Typography variant="h5" component="h5" className={classes.title}>
					Create Product
				</Typography>
			</Grid>

			<Grid item xs={6}>
				<TextField variant="outlined" label="name" name="name" ref={register} />

				<TextField
					variant="outlined"
					label="model"
					name="model"
					ref={register}
				/>

				<TextField
					variant="outlined"
					label="category"
					name="category"
					ref={register}
				/>

				<TextField
					variant="outlined"
					label="sub category"
					name="sub_category"
					ref={register}
				/>

				<TextField
					variant="outlined"
					label="# of units to sale"
					name="units_sale"
					ref={register}
				/>
	
				<TextField
					variant="outlined"
					label="for rent"
					name="rent"
					ref={register}
				/>

				<TextField
					variant="outlined"
					label="rental price"
					name="rental_price"
					ref={register}
				/>

				<TextField
					variant="outlined"
					label="sale price"
					name="sale_price"
					ref={register}
				/>
			</Grid>
			<Grid item xs={6}>
				<TextField
					variant="outlined"
					label="feature"
					name="feature_0"
					ref={register}
				/>

				<TextField
					variant="outlined"
					label="feature"
					name="feature_1"
					ref={register}
				/>

				<TextField
					variant="outlined"
					label="feature"
					name="feature_2"
					ref={register}
				/>

				<TextField
					variant="outlined"
					label="feature"
					name="feature_3"
					ref={register}
				/>

				<TextField
					variant="outlined"
					label="feature"
					name="feature_4"
					ref={register}
				/>

				<TextField
					variant="outlined"
					label="feature"
					name="feature_5"
					ref={register}
				/>

				<TextField
					variant="outlined"
					label="feature"
					name="feature_6"
					ref={register}
				/>

				<TextField
					variant="outlined"
					label="feature"
					name="feature_7"
					ref={register}
				/>

				<TextField
					variant="outlined"
					label="feature"
					name="feature_8"
					ref={register}
				/>

				<TextField
					variant="outlined"
					label="feature"
					name="feature_9"
					ref={register}
				/>
			</Grid>
			<Grid container justify="center">
				<Button variant="outlined" type="submit" className={classes.title}>
					Submit
				</Button>
			</Grid>
		</Grid>
	);
};

export default CreateProduct;
