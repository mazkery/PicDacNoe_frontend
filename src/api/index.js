import axios from 'axios';
const API_SERVER = 'http://localhost:5000/';
let instance = axios.create({
	withCredentials: true,
	baseURL: API_SERVER,
});
localStorage.setItem('API', 'http://localhost:5000/');

export const login = async (data) => {
	return new Promise((resolve, reject) => {
		instance
			.post('/signin', data)
			.then((res) => {
				resolve(res);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

/**
 *
 * @param {{ squares: current.squares, win }} data
 */

export const saveGameHistory = async (data) => {
	const newData = {
		squares: data.squares.toString(),
		winline: data.win.line.toString(),
		gameId: '', // temp
		player1: '', // temp
		player2: '', // temp
		winner: '', // temp
	};

	return new Promise((resolve, reject) => {
		instance
			.post('/game-match/save', newData)
			.then((res) => {
				resolve(res);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

/**
 * Send email confirmation
 * @param {} data
 */

/**
 * Confirmed email
 */

export const confirmedEmail = async (data) => {
	return new Promise((resolve, reject) => {
		instance
			.get('/email/confirm/' + data.id)
			.then((res) => {
				resolve(res);
			})
			.catch((error) => {
				reject(error);
			});
	});
};
