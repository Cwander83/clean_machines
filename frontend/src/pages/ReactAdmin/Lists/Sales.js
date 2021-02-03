import React from 'react';
import {
	List,
	Datagrid,
	TextField,
	// ReferenceField,
	// EditButton,
	// Edit,
	// Create,
	// Filter,
	// SimpleForm,
	// ReferenceInput,
	// SelectInput,
	// TextInput,
	BooleanField,
} from 'react-admin';

export const SalesList = (props) => (
	<List {...props} title="Sales">
		<Datagrid>
			<BooleanField source="shipped" />
			<TextField source="order_number" />
			<TextField source="billing_name" />
			<TextField source="product.model" />
			<TextField source="quantity_purchased" />
		</Datagrid>
	</List>
);
