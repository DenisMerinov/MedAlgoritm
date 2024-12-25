import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const rtkApi = createApi({
	reducerPath: 'rtkApi',
	tagTypes: ['userData'],
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://medalgoritm.ru/api/v1',
		credentials: 'include',
	}),
	endpoints: () => ({}),
})
