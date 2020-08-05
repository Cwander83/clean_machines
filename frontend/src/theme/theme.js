import { createMuiTheme } from '@material-ui/core/styles';

import { blue, green, } from '@material-ui/core/colors';

const theme = createMuiTheme({
	palette: {
		primary: {
			light: green[200],
			dark: green[900],
			main: green[600],
			contrastText: '#fff',
		},
		secondary: {
			light: blue[200],
			dark: blue[900],
			main: blue[200],
			contrastText: '#fff',
		},
	},
});

export default theme;
