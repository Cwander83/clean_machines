import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { AdminContext } from '../../../context/admin-context';

const useStyles = makeStyles({
	table: {
		minWidth: 300,
	},
});

export default function ProductTable() {
	const { product } = React.useContext(AdminContext);
	const classes = useStyles();

	return (
		<>
			{product ? (
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
								<TableCell>{product.name}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>model</TableCell>
								<TableCell>{product.model}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>category</TableCell>
								<TableCell>{product.category}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>sub category</TableCell>
								<TableCell>{product.sub_category}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>sale price</TableCell>
								<TableCell>{product.sale_price}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>rent per day</TableCell>
								<TableCell>{product.rental_day}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>rent 2 days</TableCell>
								<TableCell>{product.rental_two_day}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>rent a week</TableCell>
								<TableCell>{product.rental_week}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>inventory</TableCell>
								<TableCell>{product.units}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>rental</TableCell>
								<TableCell>{product.rental === 1 ? 'YES' : 'NO'}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>short description</TableCell>
								<TableCell>{product.short_description}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>power cord</TableCell>
								<TableCell>{product.cord}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>weight</TableCell>
								<TableCell>{product.weight}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>height</TableCell>
								<TableCell>{product.height}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>width</TableCell>
								<TableCell>{product.width}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>motor</TableCell>
								<TableCell>{product.motor}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>sound pressure</TableCell>
								<TableCell>{product.sound_pressure}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>container capacity</TableCell>
								<TableCell>{product.container_capacity}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>tank capacity</TableCell>
								<TableCell>{product.tank_capacity}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>speed</TableCell>
								<TableCell>{product.speed}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>size</TableCell>
								<TableCell>{product.size}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>feature 1</TableCell>
								<TableCell>{product.feature_1}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>feature 2</TableCell>
								<TableCell>{product.feature_2}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>feature 3</TableCell>
								<TableCell>{product.feature_3}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>feature 4</TableCell>
								<TableCell>{product.feature_4}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>feature 5</TableCell>
								<TableCell>{product.feature_5}</TableCell>
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
