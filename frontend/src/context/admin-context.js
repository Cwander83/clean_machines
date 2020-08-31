import React from 'react';

// store default value
export const AdminContext = React.createContext();

// Provider
const AdminContextProvider = (props) => {
	const [product, setProduct] = React.useState();
	const [deleteBtn, setDeleteBtn] = React.useState(false);
	const [createBtn, setCreateBtn] = React.useState(false);
	const [editBtn, setEditBtn] = React.useState(false);

	return (
		<AdminContext.Provider
			value={{
				product,
				setProduct,
				deleteBtn,
				setDeleteBtn,
				createBtn,
				setCreateBtn,
				editBtn,
				setEditBtn,
			}}
		>
			{props.children}
		</AdminContext.Provider>
	);
};

export default AdminContextProvider;

// consumer
export const AdminConsumer = AdminContext.Consumer;
