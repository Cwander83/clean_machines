import React from 'react';

import axios from 'axios';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
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
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Typography from '@material-ui/core/Typography';
import TableHead from '@material-ui/core/TableHead';


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
	const classes = useStyles2();
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);

	const [rows, setData] = React.useState([]);

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
		const [open, setOpen] = React.useState(false);
		const classes = useRowStyles();

		return (
			<React.Fragment>
				<TableRow className={classes.root}>
					<TableCell>
						<IconButton
							aria-label="expand row"
							size="small"
							onClick={() => setOpen(!open)}
						>
							{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
						</IconButton>
					</TableCell>
					<TableCell align="left">{row.id}</TableCell>
					<TableCell align="left">{row.name}</TableCell>
					<TableCell align="left">{row.model}</TableCell>
					<TableCell align="left">{row.category}</TableCell>
					<TableCell align="left">{row.sub_category}</TableCell>
					<TableCell align="center">{row.sale_price}</TableCell>
					<TableCell align="center">{row.rental_price}</TableCell>
					<TableCell align="center">{row.units}</TableCell>
					<TableCell align="center">{row.rental ? 'YES' : 'NO'}</TableCell>
				</TableRow>
				<TableRow>
					<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={20}>
						<Collapse in={open} timeout="auto" unmountOnExit>
							<Box margin={1}>
								<Typography variant="h6" gutterBottom component="div">
									Additional
								</Typography>
								<Table size="small" aria-label="features">
									<TableHead>
										<TableRow>
											<TableCell width="3" colSpan={1}>
												Feature #
											</TableCell>
											<TableCell align="left">features</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										<TableRow>
											<TableCell component="th">0</TableCell>
											<TableCell>{row.feature_0}</TableCell>
										</TableRow>
										{row.feature_1 ? (
											<TableRow>
												<TableCell>1</TableCell>
												<TableCell>{row.feature_1}</TableCell>
											</TableRow>
										) : (
											<></>
										)}
										{row.feature_2 ? (
											<TableRow>
												<TableCell>2</TableCell>
												<TableCell>{row.feature_2}</TableCell>
											</TableRow>
										) : (
											<></>
										)}
										{row.feature_3 ? (
											<TableRow>
												<TableCell>3</TableCell>
												<TableCell>{row.feature_3}</TableCell>
											</TableRow>
										) : (
											<></>
										)}
										{row.feature_4 ? (
											<TableRow>
												<TableCell>4</TableCell>
												<TableCell>{row.feature_4}</TableCell>
											</TableRow>
										) : (
											<></>
										)}
										{row.feature_5 ? (
											<TableRow>
												<TableCell>5</TableCell>
												<TableCell>{row.feature_5}</TableCell>
											</TableRow>
										) : (
											<></>
										)}
										{row.feature_6 ? (
											<TableRow>
												<TableCell>6</TableCell>
												<TableCell>{row.feature_6}</TableCell>
											</TableRow>
										) : (
											<></>
										)}
										{row.feature_7 ? (
											<TableRow>
												<TableCell>7</TableCell>
												<TableCell>{row.feature_7}</TableCell>
											</TableRow>
										) : (
											<></>
										)}
										{row.feature_8 ? (
											<TableRow>
												<TableCell>8</TableCell>
												<TableCell>{row.feature_8}</TableCell>
											</TableRow>
										) : (
											<></>
										)}
										{row.feature_9 ? (
											<TableRow>
												<TableCell>9</TableCell>
												<TableCell>{row.feature_9}</TableCell>
											</TableRow>
										) : (
											<></>
										)}
									</TableBody>
								</Table>
							</Box>
						</Collapse>
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
								<TableCell />
								<TableCell>id</TableCell>
								<TableCell>name</TableCell>
								<TableCell align="left">model</TableCell>
								<TableCell align="left">category</TableCell>
								<TableCell align="left">sub category</TableCell>
								<TableCell align="right">sale price</TableCell>
								<TableCell align="right">rental per day</TableCell>
								<TableCell align="right">inventory (for sale)</TableCell>
								<TableCell align="right">rental (YES or NO)</TableCell>
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