import { memo, useState } from 'react'
import { useForm } from '@mantine/form'
import { AuthUsername } from '../../model/types/loginForm'
import { Button, PasswordInput, Stack, Text, TextInput, Title } from '@mantine/core'
import { Alert } from '@/shared/ui/Alert/Alert'
import { IconLockSquareRoundedFilled, IconMailFilled } from '@tabler/icons-react'
import { Icon } from '@/shared/ui/Icon/Icon'
import { useAuthByUsername } from '@/entities/User'
import { useLocation, useNavigate } from 'react-router-dom'

export const LoginForm = memo(() => {
	const [error, setError] = useState<string>('')

	const [authByUsername, { isLoading }] = useAuthByUsername()

	const navigate = useNavigate()
	const location = useLocation()
	const from = location.state?.from?.pathname || '/'

	const form = useForm<AuthUsername>({
		initialValues: {
			login: '',
			password: '',
		},

		validate: (values) => {
			const errors: Partial<Record<keyof AuthUsername, string>> = {}

			if (!values.login.trim()) {
				errors.login = 'Поле e-mail должно быть заполнено'
			}

			if (!/^\S+@\S+$/.test(values.login.trim())) {
				errors.login = 'В поле должен быть указан e-mail'
			}

			if (values.password.trim().length < 8) {
				errors.password = 'Пароль должен быть не менее 8 символов'
			}

			return errors
		},
	})

	const handleAuth = async (values: AuthUsername) => {
		setError('')
		try {
			await authByUsername(values).unwrap()
			navigate(from)
		} catch (e: any) {
			setError(e.data.message)
		}
	}

	return (
		<>
			<Title order={2} mb={10}>
				Войдите в аккаунт
			</Title>
			<Text mb={10}>
				Чтобы воспользоваться алгоритмами, необходимо войти в личный кабинет.
			</Text>
			<form onSubmit={form.onSubmit((values) => handleAuth(values))}>
				<Stack>
					{error && (
						<Alert title={'Ошибка авторизации!'} onClose={setError}>
							{error}
						</Alert>
					)}
					<TextInput
						label={'E-mail'}
						placeholder={'Введите e-mail'}
						leftSection={
							<Icon>
								<IconMailFilled />
							</Icon>
						}
						{...form.getInputProps('login')}
					/>
					<PasswordInput
						label={'Пароль'}
						placeholder={'Введите пароль'}
						leftSection={
							<Icon>
								<IconLockSquareRoundedFilled />
							</Icon>
						}
						{...form.getInputProps('password')}
					/>
					<Button type={'submit'} fullWidth mt={'lg'} loading={isLoading}>
						Войти
					</Button>
				</Stack>
			</form>
		</>
	)
})

LoginForm.displayName = 'LoginForm'
