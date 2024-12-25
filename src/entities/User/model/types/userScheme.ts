import exp from 'constants'

export interface UserStateScheme {
	_inited: boolean
	isAuth: boolean
	updateAva: UpdateAva
}

export interface UserResponse {
	status: string
	result: User
}

export interface User {
	fio: string
	email: string
	email_verified_at: boolean
	created_at: string
	updated_at: string
	ava: string
	city_id: number
	job_id: number
	work_place: string
	job_name: string
	city_name: string
}

export interface UpdateAva {
	isLoading: boolean
	error: string
}
