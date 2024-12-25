export interface ContactsUsRequest {
	fio: string
	email: string
	phone: string
	message: string
	file: File | null
}

export interface ContactsStateScheme {
	sendTicket: {
		isLoading: boolean
		error?: string
		success: boolean
	}
}
