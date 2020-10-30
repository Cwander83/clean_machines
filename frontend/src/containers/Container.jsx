import React, { memo } from 'react';

import Container from '@material-ui/core/Container';

const container = ({ children }) => (
	<Container
		maxWidth="lg"
		style={{
			height: '100%',
			minHeight: 'calc(100vh - 30px)',
		}}
	>
		{children}
	</Container>
);

export default memo(container);
