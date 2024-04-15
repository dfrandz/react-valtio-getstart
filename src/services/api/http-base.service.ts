const base_url: string = "https://api-dev.1xcapp.online/api/";
import axios from 'axios';
import { ApiResponse } from '../../models/api-response';
import { getToken } from '../../helpers/myfunc';

// @ts-ignore
let token = JSON.parse(localStorage.getItem('token'))

export const getData = async (url: string): Promise<ApiResponse> => {
	let data: ApiResponse;
	let headers = new Headers();
	headers.append('Content-Type', 'application/json');
	headers.append('Accept', 'application/json');
	headers.append('Authorization', 'Bearer ' + token);

	const response = await fetch(base_url + url, {
		method: 'POST',
		headers: headers,
		//mode: 'no-cors',
		// credentials: 'include',
	});
	data = await response.json();
	return data;

}

/**
 *postData function
 * send simple http request without authorization
 * @param url
 * @param payload
 * @returns
 */
export const postData = async (url: string, payload: any): Promise<ApiResponse> => {
	let data: ApiResponse;
	try {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('Accept', 'application/json');
		headers.append('X-Requested-With', 'XMLHttpRequest');
		headers.append('Access-Control-Allow-Origin', '*');
		headers.append('Access-Control-Allow-Credentials', 'true');
		const response = await fetch(base_url + url, {
			method: 'POST',
			headers: headers,
			body: JSON.stringify(payload),
		});

		if (response.ok) {
			data = await response.json();
			return data;
		} else {
			console.log(response.status);
			data = {
				success: false,
				message: 'Erreur de connexion',
				result: null,
				errors: "Erreur de connexion à l'api",
			};
			return data;
		}
	} catch (error) {
		console.log(error);
		return {
			success: false,
			message: 'Erreur de connexion',
			result: null,
			errors: "Erreur de connexion à l'api",
		};
	}

}

/**
 * postDataWithToken function
 * send hhtp request with authorization bearer
 * @param url
 * @param payload
 * @returns response
 */
export const postDataWithToken = async (url: string, payload?: any): Promise<ApiResponse> => {
	let data: ApiResponse;
	try {
		const token = getToken();
		if (token !== null) {
			let headers = new Headers();
			headers.append('Content-Type', 'application/json');
			// headers.append('Content-Type', 'multipart/form-data');

			headers.append('Accept', 'application/json');
			headers.append('X-Requested-With', 'XMLHttpRequest');
			headers.append('Access-Control-Allow-Origin', '*');
			headers.append('Access-Control-Allow-Credentials', 'true');

			//headers.append('origin', 'http://192.168.1.75:5173');
			headers.append('Authorization', 'Bearer ' + token);
			const response = await fetch(base_url + url, {
				method: 'POST',
				headers: headers,
				body: JSON.stringify(payload),
				mode: 'cors',
			});
			//console.log(headers);
			if (response.status === 401) {
				localStorage.removeItem('token');
				localStorage.removeItem('user');
				window.location.href = '/';
			}

			if (response.ok) {
				data = await response.json();
				return data;
			} else {
				console.log(response);
				let error = await response.json();
				data = {
					success: false,
					message: error.message,
					result: null,
					errors: error.errors,
					except: error.except,
				};
				return data;
			}
		} else {
			return {
				success: false,
				message: 'Token not found',
				result: null
			}
		}

	} catch (error: any) {
		return {
			success: false,
			message: 'Erreur de connexion',
			result: null,
			errors: "Erreur de connexion à l'api",
		};
	}
}

/**
 * postDataWithFile
 * send http request with file
 * @param url
 * @param payload
 * @returns response
 */
export const postDataWithFile = async (url: string, payload?: any): Promise<ApiResponse> => {
	let response: ApiResponse;
	try {
		// const token = getCookie('token');
		const res = await axios.post(base_url + url, payload, {
			headers: {
				'Content-Type': 'multipart/form-data',
				'Accept': 'application/json',
				'Authorization': 'Bearer ' + token,
			}
		});
		response = res.data;
	} catch (error: any) {
		response = {
			success: false,
			message: 'Erreur de connexion',
			result: null,
			errors: error.response.data
		};
	}

	return response;
}
