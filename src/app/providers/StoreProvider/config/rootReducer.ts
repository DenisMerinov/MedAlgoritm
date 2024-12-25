import { combineReducers } from '@reduxjs/toolkit'
import { rtkApi } from '@/shared/api/rtkApi'
import { StateScheme } from './StateScheme'
import { userReducer } from '@/entities/User'
import { contactsReducer } from '@/features/contactsUs'

const rootReducer = combineReducers({
	user: userReducer,
	contacts: contactsReducer,
	[rtkApi.reducerPath]: rtkApi.reducer,
})

export type RootState = StateScheme
export default rootReducer
