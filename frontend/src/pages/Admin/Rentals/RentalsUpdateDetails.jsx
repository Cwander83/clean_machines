import React from 'react';

import { useParams } from 'react-router-dom';

import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
//import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import EditIcon from '@material-ui/icons/Edit'

const useStyles = makeStyles((theme) => ({
	list: {
		textAlign: 'center',
	},
	subHeader: {
		backgroundColor: theme.palette.primary.main,
		color: 'black',
		padding: '5px 0',
	},
}));


const RentalsUpdateDetails = () => {
    const classes = useStyles()
    
    return (
        <div>
            
        </div>
    )
}

export default RentalsUpdateDetails
