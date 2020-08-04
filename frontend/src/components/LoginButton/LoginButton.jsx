import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '@material-ui/core/Button';

import './LoginButton.css';

const LoginButton = () => {
	const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

	return (
		<>
			{!isAuthenticated ? (
				<Button
					variant="contained"
					color="primary"
					onClick={() => loginWithRedirect()}
				>
					Log In
				</Button>
			) : (
				<Button
					variant="contained"
					color="primary"
					onClick={() => logout({ returnTo: window.location.origin })}
				>
					Log out
				</Button>
			)}
		</>
	);
};

export default LoginButton;
