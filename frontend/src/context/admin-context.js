import React, {useState} from 'react';

// store default value
export const AdminContext = React.createContext();

// Provider
const AdminContextProvider = (props) => {
	const [product, setProduct] = useState();
	// const [deleteBtn, setDeleteBtn] = React.useState(false);
	// const [createBtn, setCreateBtn] = React.useState(false);
	// const [editBtn, setEditBtn] = React.useState(false);
	const [customer, setCustomer] = useState({})

	return (
		<AdminContext.Provider
			value={{
				product,
				setProduct,
				// deleteBtn,
				// setDeleteBtn,
				// createBtn,
				// setCreateBtn,
				// editBtn,
				// setEditBtn,
				customer, setCustomer
			}}
		>
			{props.children}
		</AdminContext.Provider>
	);
};

export default AdminContextProvider;

// consumer
export const AdminConsumer = AdminContext.Consumer;
