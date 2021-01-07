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

const RentalProductsTable = () => {
	const classes = useStyles2();
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [rows, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios(`/api/products/rental`);

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
					<TableCell>{row.name}</TableCell>
					<TableCell>{row.model}</TableCell>
					<TableCell>${(row.rental_day / 100).toFixed(2)}</TableCell>
					<TableCell>${(row.rental_two_day / 100).toFixed(2)}</TableCell>
					<TableCell>${(row.rental_week / 100).toFixed(2)}</TableCell>

					<TableCell>{row.category}</TableCell>
					<TableCell>{row.short_description}</TableCell>
					<TableCell>{row.cord}</TableCell>
					<TableCell>{row.weight}</TableCell>
					<TableCell>{row.height}</TableCell>
					<TableCell>{row.width}</TableCell>
					<TableCell>{row.tools}</TableCell>
					<TableCell>{row.motor}</TableCell>
					<TableCell>{row.sound_pressure}</TableCell>
					<TableCell>{row.container_capacity}</TableCell>
					<TableCell>{row.tank_capacity}</TableCell>
					<TableCell>{row.speed}</TableCell>
					<TableCell>{row.size}</TableCell>
					<TableCell>{row.feature_1}</TableCell>
					<TableCell>{row.feature_2}</TableCell>
					<TableCell>{row.feature_3}</TableCell>
					<TableCell>{row.feature_4}</TableCell>
					<TableCell>{row.feature_5}</TableCell>
				</TableRow>
			</React.Fragment>
		);
	}

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="products table">
				<TableHead>
					<TableRow>
						<TableCell>Name</TableCell>
						<TableCell>Model</TableCell>
						<TableCell>Day</TableCell>
						<TableCell>Two Day</TableCell>
						<TableCell>Week</TableCell>
						<TableCell>Category</TableCell>
						<TableCell>Short Description</TableCell>
						<TableCell>Power Cord</TableCell>
						<TableCell>Weight</TableCell>
						<TableCell>Height</TableCell>
						<TableCell>Width</TableCell>
						<TableCell>Tools</TableCell>
						<TableCell>Motor</TableCell>
						<TableCell>Sound Pressure</TableCell>
						<TableCell>Container Capacity</TableCell>
						<TableCell>Tank Capacity</TableCell>
						<TableCell>Speed</TableCell>
						<TableCell>Size</TableCell>
						<TableCell>Features</TableCell>
						<TableCell></TableCell>
						<TableCell></TableCell>
						<TableCell></TableCell>
						<TableCell></TableCell>
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

export default RentalProductsTable;
