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
} from 'react-admin';

export const SalesProductList = (props) => (
	<List {...props} title="Sales Product">
		<Datagrid>
			<TextField source="name" />
			<TextField source="model" />
			<TextField source="sale_price" />
			<TextField source="shipping_cost" />
			<TextField source="category" />
			<TextField source="units" />
			<TextField source="short_description" />
		</Datagrid>
	</List>
);
