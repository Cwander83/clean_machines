import React, { useState, useEffect } from 'react';

// axios
import axios from 'axios';

// React router
import { Link } from 'react-router-dom';

// material ui
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

	const [rows, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios(`/sales/recent`);

			setData(result.data);
		};
		fetchData();
	}, []);

	
	return (
		<>
			{rows ? (
				<TableContainer component={Paper}>
					<Table className={classes.table} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>ID</TableCell>
								<TableCell>Billing Name</TableCell>
								<TableCell>Shipping Name</TableCell>
								<TableCell>Model</TableCell>
								<TableCell>Total Price</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row, i) => {
								return (
									<TableRow key={i}>
										<TableCell>{row.id}</TableCell>
										<TableCell>
											<Button
												component={Link}
												to={`admin/sales/sale/${row.id}`}
											>
												{row.billing_name}
											</Button>
										</TableCell>
										<TableCell>{row.shipping_name}</TableCell>
										<TableCell>{row.product.model}</TableCell>
										<TableCell>
											$ {(row.total_price / 100).toFixed(2)}
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
