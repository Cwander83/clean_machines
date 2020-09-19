import { createMuiTheme } from '@material-ui/core/styles';

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
			contrastText: '#fff'
		},
		grey: {
			main: '#D7D2CB',
			contrastText: '#fff'
		}
	},
});

export default theme;
