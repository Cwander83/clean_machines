import React, { useState, useEffect } from 'react';
// moment

// axios
import axios from 'axios';

// React router
//import { Link } from 'react-router-dom';

// material ui
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import TableHead from '@material-ui/core/TableHead';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles1 = makeStyles((theme) => ({
	root: {
		flexShrink: 0,
		marginLeft: theme.spacing(2.5),
	},
}));

function TablePaginationActions(props) {
	const classes = useStyles1();
	const theme = useTheme();
	const { count, page, rowsPerPage, onChangePage } = props;

	const handleFirstPageButtonClick = (event) => {
		onChangePage(event, 0);
	};

	const handleBackButtonClick = (event) => {
		onChangePage(event, page - 1);
	};

	const handleNextButtonClick = (event) => {
		onChangePage(event, page + 1);
	};

	const handleLastPageButtonClick = (event) => {
		onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
	};

	return (
		<div className={classes.root}>
			<IconButton
				onClick={handleFirstPageButtonClick}
				disabled={page === 0}
				aria-label="first page"
			>
				{theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
			</IconButton>
			<IconButton
				onClick={handleBackButtonClick}
				disabled={page === 0}
				aria-label="previous page"
			>
				{theme.direction === 'rtl' ? (
					<KeyboardArrowRight />
				) : (
					<KeyboardArrowLeft />
				)}
			</IconButton>
			<IconButton
				onClick={handleNextButtonClick}
				disabled={page >= Math.ceil(count / rowsPerPage) - 1}
				aria-label="next page"
			>
				{theme.direction === 'rtl' ? (
					<KeyboardArrowLeft />
				) : (
					<KeyboardArrowRight />
				)}
			</IconButton>
			<IconButton
				onClick={handleLastPageButtonClick}
				disabled={page >= Math.ceil(count / rowsPerPage) - 1}
				aria-label="last page"
			>
				{theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
			</IconButton>
		</div>
	);
}

const useStyles2 = makeStyles((theme) => ({
	root: {
		flexShrink: 3,
	},
	table: {
		minWidth: 400,
	},
}));

const SalesTable = () => {
	const classes = useStyles2();
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [rows, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios(`/api/sales`);

			setData(result.data);
		};
		fetchData();
	}, []);

	const emptyRows =
		rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	function Row(props) {
		const { row } = props;

		return (
			<React.Fragment>
				<TableRow className={classes.root}>
					<TableCell>{row.shipped && <CheckCircleIcon />}</TableCell>
					<TableCell>{row.order_number}</TableCell>
					<TableCell>{row.product.model}</TableCell>
					<TableCell>{row.quantity_purchased}</TableCell>

					<TableCell>{row.billing_name}</TableCell>
					<TableCell>
						<a href={'tel:+' + row.billing_phone}>{row.billing_phone}</a>
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
					<TableCell>{new Date(row.createdAt).toLocaleString()}</TableCell>
				</TableRow>
			</React.Fragment>
		);
	}

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="products table">
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
					{(rowsPerPage > 0
						? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
						: rows
					).map((row, i) => (
						<Row key={i} row={row} />
					))}

					{emptyRows > 0 && (
						<TableRow style={{ height: 53 * emptyRows }}>
							<TableCell colSpan={12} />
						</TableRow>
					)}
				</TableBody>
				<TableFooter>
					<TableRow>
						<TablePagination
							rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
							colSpan={12}
							count={rows.length}
							rowsPerPage={rowsPerPage}
							page={page}
							SelectProps={{
								inputProps: { 'aria-label': 'rows per page' },
								native: true,
							}}
							onChangePage={handleChangePage}
							onChangeRowsPerPage={handleChangeRowsPerPage}
							ActionsComponent={TablePaginationActions}
						/>
					</TableRow>
				</TableFooter>
			</Table>
		</TableContainer>
	);
};

export default SalesTable;
