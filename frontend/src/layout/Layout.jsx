import React from 'react';

// material ui
import Container from '@material-ui/core/Container';
import Footer from '../components/Footer';
import NavDrawer from '../components/NavDrawer';

// auth 0
import { useAuth0 } from '@auth0/auth0-react';

const Layout = ({ children }) => {
	const { isAuthenticated } = useAuth0();
	return (
		!isAuthenticated && (
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
				<Container
					maxWidth="xl"
					disableGutters
					style={{ minHeight: 'calc(100vh - 300px)', height: '100%' }}
				>
					{children}
				</Container>
				<Footer />
			</div>
		)
	);
};

export default Layout;
