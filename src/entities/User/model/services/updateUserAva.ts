import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '@/app/providers/StoreProvider/config/rootReducer'
import { $api } from '@/shared/api/api'
import { rtkApi } from '@/shared/api/rtkApi'
export const updateUserAva = createAsyncThunk<
	void,
	{ file: File },
	{ state: RootState; rejectValue: string }
>('user/updateUserAva', async ({ file }, thunkAPI) => {
	const formData = new FormData()
	formData.append('file', file)

	try {
		const response = await $api.post(`/update-ava`, formData, {
			withCredentials: true,
		})

		thunkAPI.dispatch(rtkApi.util?.invalidateTags([{ type: 'userData', id: 'all' }]))

		return response.data
	} catch (error: any) {
		if (error.response && error.response.data) {
			return thunkAPI.rejectWithValue(error.response.data.message)
		} else {
			return thunkAPI.rejectWithValue('Ошибка при загрузке аватара')
		}
	}
})
