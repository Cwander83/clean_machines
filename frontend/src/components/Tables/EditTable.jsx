import React from 'react';

import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

//import Switch from '@material-ui/core/Switch';

import { AdminContext } from '../../context/admin-context';

const useStyles = makeStyles({
	table: {
		minWidth: 300,
	},
});

export default function EditTable() {
	const { product, setProduct, editBtn, setEditBtn } = React.useContext(
		AdminContext
	);

	const classes = useStyles();

	const postHandler = () => {
		axios
			.put(`/products/update/${product.id}`, {
				...product,
			})
			.then(() => {
				setEditBtn(false);
				console.log('Success product updated!');
			})
			.catch((err) => console.log(err));
	};

	const handleChange = (e) => {
		const value = e.target.value;
		setProduct({
			...product,
			[e.target.name]: value,
		});
	};

	return (
		<>
			{editBtn && product ? (
				<TableContainer component={Paper}>
					<Table className={classes.table} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>{product.model}</TableCell>
								<TableCell></TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableCell>ID</TableCell>
								<TableCell>{product.id}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>name</TableCell>
								<TableCell>
									<TextField
										className={classes.input}
										variant="standard"
										label="name"
										name="name"
										defaultValue={product.name}
										onChange={handleChange}
									/>
								</TableCell>
							</TableRow>

							<TableRow>
								<TableCell>model</TableCell>
								<TableCell>
									<TextField
										className={classes.input}
										variant="standard"
										label="model"
										name="model"
										defaultValue={product.model}
										onChange={handleChange}
									/>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>short description</TableCell>
								<TableCell>
									<TextField
										className={classes.input}
										variant="standard"
										label="short description"
										name="short_description"
										defaultValue={product.short_description}
										onChange={handleChange}
									/>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>category</TableCell>
								<TableCell>
									<TextField
										name="category"
										className={classes.input}
										variant="standard"
										label="category"
										defaultValue={product.category}
										onChange={handleChange}
									/>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>sub category</TableCell>
								<TableCell>
									<TextField
										name="sub_category"
										className={classes.input}
										variant="standard"
										label="sub category"
										defaultValue={product.sub_category}
										onChange={handleChange}
									/>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>sale price</TableCell>
								<TableCell>
									<TextField
										name="sale_price"
										className={classes.input}
										variant="standard"
										label="sale price"
										defaultValue={product.sale_price}
										onChange={handleChange}
									/>
								</TableCell>
							</TableRow>
						
							<TableRow>
								<TableCell>rent per day</TableCell>
								<TableCell>
									<TextField
										name="rental_day"
										label="rental day price"
										defaultValue={product.rental_day}
										onChange={handleChange}
										variant="standard"
										className={classes.input}
									/>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>rent 2 days</TableCell>
								<TableCell>
									<TextField
										defaultValue={product.rental_two_day}
										name="rental_two_day"
										label="Rental 2 day price"
										variant="standard"
										className={classes.input}
									/>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>rent a week</TableCell>
								<TableCell>
									<TextField
										name="rental_week"
										label="rental week price"
										defaultValue={product.rental_week}
										onChange={handleChange}
										variant="standard"
										className={classes.input}
									/>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>sales inventory</TableCell>
								<TableCell>
									<TextField
										name="units"
										label="# of units"
										defaultValue={product.units}
										onChange={handleChange}
										variant="standard"
										className={classes.input}
									/>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>rental</TableCell>
								<TableCell>
									<TextField
										name="rental_day"
										label="rental day price"
										defaultValue={product.rental_day}
										onChange={handleChange}
										variant="standard"
										className={classes.input}
									/>
								</TableCell>
							</TableRow>

							<TableRow>
								<TableCell>power cord</TableCell>
								<TableCell>
									<TextField
										className={classes.input}
										variant="standard"
										label="power cord"
										name="cord"
										defaultValue={product.cord}
										onChange={handleChange}
									/>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>weight</TableCell>
								<TableCell>
									<TextField
										className={classes.input}
										variant="standard"
										label="weight"
										name="weight"
										defaultValue={product.weight}
										onChange={handleChange}
									/>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>height</TableCell>
								<TableCell>
									<TextField
										className={classes.input}
										variant="standard"
										label="height"
										name="height"
										defaultValue={product.height}
										onChange={handleChange}
									/>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>width</TableCell>
								<TableCell>
									<TextField
										className={classes.input}
										variant="standard"
										label="width"
										name="width"
										defaultValue={product.width}
										onChange={handleChange}
									/>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>motor</TableCell>
								<TableCell>
									<TextField
										className={classes.input}
										variant="standard"
										label="motor"
										name="motor"
										defaultValue={product.motor}
										onChange={handleChange}
									/>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>sound pressure</TableCell>
								<TableCell>
									<TextField
										className={classes.input}
										variant="standard"
										label="sound pressure"
										name="sound_pressure"
										defaultValue={product.sound_pressure}
										onChange={handleChange}
									/>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>container capacity</TableCell>
								<TableCell>
									<TextField
										className={classes.input}
										variant="standard"
										label="container capacity"
										name="container_capacity"
										defaultValue={product.container_capacity}
										onChange={handleChange}
									/>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>tank capacity</TableCell>
								<TableCell>
									<TextField
										className={classes.input}
										variant="standard"
										label="tank capacity"
										name="tank_capacity"
										defaultValue={product.tank_capacity}
										onChange={handleChange}
									/>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>speed</TableCell>
								<TableCell>
									<TextField
										className={classes.input}
										variant="standard"
										label="speed"
										name="speed"
										defaultValue={product.speed}
										onChange={handleChange}
									/>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>size</TableCell>
								<TableCell>
									<TextField
										className={classes.input}
										variant="standard"
										label="size"
										name="size"
										defaultValue={product.size}
										onChange={handleChange}
									/>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>feature 1</TableCell>
								<TableCell>
									<TextField
										className={classes.input}
										variant="standard"
										label="feature"
										name="feature_1"
										defaultValue={product.feature_1}
										onChange={handleChange}
									/>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>feature 2</TableCell>
								<TableCell>
									<TextField
										className={classes.input}
										variant="standard"
										label="feature"
										name="feature_2"
										defaultValue={product.feature_2}
										onChange={handleChange}
									/>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>feature 3</TableCell>
								<TableCell>
									<TextField
										className={classes.input}
										variant="standard"
										label="feature"
										name="feature_3"
										defaultValue={product.feature_3}
										onChange={handleChange}
									/>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>feature 4</TableCell>
								<TableCell>
									<TextField
										className={classes.input}
										variant="standard"
										label="feature"
										name="feature_4"
										defaultValue={product.feature_4}
										onChange={handleChange}
									/>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>feature 5</TableCell>
								<TableCell>
									<TextField
										className={classes.input}
										variant="standard"
										label="feature"
										name="feature_5"
										defaultValue={product.feature_5}
										onChange={handleChange}
									/>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>
									<Button
										variant="outlined"
										className={classes.title}
										onClick={postHandler}
									>
										Submit
									</Button>
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
			) : (
				<></>
			)}
		</>
	);
}
