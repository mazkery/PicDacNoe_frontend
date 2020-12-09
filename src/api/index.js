import axios from 'axios';
const API_SERVER = 'https://protected-dusk-54874.herokuapp.com/';
const instance = axios.create({
	withCredentials: true,
	baseURL: API_SERVER,
});

export const login = (data) => {
	return new Promise((resolve, reject) => {
		instance
			.post('signin', data)
			.then((res) => {
				resolve(res);
			})
			.catch((error) => {
				reject(error);
			});
	});
};
