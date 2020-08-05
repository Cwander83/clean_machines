import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from './theme/theme';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<React.Fragment>
		<Router>
			<ThemeProvider theme={theme}>
				<Auth0Provider
					domain={process.env.REACT_APP_AUTH0_DOMAIN}
					clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
					redirectUri={window.location.origin}
				>
					<App />
				</Auth0Provider>
			</ThemeProvider>
		</Router>
	</React.Fragment>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
