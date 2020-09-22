import { createMuiTheme } from '@material-ui/core/styles';
//import RobotoBlack from '../assets/FONTS/ROBOTO/Roboto-Black.ttf';
//import RobotoRegular from '../assets/FONTS/ROBOTO/Roboto-Regular.ttf';
//import YellowTail from '../assets/FONTS/YELLOWTAIL/Yellowtail-Regular.ttf';

// const robotoBlack = {
// 	fontFamily: 'Roboto',
// 	src: `local('Roboto'),local('Roboto-Black'), url(${RobotoBlack}) format('truetype')`,
// };
// const robotoRegular = {
// 	fontFamily: 'Roboto',
// 	src: `local('Roboto'),local('Roboto-Regular'), url(${RobotoRegular}) format('truetype')`,
// };
// const yellowTail = {
// 	fontFamily: 'Yellowtail',
// 	src: `local('Yellowtail'),local('Yellowtail-Regular'), url(${YellowTail}) format('truetype')`,
// };

const theme = createMuiTheme({
	palette: {
		primary: {
			dark: '#285C4D',
			main: '#286140',
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
		fontFamily: 'Roboto',
		//Yellowtail
	},
	// overrides: {
	// 	MuiCssBaseline: {
	// 		'@global': {
	// 			'@font-face': [
	// 				robotoBlack,
	// 				//	yellowTail
	// 			],
	// 		},
	// 	},
	// },
});

export default theme;
