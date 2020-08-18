import React from 'react';

import CreateProductModal from './CreateProductModal';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Logout from '../../components/Logout';
import Spinner from '../../UI/Spinner';

const Admin = () => {
	return (
		<div>
			<Logout />
			<CreateProductModal />
		</div>
	);
};

export default withAuthenticationRequired(Admin, {
	onRedirecting: () => <Spinner />,
});
