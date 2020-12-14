import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div>
			<h1>404 not found</h1>
			<Link to="/">back to home page</Link>
		</div>
	);
};

export default memo(NotFound);
