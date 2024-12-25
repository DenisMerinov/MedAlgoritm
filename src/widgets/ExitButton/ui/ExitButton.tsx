import { FC, memo } from 'react'
import { Button } from '@mantine/core'
import { useLazyLogoutUser } from '@/entities/User'

interface ExitButtonProps {
	onClose?: () => void
}

export const ExitButton: FC<ExitButtonProps> = memo(({ onClose }) => {
	const [logoutUser, { isLoading }] = useLazyLogoutUser()

	const handlerLogout = async () => {
		try {
			await logoutUser().unwrap()
			onClose && onClose()
		} catch (e: any) {
			console.log(e.data.message)
		}
	}

	return (
		<Button variant={'outline'} loading={isLoading} onClick={handlerLogout} fullWidth>
			Выход
		</Button>
	)
})

ExitButton.displayName = 'ExitButton'
