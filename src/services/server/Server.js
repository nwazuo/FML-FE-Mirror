import axios from 'axios';

const headers = {
	'Content-Type': 'application/json',
	Accept: 'application/json',
	'Access-Control-Allow-Origin': '*',
};

// x-www-form-urlencoded

const get = (url, options = {}) => {
	if (options) {
		options = { ...headers, ...options };
	}
	return axios.get(process.env.REACT_APP_BASE_URL + url, { headers: options });
};

const post = (url, data, header = {}) => {
	const options = { ...header};
	return axios.post(process.env.REACT_APP_BASE_URL + url, data, {
		headers: options,
	});
};

const authPost = (url, data, token, header = {}) => {
	const authToken = { Authorization: 'Bearer ' + token };
	const options = { ...headers, ...authToken, ...header };
	return axios.post(process.env.REACT_APP_BASE_URL + url, data, {
		headers: options,
	});
};

const authBlogPost = (url, data, token, header = {}) => {
	const authToken = { Authorization: token };
	const options = { ...headers, ...authToken, ...header };
	return axios.post(process.env.REACT_APP_BASE_URL + url, data, {
		headers: options,
	});
};

const authGet = (url, token, extraHeaders = {}) => {
	const authToken = { Authorization: 'Bearer ' + token, ...extraHeaders };
	const options = { ...headers, ...authToken };
	return axios.get(process.env.REACT_APP_BASE_URL + url, { headers: options });
};

const authGetCampaign = (url, token, extraHeaders = {}) => {
	const authToken = { Authorization: token, ...extraHeaders };
	const options = { ...headers, ...authToken };
	return axios.get(process.env.REACT_APP_BASE_URL + url, { headers: options });
};

const loginDemo = {
	error: false,
	message: 'Login request successful',
	data: {
		id: '3',
		email: '',
		profileData: {
			username: '',
			email: '',
			firstName: '',
			lastName: '',
			gender: '',
			dateOfBirth: '',
			avatar: '',
			bio: '',
		},
	},
};

const Server = {
	get,
	post,
	authPost,
	authBlogPost,
	authGet,
	loginDemo,
	authGetCampaign,
};

export default Server;
