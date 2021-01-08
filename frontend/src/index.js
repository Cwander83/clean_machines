import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from './theme/theme';
import * as serviceWorker from './serviceWorker';
import Spinner from './UI/Spinner';

import './assets/FONTS/ROBOTO/Roboto-Regular.ttf';
import './assets/FONTS/ROBOTO/Roboto-Black.ttf';

ReactDOM.render(
	<React.Fragment>
		<Router>
			<Suspense fallback={<Spinner />}>
				<ThemeProvider theme={theme}>
					<Auth0ProviderWithHistory>
						<App />
					</Auth0ProviderWithHistory>
				</ThemeProvider>
			</Suspense>
		</Router>
	</React.Fragment>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
