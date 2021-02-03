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

export const RentalList = (props) => (
	<List {...props} title="Rentals">
		<Datagrid>
			<TextField source="order_number" />
           <TextField source="billing_name"/>
           <TextField source="rentalProduct.model"/>
           <TextField source="start_date"/>
           <TextField source="end_date"/>
           
           
            {/* rental_total 
start_date  
end_date  
order_number  
billing_name  
billing_email  
billing_phone  
billing_line1  
billing_line2  
billing_city  
billing_zipcode  
billing_state  
delivery_name  
delivery_email  
delivery_phone  
delivery_line1  
delivery_line2  
delivery_city  
delivery_zipcode  
delivery_state  
createdAt  
updatedAt  

active  
picked_up */}
			
			
		</Datagrid>
	</List>
);
