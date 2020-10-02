import React from 'react';

// axios
import axios from 'axios';

// react router
import { Link, useRouteMatch } from 'react-router-dom';

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

export default function CurrentRentals() {
	const classes = useStyles();

	let { path } = useRouteMatch();
	console.log('path' + path);
	const [rows, setData] = React.useState([]);

	React.useEffect(() => {
		const fetchData = async () => {
			const result = await axios(`/rentals/active-rentals`);

			setData(result.data);
		};
		fetchData();
	}, []);

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Delivery Name</TableCell>
						<TableCell>Billing Name</TableCell>
						<TableCell>Company Name</TableCell>
						<TableCell>Start Date</TableCell>
						<TableCell>End Date</TableCell>
						<TableCell></TableCell>
						<TableCell></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows ? (
						rows.map((row) => {
							return (
								<TableRow key={row.id}>
									<TableCell>
										<Button component={Link} to={`${path}/rental/${row.id}`}>
											{row.delivery_name}
										</Button>
									</TableCell>
									<TableCell>{row.billing_name}</TableCell>
									<TableCell>{row.delivery_company_name}</TableCell>
									<TableCell>{row.start_date}</TableCell>
									<TableCell>{row.end_date}</TableCell>

									<TableCell>
										<Button
											target="_blank"
											href={`https://maps.google.com/?q=${row.delivery_line1},${row.delivery_line2},${row.delivery_city},${row.delivery_state},${row.delivery_zipcode}`}
										>
											Map it
										</Button>
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
