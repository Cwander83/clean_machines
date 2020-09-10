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
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
	table: {
		minWidth: 300,
	},
});

export default function RecentSalesTable() {
	const classes = useStyles();

	const [rows, setData] = React.useState([]);

	React.useEffect(() => {
		const fetchData = async () => {
			// TODO change to recent sales
			const result = await axios(`/products/recent-sales`);

			setData(result.data);
		};
		fetchData();
	}, []);

	console.log('sales table: ' + JSON.stringify(rows, null, 2));

	return (
		<>
			{rows ? (
				<TableContainer component={Paper}>
					<Table className={classes.table} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>ID</TableCell>
								<TableCell>Billing Name</TableCell>
								<TableCell>Model</TableCell>
								<TableCell>Total Price</TableCell>
								<TableCell></TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row,i) => {
								return (
									<TableRow key={i}>
										<TableCell>{row.id}</TableCell>
										<TableCell>{row.shipping_name}</TableCell>
										<TableCell>{row.product.model}</TableCell>
										<TableCell>{row.total_price}</TableCell>
										<TableCell>
											<Button>view</Button>
										</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</TableContainer>
			) : (
				<></>
			)}
		</>
	);
}
