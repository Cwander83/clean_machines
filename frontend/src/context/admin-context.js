import React, { useState } from 'react';

// store default value
export const AdminContext = React.createContext();

// Provider
const AdminContextProvider = (props) => {
	const [product, setProduct] = useState();
	const [customer, setCustomer] = useState({});

	return (
		<AdminContext.Provider
			value={{
				product,
				setProduct,
				customer,
				setCustomer,
			}}
		>
			{props.children}
		</AdminContext.Provider>
	);
};

export default AdminContextProvider;

// consumer
export const AdminConsumer = AdminContext.Consumer;
