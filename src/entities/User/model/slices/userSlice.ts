import { createSlice } from '@reduxjs/toolkit'
import { UserStateScheme } from '../types/userScheme'
import { userApi } from '@/entities/User/api/userApi'
import { updateUserAva } from '@/entities/User/model/services/updateUserAva'

const initialState: UserStateScheme = {
	_inited: false,
	isAuth: false,
	updateAva: {
		error: '',
		isLoading: false,
	},
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(updateUserAva.pending, (state) => {
				state.updateAva.error = ''
				state.updateAva.isLoading = true
			})
			.addCase(updateUserAva.fulfilled, (state) => {
				state.updateAva.isLoading = false
			})
			.addCase(updateUserAva.rejected, (state, { payload }) => {
				state.updateAva.error = payload || 'Произошла неизвестная ошибка'
				state.updateAva.isLoading = false
			})

		builder
			.addMatcher(userApi.endpoints.isAuth.matchFulfilled, (state) => {
				state._inited = true
				state.isAuth = true
			})
			.addMatcher(userApi.endpoints.isAuth.matchRejected, (state) => {
				state._inited = true
			})
			.addMatcher(userApi.endpoints.authByUsername.matchFulfilled, (state) => {
				state.isAuth = true
			})
			.addMatcher(userApi.endpoints.logoutUser.matchFulfilled, (state) => {
				state.isAuth = false
			})
	},
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
