import React from 'react';

export const ModalContext = React.createContext();
// 	{
// 	open: null,

// 	showModal: () => {},
// 	hideModal: () => {},
// }

const ModalProvider = (props) => {
	const [createRental, setCreateRental] = React.useState(false);

	const showCreateRental = () => setCreateRental(true);

	const hideCreateRental = () => setCreateRental(false);

	return (
		<ModalContext.Provider
			value={{
				createRental,
				showCreateRental,
				hideCreateRental
			}}
		>
			{props.children}
		</ModalContext.Provider>
	);
};

export default ModalProvider;
