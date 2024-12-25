import { StateScheme } from '@/app/providers/StoreProvider/config/StateScheme'

export const getInited = (state: StateScheme) => {
	return state.user._inited
}
