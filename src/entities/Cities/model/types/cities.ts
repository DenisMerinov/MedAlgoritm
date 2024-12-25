export interface CitiesResponse {
	status: string
	result: {
		list: City[]
	}
}

export interface City {
	id: number
	city: string
	region: string
	district: string
}
