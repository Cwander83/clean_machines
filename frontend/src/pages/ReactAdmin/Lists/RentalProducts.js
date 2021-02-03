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
	// Pagination,
} from 'react-admin';

// const RentalPagination = (props) => (
// 	<Pagination rowsPerPageOptions={[1, 2, 5, 10]} {...props} />
// );

export const RentalProductList = (props) => (
	<List {...props} title="Rental Products">
		<Datagrid>
			<TextField source="name" />
			<TextField source="model" />

			<TextField source="category" />
			<TextField source="units" />
			<TextField source="short_description" />
		</Datagrid>
	</List>
);
