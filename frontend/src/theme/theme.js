import { createMuiTheme } from '@material-ui/core/styles';

import RobotoBlack from '../assets/FONTS/ROBOTO/Roboto-Black.ttf';
import Roboto from '../assets/FONTS/ROBOTO/Roboto-Regular.ttf';
import YellowTail from '../assets/FONTS/YELLOWTAIL/Yellowtail-Regular.ttf';

const robotoBlack = {
	fontFamily: 'Roboto Black',
	fontStyle: 'normal',
	fontDisplay: 'swap',
	fontWeight: 700,
	src: `
	  local('Roboto'),
	  local('Roboto-Black'),
	  url(${RobotoBlack}) format('ttf')
	`,
};
const roboto = {
	fontFamily: 'Roboto ',
	fontStyle: 'normal',
	fontDisplay: 'swap',
	fontWeight: 400,
	src: `
	  local('Roboto'),
	  local('Roboto-Regular'),
	  url(${Roboto}) format('ttf')
	`,
};
const yellowTail = {
	fontFamily: 'YellowTail ',
	fontStyle: 'normal',
	fontDisplay: 'swap',
	fontWeight: 400,
	src: `
	  local('YellowTail'),
	  local('YellowTail-Regular'),
	  url(${YellowTail}) format('ttf')
	`,
};

const theme = createMuiTheme({
	palette: {
		primary: {
			dark: '#285C4D',
			main: '#286140',
			light: '#09594C',
			contrastText: '#fff',
		},
		secondary: {
			main: '#2A6C82',
			contrastText: '#fff',
		},
		orange: {
			main: '#FA4616',
			light: '#FEAD77',
			contrastText: '#fff',
		},
		gold: {
			main: '#DAAA00',
			contrastText: '#fff',
		},
		grey: {
			main: '#D7D2CB',
			contrastText: '#fff',
		},
	},
	typography: {
		fontFamily: [
			'Roboto',
			'YellowTail',
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
	},
	overrides: {
		MuiCssBaseline: {
			'@global': {
				'@font-face': [roboto, robotoBlack, yellowTail],
			},
		},
	},
});

export default theme;
