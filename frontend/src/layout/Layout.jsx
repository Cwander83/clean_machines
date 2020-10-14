import React from 'react';

import Container from '@material-ui/core/Container';
import Footer from '../components/Footer';
import NavDrawer from '../components/NavDrawer';

const Layout = ({ children }) => {
	return (
		<div
			style={{
				minHeight: '100vh',
				textAlign: 'center',
				display: 'flex',
				flexDirection: 'column',

				backgroundSize: 'cover',
			}}
		>
			<NavDrawer />
			<Container maxWidth="xl" disableGutters style={{ minHeight: '100%', height: '100%' }}>
				{children}
			</Container>
			<Footer />
		</div>
	);
};

export default Layout;
