import { rtkApi } from '@/shared/api/rtkApi'
import { AuthUsername } from '@/features/authByUsername/model/types/loginForm'
import { UserResponse } from '../model/types/userScheme'

export const userApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		isAuth: build.query<void, void>({
			query: () => ({
				url: '/is-auth',
			}),
		}),
		authByUsername: build.mutation<void, AuthUsername>({
			query: (body) => ({
				url: '/auth',
				method: 'POST',
				body,
			}),
		}),
		logoutUser: build.query<void, void>({
			query: () => ({
				url: '/logout',
			}),
		}),
		getDataUser: build.query<UserResponse, void>({
			query: () => ({
				url: '/get-data',
			}),
			providesTags: () => [{ type: 'userData', id: 'all' }],
		}),
	}),
})

export const useIsAuth = userApi.useIsAuthQuery

export const useAuthByUsername = userApi.useAuthByUsernameMutation

export const useLazyLogoutUser = userApi.useLazyLogoutUserQuery

export const useGetDataUser = userApi.useGetDataUserQuery
