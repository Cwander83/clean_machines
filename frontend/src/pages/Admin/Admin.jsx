import React from 'react';



import ProductTable from './ProductTable';
import CreateProductModal from './CreateProductModal';
import {  withAuthenticationRequired } from "@auth0/auth0-react";
import Logout from '../../auth/Logout';
import Spinner from '../../UI/Spinner';

const Admin = () => {
	return (
		<div>
			<Logout />
			<CreateProductModal />
			<ProductTable />
		</div>
	);
};


export default withAuthenticationRequired(Admin, {
	onRedirecting: () => <Spinner />,
  });
