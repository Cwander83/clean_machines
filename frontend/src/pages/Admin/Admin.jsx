import React from 'react';

import './Admin.css';
import CreateProduct from '../CreateProduct/CreateProduct';
import ProductTable from '../ProductTable/ProductTable';

const Admin = () => {
	return (
		<div>
			<CreateProduct />
			<ProductTable />
		</div>
	);
};

export default Admin;
