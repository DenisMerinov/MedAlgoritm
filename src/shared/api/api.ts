import axios from 'axios'

export const $api = axios.create({
	baseURL: 'https://medalgoritm.ru/api/v1',
	withCredentials: true,
})
