import { createSlice } from '@reduxjs/toolkit'
import { ContactsStateScheme } from '../types/contactsUs'
import { sendTicket } from '../services/sendTicket'

const initialState: ContactsStateScheme = {
	sendTicket: {
		isLoading: false,
		success: false,
	},
}

export const contactsSlice = createSlice({
	name: 'contacts',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(sendTicket.pending, (state) => {
			state.sendTicket.isLoading = true
			state.sendTicket.error = undefined
			state.sendTicket.success = false
		})
		builder.addCase(sendTicket.fulfilled, (state) => {
			state.sendTicket.isLoading = false
			state.sendTicket.success = true
		})
		builder.addCase(sendTicket.rejected, (state, { payload }) => {
			state.sendTicket.error = payload
			state.sendTicket.isLoading = false
			state.sendTicket.success = false
		})
	},
})

export const { actions: contactsActions } = contactsSlice
export const { reducer: contactsReducer } = contactsSlice
