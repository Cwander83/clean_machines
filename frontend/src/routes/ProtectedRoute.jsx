import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { Route } from 'react-router-dom';

import Spinner from '../UI/Spinner';

const PrivateRoute = ({ component, ...args }) => (
	<Route
		component={withAuthenticationRequired(component, {
			onRedirecting: () => <Spinner />,
		})}
		{...args}
	/>
);

export default PrivateRoute;
