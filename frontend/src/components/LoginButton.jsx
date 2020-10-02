import React from 'react';

// auto 0
//import { useAuth0 } from '@auth0/auth0-react';

// react router
import { Link } from 'react-router-dom';

// material ui
import Button from '@material-ui/core/Button';

function LoginButton() {
	//const { loginWithRedirect } = useAuth0();

	return (
		<Button component={Link} to="/admin">
			Log in
		</Button>
	);
}

export default LoginButton;
