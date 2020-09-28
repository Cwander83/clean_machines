import { createMuiTheme } from '@material-ui/core/styles';


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
		fontFamily: 'Roboto',
		h1: {
			fontFamily: 'Roboto',
		},
		h2: {
			fontFamily: 'Roboto',
		},
		h3: {
			fontFamily: 'YellowTail',
		},
		h4: {
			fontFamily: 'Roboto-Black',
		},
		h5: {
			fontFamily: 'Roboto-Black',
		},
		h6: {
			fontFamily: 'Roboto',
		},
		button: {
			fontFamily: 'Roboto',
		},
	},
});

export default theme;
