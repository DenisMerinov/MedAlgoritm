import { rtkApi } from '@/shared/api/rtkApi'
import { NewPassword } from '../model/types/lostpassword'

const lostPasswordApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		lostPassword: build.mutation<any, { email: string }>({
			query: (body) => ({
				url: '/lost-password',
				method: 'POST',
				body,
			}),
		}),
		checkLostPassword: build.mutation<any, { code: string }>({
			query: (body) => ({
				url: '/lost-password-check',
				method: 'POST',
				body,
			}),
		}),
		setNewPassword: build.mutation<any, NewPassword>({
			query: (body) => ({
				url: '/new-password',
				method: 'POST',
				body,
			}),
		}),
	}),
})

export const useLostPassword = lostPasswordApi.useLostPasswordMutation
export const useCheckLostPassword = lostPasswordApi.useCheckLostPasswordMutation
export const useSetNewPassword = lostPasswordApi.useSetNewPasswordMutation
