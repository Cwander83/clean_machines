import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '@material-ui/core/Button';

function LoginButton() {
	const { isAuthenticated, loginWithRedirect } = useAuth0();

	return (
		<Button variant="primary" onClick={() => loginWithRedirect}>
			Log in
		</Button>
	);
}

export default LoginButton;
