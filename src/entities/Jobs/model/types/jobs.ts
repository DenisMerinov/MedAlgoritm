export interface JobsResponse {
	status: string
	result: {
		list: Jobs[]
	}
}

export interface Jobs {
	value: 1
	label: string
}
