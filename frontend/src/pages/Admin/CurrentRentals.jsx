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

export default function CurrentRentals() {
	const classes = useStyles();

	const [rows, setData] = React.useState([]);

	React.useEffect(() => {
		const fetchData = async () => {
			const result = await axios(`/products/active-rentals`);

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
								<TableCell>Delivery Name</TableCell>
								<TableCell>Start Date</TableCell>
								<TableCell>End Date</TableCell>
								<TableCell></TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row) => {
								return (
									<TableRow key={row.id}>
										<TableCell>{row.id}</TableCell>
										<TableCell>{row.delivery_name}</TableCell>
										<TableCell>{row.start_date}</TableCell>
										<TableCell>{row.end_date}</TableCell>
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
