import { StateScheme } from '@/app/providers/StoreProvider/config/StateScheme'

export const getSendTicket = (state: StateScheme) => {
	return state.contacts.sendTicket
}
