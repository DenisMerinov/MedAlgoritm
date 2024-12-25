import { rtkApi } from '@/shared/api/rtkApi'
import { RegistrationUser } from '../model/types/registration'

const registrationApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		registrationUsername: build.mutation<any, RegistrationUser>({
			query: (body) => ({
				url: '/registration',
				method: 'POST',
				body,
			}),
		}),
	}),
})

export const useRegistrationUsername = registrationApi.useRegistrationUsernameMutation
