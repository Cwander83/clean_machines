import React, {useState} from 'react';

// axios
//import axios from 'axios';

// store default value
export const SalesContext = React.createContext();

// Provider
const SalesContextProvider = (props) => {
	const [category, setCategory] = useState('upright');

	return (
		<SalesContext.Provider
			value={{
				category,
				setCategory,
			}}
		>
			{props.children}
		</SalesContext.Provider>
	);
};

export default SalesContextProvider;

// consumer
export const RentalConsumer = SalesContext.Consumer;
