import { memo } from 'react'
import { Button, Drawer } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { ProfileForm } from '../ProfileForm/ProfileForm'

export const UpdateProfileButton = memo(() => {
	const [opened, { open, close }] = useDisclosure()

	return (
		<>
			<Button onClick={open}>Изменить данные</Button>
			<Drawer opened={opened} onClose={close} position={'right'} size={'xl'}>
				<ProfileForm onClose={close} />
			</Drawer>
		</>
	)
})

UpdateProfileButton.displayName = 'UpdateProfileButton'
