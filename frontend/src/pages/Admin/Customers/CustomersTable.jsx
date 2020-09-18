// TODO fix and update table with current data

import React from 'react';

import axios from 'axios';

import {
	Switch,
	Route,
	Link,
	useRouteMatch,
	//useParams,
} from 'react-router-dom';

import CustomerDetails from './CustomersDetails';

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
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
//import ButtonGroup from '@material-ui/core/ButtonGroup';

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

const CustomersTable = () => {
	const classes = useStyles2();

	let { path } = useRouteMatch();

	const [loading, setLoading] = React.useState(false);

	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);

	const [rows, setData] = React.useState([]);

	React.useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			const result = await axios(`/customers/`);

			setData(result.data.data);
			setLoading(false);
		};
		fetchData();
	}, []);

	//console.log(rows);

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
					<TableCell>
						<Button component={Link} to={`${path}/${row.id}`}>
							{row.name}
						</Button>
					</TableCell>
					<TableCell>{row.email}</TableCell>
					<TableCell>{row.phone}</TableCell>
					<TableCell>
						{row.address.city}, {row.address.state}
					</TableCell>
					<TableCell>{row.id}</TableCell>
				</TableRow>
			</React.Fragment>
		);
	}

	return (
		<Switch>
			<Route exact path={path}>
				<TableContainer component={Paper}>
					{!loading ? (
						<Table className={classes.table} aria-label="products table">
							<TableHead>
								<TableRow>
									<TableCell>Billing Name</TableCell>
									<TableCell>Email</TableCell>
									<TableCell>Phone</TableCell>

									<TableCell>City, State</TableCell>
									<TableCell>Stripe Id</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{(rowsPerPage > 0
									? rows.slice(
											page * rowsPerPage,
											page * rowsPerPage + rowsPerPage
									  )
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
										rowsPerPageOptions={[
											5,
											10,
											25,
											{ label: 'All', value: -1 },
										]}
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
					) : (
						<CircularProgress />
					)}
				</TableContainer>
			</Route>
			<Route path={`${path}/:id`}>
				<CustomerDetails />
			</Route>
		</Switch>
	);
};

export default CustomersTable;
