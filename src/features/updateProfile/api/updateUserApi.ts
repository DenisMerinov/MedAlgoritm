import { rtkApi } from '@/shared/api/rtkApi'
import { UpdateUserRequest } from '../model/types/updateProfile'

const updateUserApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		updateUser: build.mutation<any, UpdateUserRequest>({
			query: (body) => ({
				url: '/update-data',
				method: 'POST',
				body,
			}),
			invalidatesTags: [{ type: 'userData', id: 'all' }],
		}),
	}),
})

export const useUpdateUser = updateUserApi.useUpdateUserMutation
