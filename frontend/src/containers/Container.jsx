import React, { memo } from 'react';

import Container from '@material-ui/core/Container';

const container = ({ children }) => (
	<Container
		maxWidth="xl"
		style={{
			height: '100%',
			minHeight: '90vh',
		}}
	>
		{children}
	</Container>
);

export default memo(container);
