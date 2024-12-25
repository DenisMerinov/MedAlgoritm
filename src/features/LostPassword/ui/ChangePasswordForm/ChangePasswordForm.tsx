import { memo, useEffect, useState } from 'react'
import { Button, PasswordInput, Stack, Title, Text, Loader, Center, Modal } from '@mantine/core'
import { Icon } from '@/shared/ui/Icon/Icon'
import { IconLockSquareRoundedFilled } from '@tabler/icons-react'
import { useNavigate, useParams } from 'react-router-dom'
import {
	useCheckLostPassword,
	useSetNewPassword,
} from '@/features/LostPassword/api/lostPasswordApi'
import { getRouteAuth, getRouteLostPassword, getRouteMain } from '@/shared/consts/router'
import { Alert } from '@/shared/ui/Alert/Alert'
import { useForm } from '@mantine/form'
import { NewPassword } from '@/features/LostPassword/model/types/lostpassword'
import { useDisclosure } from '@mantine/hooks'

export const ChangePasswordForm = memo(() => {
	const { id } = useParams<{ id: string }>()
	const [textError, setTextError] = useState<string>('')
	const navigate = useNavigate()
	const [checkLostPassword, { isLoading, error }] = useCheckLostPassword()
	const [setNewPassword, { isLoading: isLoadingNewPassword }] = useSetNewPassword()

	const [opened, { close, open }] = useDisclosure()

	const fetchCheckLp = async () => {
		if (!id) {
			goToAuth()
			return
		}

		try {
			await checkLostPassword({ code: id }).unwrap()
		} catch (e: any) {
			setTextError(e.data.message)
		}
	}

	const handlerChangePassword = async (values: NewPassword) => {
		try {
			await setNewPassword(values).unwrap()
			open()
		} catch (e: any) {
			setTextError(e.data.message)
		}
	}

	const form = useForm<NewPassword>({
		initialValues: {
			password: '',
			code: id ?? '',
			repeatPassword: '',
		},

		validate: {
			password: (value) => (value.length < 8 ? 'Пароль должен быть больше 8 символов' : null),
			repeatPassword: (value, values) =>
				value !== values.password ? 'Пароли должны совпадать' : null,
		},
		transformValues: (values: NewPassword) => ({
			password: values.password,
			code: values.code,
		}),
	})

	const goToLostPassword = () => {
		navigate(getRouteLostPassword())
	}

	const goToAuth = () => {
		navigate(getRouteAuth())
	}

	useEffect(() => {
		fetchCheckLp()
	}, [])

	if (isLoading) {
		return (
			<Center>
				<Loader type={'dots'} size={'xl'} />
			</Center>
		)
	}

	if (error) {
		return (
			<Alert title={'Ошибка!'}>
				<Stack>
					<Text>{textError}</Text>
					<Button fullWidth color={'dark'} onClick={goToLostPassword}>
						К восстановлению пароля
					</Button>
				</Stack>
			</Alert>
		)
	}

	return (
		<form onSubmit={form.onSubmit((values) => handlerChangePassword(values))}>
			<Stack>
				<Title>Восстановление пароля</Title>
				<PasswordInput
					label={'Новый пароль'}
					placeholder={'Введите новый пароль'}
					leftSection={
						<Icon>
							<IconLockSquareRoundedFilled />
						</Icon>
					}
					{...form.getInputProps('password')}
				/>
				<PasswordInput
					label={'Повторите новый пароль'}
					placeholder={'Повторите новый пароль'}
					leftSection={
						<Icon>
							<IconLockSquareRoundedFilled />
						</Icon>
					}
					{...form.getInputProps('repeatPassword')}
				/>
				<Button type={'submit'} color={'dark'} loading={isLoadingNewPassword}>
					Изменить пароль
				</Button>
			</Stack>
			<Modal opened={opened} onClose={close} title={'Поздравляем'} centered>
				<Text>Вы успешно сменили пароль</Text>
				<Button variant={'outline'} mt={30} fullWidth onClick={goToAuth}>
					К авторизации
				</Button>
			</Modal>
		</form>
	)
})

ChangePasswordForm.displayName = 'ChangePasswordForm'
