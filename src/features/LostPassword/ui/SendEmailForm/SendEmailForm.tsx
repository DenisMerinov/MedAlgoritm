import { Button, Modal, Stack, TextInput, Title } from '@mantine/core'
import { Icon } from '@/shared/ui/Icon/Icon'
import { IconMailFilled } from '@tabler/icons-react'
import { memo, useState } from 'react'
import { useLostPassword } from '../../api/lostPasswordApi'
import { useForm } from '@mantine/form'
import { Alert } from '@/shared/ui/Alert/Alert'
import { useDisclosure } from '@mantine/hooks'

export const SendEmailForm = memo(() => {
	const [lostPassword, { isLoading }] = useLostPassword()
	const [error, setError] = useState<string>('')
	const form = useForm<{ email: string }>({
		initialValues: { email: '' },

		validate: {
			email: (value) => (/^\S+@\S+$/.test(value.trim()) ? null : 'Неверный формат email'),
		},
	})
	const [opened, { close, open }] = useDisclosure()

	const handlerLostPassword = async (values: { email: string }) => {
		setError('')
		try {
			await lostPassword(values).unwrap()

			open()
		} catch (e: any) {
			setError(e.data.message)
		}
	}

	return (
		<form onSubmit={form.onSubmit((values) => handlerLostPassword(values))}>
			<Stack>
				{error && (
					<Alert title={'Ошибка!'} onClose={setError}>
						{error}
					</Alert>
				)}
				<Title order={3}>Восстановление доступа</Title>
				<TextInput
					label={'E-mail'}
					placeholder={'Введите e-mail'}
					leftSection={
						<Icon>
							<IconMailFilled />
						</Icon>
					}
					{...form.getInputProps('email')}
				/>
				<Button loading={isLoading} type={'submit'}>
					Восстановить доступ
				</Button>
			</Stack>
			<Modal opened={opened} onClose={close} title={'Восстановление пароля'} centered>
				{`На вашу почту ${form.values.email} отправлено письмо для смены пароля.`}
			</Modal>
		</form>
	)
})

SendEmailForm.displayName = 'SendEmailForm'
