import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const NotAuthorized = () => {
	return (
		<div>
			<h1>403 not Not Authorized</h1>
			<Link to="/">back to home page</Link>
		</div>
	);
};

export default memo(NotAuthorized);
