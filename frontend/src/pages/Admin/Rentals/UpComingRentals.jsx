import React, { useEffect, useState } from 'react';

// axios
import axios from 'axios';

// react router
//import { Link, useRouteMatch } from 'react-router-dom';

// material ui
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DirectionsIcon from '@material-ui/icons/Directions';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

const useStyles = makeStyles({
	table: {
		minWidth: 300,
	},
	link: {
		color: 'black',
	},
});

export default function UpComingRentals() {
	const classes = useStyles();

	//let { path } = useRouteMatch();
	//console.log('path' + path);
	const [rows, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios(`/api/rentals/upcoming`);

			setData(result.data);
		};
		fetchData();
	}, []);

	const activeHandler = (id) => {
		axios.post(`/api/rentals/update-rental/${id}`, { active: true });
	};

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Activate</TableCell>
						<TableCell>Directions</TableCell>

						<TableCell>Order Number</TableCell>
						<TableCell>Model</TableCell>
						<TableCell>Start Date</TableCell>
						<TableCell>End Date</TableCell>
						<TableCell>Billing Name</TableCell>
						<TableCell>Phone</TableCell>
						<TableCell>Email</TableCell>
						<TableCell>Billing Address</TableCell>
						<TableCell>Delivery Address</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows ? (
						rows.map((row) => {
							return (
								<TableRow key={row.id}>
									<TableCell>
										<CheckBoxOutlineBlankIcon style={{cursor: 'pointer'}}
											onClick={() => activeHandler(row.id)}
										/>
									</TableCell>
									<TableCell>
										<a
											className={classes.link}
											target="blank"
											href={`https://maps.google.com/?q=${row.delivery_line1},${row.delivery_line2},${row.delivery_city},${row.delivery_state},${row.delivery_zipcode}`}
										>
											<DirectionsIcon />
										</a>
									</TableCell>
									<TableCell>{row.order_number}</TableCell>
									<TableCell>{row.rentalProduct.model}</TableCell>
									<TableCell>{row.start_date}</TableCell>
									<TableCell>{row.end_date}</TableCell>
									<TableCell>{row.billing_name}</TableCell>
									<TableCell>
										<a href={'tel:+' + row.billing_phone}>
											{row.billing_phone}
										</a>
									</TableCell>
									<TableCell>{row.billing_email}</TableCell>
									<TableCell>
										{row.billing_line1} {row.billing_line2}, {row.billing_city},{' '}
										{row.billing_state} {row.billing_zipcode}
									</TableCell>
									<TableCell>
										{row.delivery_line1} {row.delivery_line2},{' '}
										{row.delivery_city}, {row.delivery_state}{' '}
										{row.delivery_zipcode}
									</TableCell>
								</TableRow>
							);
						})
					) : (
						<TableRow></TableRow>
					)}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
