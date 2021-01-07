import React, { useState, useEffect } from 'react';

// axios
import axios from 'axios';

// React router
//import { Link } from 'react-router-dom';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

const useStyles = makeStyles({
	table: {
		minWidth: 300,
	},
});

export default function UnShippedSales() {
	const classes = useStyles();

	const [rows, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios(`/api/sales/unshipped`);

			setData(result.data);
		};
		fetchData();
	}, []);

	const shippedHandler = async (id) => {
		await axios.post(`/api/sales/update/${id}`, { shipped: true });
		await axios
			.get('/api/sales/unshipped')
			.then((result) => setData(result.data))
			.catch((err) => {
				console.error(err);
			});
	};

	return (
		<>
			{rows ? (
				<TableContainer component={Paper}>
					<Table className={classes.table} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>Shipped</TableCell>
								<TableCell>Order Number</TableCell>
								<TableCell>Model</TableCell>
								<TableCell>Quantity</TableCell>
								<TableCell>Billing Name</TableCell>
								<TableCell>Phone</TableCell>
								<TableCell>Email</TableCell>
								<TableCell>Billing Address</TableCell>
								<TableCell>Shipping Address</TableCell>
								<TableCell>Order Date</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row, i) => {
								return (
									<TableRow key={row.id}>
										<TableCell>
											<CheckBoxOutlineBlankIcon
												style={{ cursor: 'pointer' }}
												onClick={() => shippedHandler(row.id)}
											/>
										</TableCell>
										<TableCell>{row.order_number}</TableCell>
										<TableCell>{row.product.model}</TableCell>
										<TableCell>{row.quantity_purchased}</TableCell>

										<TableCell>{row.billing_name}</TableCell>
										<TableCell>
											<a href={'tel:+' + row.billing_phone}>
												{row.billing_phone}
											</a>
										</TableCell>
										<TableCell>{row.billing_email}</TableCell>
										<TableCell>
										{row.billing_line1}
										{row.billing_line2 && ','} {row.billing_line2},{' '}
										{row.billing_city}, {row.billing_state}{' '}
										{row.billing_zipcode}
									</TableCell>
									<TableCell>
										{row.shipping_line1}
										{row.shipping_line2 && ', '}
										{row.shipping_line2}, {row.shipping_city},{' '}
										{row.shipping_state} {row.shipping_zipcode}
									</TableCell>
										<TableCell>
											{new Date(row.createdAt).toLocaleString()}
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
