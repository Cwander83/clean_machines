import React from 'react';

import { Admin, Resource, ListGuesser } from 'react-admin';
import restProvider from 'ra-data-simple-rest';

import { useAuth0 } from '@auth0/auth0-react';

import { SalesProductList } from './Lists/SalesProducts.js';
import { RentalProductList } from './Lists/RentalProducts';
import { RentalList } from './Lists/Rentals';
import { SalesList } from './Lists/Sales';

import authProvider from './MyAuthProvider';

const dataProvider = restProvider('http://localhost:3000/api/admin');

function ReactAdmin() {
	const { logout } = useAuth0();

	const customAuthProvider = authProvider({
		logout,
	});
	return (
		<Admin
			title="My Custom Admin"
			authProvider={customAuthProvider}
			dataProvider={dataProvider}
		>
			<Resource
				name="sales"
				options={{ label: 'Sale Products' }}
				list={SalesProductList}
			/>
			<Resource
				name="rental"
				options={{ label: 'Rental Products' }}
				list={RentalProductList}
			/>
			<Resource
				name="allsales"
				options={{ label: 'Sales' }}
				list={SalesList}
			/>
			<Resource
				name="allrentals"
				options={{ label: 'Rentals' }}
				list={RentalList}
			/>
		</Admin>
	);
}

export default ReactAdmin;
