import { createContext } from 'react';

const ModalContext = createContext({
	open: null,

	showModal: () => {},
	hideModal: () => {},
});

const ModalProvider = (props) => {
	const [open, setOpen] = React.useState(false);

	const showModal = () => setOpen(true);

	const hideModal = () => setOpen(false);

	return (
		<ModalContext.Provider
			value={{
				open: open,
				showModal: showModal,
				hideModal: hideModal,
			}}
		>
			{props.children}
		</ModalContext.Provider>
	);
};

export default ModalProvider;
