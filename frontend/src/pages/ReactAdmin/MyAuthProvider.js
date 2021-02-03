const authProvider = ({ logout }) => ({
	logout: () => logout({ returnTo: window.location.origin }),
	login: (params) => Promise.resolve(),
	checkError: (error) => Promise.resolve(),
	checkAuth: (params) => Promise.resolve(),
	getIdentity: () => Promise.resolve(),
	// authorization
	getPermissions: (params) => Promise.resolve(),
});

export default authProvider;
