import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { RootState } from '@/app/providers/StoreProvider/config/rootReducer'
import { ContactsUsRequest } from '@/features/contactsUs/model/types/contactsUs'
import { $api } from '@/shared/api/api'

export const sendTicket = createAsyncThunk<
	void,
	ContactsUsRequest,
	{ state: RootState; rejectValue: string }
>('contacts/sendTicket', async ({ file, message, fio, phone, email }, thunkAPI) => {
	const formData = new FormData()

	formData.append('fio', fio)
	formData.append('email', email)
	formData.append('phone', phone)
	formData.append('message', message)
	if (file) formData.append('file', file)

	try {
		const response = await $api.post(`/ticket-send`, formData)

		return response.data.result
	} catch (error) {
		let errorMessage = 'Произошла неизвестная ошибка'

		if (error && error instanceof AxiosError) {
			errorMessage = error.response?.data.message || error.message
		}

		console.log(errorMessage)
		return thunkAPI.rejectWithValue(errorMessage)
	}
})
