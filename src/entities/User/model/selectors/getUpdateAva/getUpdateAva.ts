import { StateScheme } from '@/app/providers/StoreProvider/config/StateScheme'

export const getUpdateAva = (state: StateScheme) => {
	return state.user.updateAva
}
