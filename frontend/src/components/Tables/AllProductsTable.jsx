import React from 'react';

import axios from 'axios';

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
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TableHead from '@material-ui/core/TableHead';
import { AdminContext } from '../../context/admin-context';
const useStyles1 = makeStyles((theme) => ({
	root: {
		flexShrink: 0,
		marginLeft: theme.spacing(2.5),
	},
}));

const useRowStyles = makeStyles({
	root: {
		'& > *': {
			borderBottom: 'unset',
		},
	},
});

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

const AllProductsTable = React.memo(() => {
	const { product, setProduct, setDeleteBtn, setEditBtn } = React.useContext(
		AdminContext
	);
	const classes = useStyles2();
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);

	const [rows, setData] = React.useState([]);

	console.log(JSON.stringify(product, null, 2));

	React.useEffect(() => {
		const fetchData = async () => {
			const result = await axios(`/products/`);

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

		const classes = useRowStyles();

		return (
			<React.Fragment>
				<TableRow className={classes.root}>
					{/* <TableCell>
						<IconButton
							aria-label="expand row"
							size="small"
							onClick={() => setOpen(!open)}
						>
							{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
						</IconButton>
					</TableCell> */}
					<TableCell align="left">{row.id}</TableCell>
					<TableCell align="left">{row.name}</TableCell>
					<TableCell align="left">{row.model}</TableCell>
					<TableCell align="left">{row.category}</TableCell>
					<TableCell>
						<ButtonGroup>
							<Button
								onClick={() => {
									setProduct(row);
									setEditBtn(false);
								}}
							>
								view
							</Button>
							<Button
								onClick={() => {
									setProduct(row);
									setEditBtn(true);
								}}
							>
								edit
							</Button>
							<Button
								onClick={() => {
									setProduct(row);
								}}
							>
								delete
							</Button>
						</ButtonGroup>
					</TableCell>
				</TableRow>
			</React.Fragment>
		);
	}

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="products table">
				<TableHead>
					<TableRow>
						<TableCell>id</TableCell>
						<TableCell>name</TableCell>
						<TableCell align="left">model</TableCell>
						<TableCell align="left">category</TableCell>
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
});

export default AllProductsTable;
