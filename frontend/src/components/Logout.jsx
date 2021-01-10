import React, { memo } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '@material-ui/core/Button';

function Logout() {
	const { logout } = useAuth0();

	return (
		<Button
			onClick={() => {
				logout({ returnTo: window.location.origin });
			}}
		>
			Log out
		</Button>
	);
}

export default memo(Logout);
