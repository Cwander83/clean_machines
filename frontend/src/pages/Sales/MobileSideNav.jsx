import React, { useState, memo } from 'react';

// react router
//import { Switch, Route, useRouteMatch } from 'react-router-dom';

// material ui
import { makeStyles } from '@material-ui/core/styles';

// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import Collapse from '@material-ui/core/Collapse';
// import ExpandMore from '@material-ui/icons/ExpandMore';
// import ExpandLess from '@material-ui/icons/ExpandLess';

const useStyles = makeStyles((theme) => ({
	nested: {
		paddingLeft: theme.spacing(4),
	},
	list: {
		//padding: '5px',
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
}));

const MobileSideNav = () => {
	const classes = useStyles();

	const [open, setOpen] = useState(false);
	const handleClick = () => setOpen(!open);
	
};

export default memo(MobileSideNav);
