import { UserStateScheme } from '@/entities/User'
import { ContactsStateScheme } from '@/features/contactsUs'

export interface StateScheme {
	user: UserStateScheme
	contacts: ContactsStateScheme
}
