import { Anchor, Box, Modal, PasswordInput, Stack, Text, Title } from '@mantine/core'
import { Button, Checkbox, TextInput } from '@mantine/core'
import { IconBuildingHospital, IconLock, IconMail, IconUser } from '@tabler/icons-react'
import { Icon } from '@/shared/ui/Icon/Icon'
import { memo, useState } from 'react'
import { useForm } from '@mantine/form'
import { RegistrationUser } from '../../model/types/registration'
import { Alert } from '@/shared/ui/Alert/Alert'
import { useRegistrationUsername } from '../../api/registrationApi'
import { RequirementsText } from '@/shared/ui/RequirementsText/RequirementsText'
import { CitiesSelect } from '@/entities/Cities'
import { JobsSelect } from '@/entities/Jobs'
import { useDisclosure } from '@mantine/hooks'
import { useNavigate } from 'react-router-dom'
import { getRouteAuth } from '@/shared/consts/router'

export const RegistrationForm = memo(() => {
	const [acceptOffer, setAcceptOffer] = useState<boolean>(true)
	const [acceptOffer2, setAcceptOffer2] = useState<boolean>(true)
	const [error, setError] = useState<string>('')

	const navigate = useNavigate()

	const [registrationUsername, { isLoading }] = useRegistrationUsername()

	const [opened, { open, close }] = useDisclosure()

	const form = useForm<RegistrationUser>({
		initialValues: {
			password: '',
			email: '',
			repeat_password: '',
			fio: '',
			city: 0,
			job: 0,
			work_place: '',
		},

		transformValues: (values: RegistrationUser) => ({
			fio: values.fio,
			email: values.email,
			password: values.password,
			city: values.city,
			job: values.job,
			work_place: values.work_place,
		}),

		validate: (values) => {
			const errors: Partial<Record<keyof RegistrationUser, string>> = {}

			if (!values.email.trim()) {
				errors.email = 'Поле должно быть заполненно'
			}

			if (!/^\S+@\S+$/.test(values.email.trim())) {
				errors.email = 'В поле должен быть указан e-mail'
			}

			if (values.password.trim().length < 8) {
				errors.password = 'Пароль должен быть не менее 8 символов'
			}

			if (values.password.trim() !== values.repeat_password?.trim()) {
				errors.password = 'Пароли не совпадают'
				errors.repeat_password = 'Пароли не совпадают'
			}

			if (values.repeat_password && values.repeat_password.trim().length < 8) {
				errors.repeat_password = 'Пароль должен быть не менее 8 символов'
			}

			if (!values.fio.trim()) {
				errors.fio = 'Поле должно быть заполненно'
			}

			if (!values.city) {
				errors.city = 'Выберите город из списка'
			}

			if (!values.job) {
				errors.job = 'Выберит специальность'
			}

			if (!values.work_place) {
				errors.work_place = 'Выбрите учреждение'
			}

			return errors
		},
	})

	const handleRegistration = async (values: RegistrationUser) => {
		setError('')
		try {
			await registrationUsername(values).unwrap()
			open()
		} catch (e: any) {
			setError(e.data.message)
		}
	}

	const goToAuth = () => {
		navigate(getRouteAuth())
	}

	const onChangeCity = (value: number) => {
		form.setFieldValue('city', value)
	}

	const onChangeJob = (value: number) => {
		form.setFieldValue('job', value)
	}

	return (
		<>
			<Title order={2} mb={10}>
				Регистрация
			</Title>
			<Box mb={10}>
				<RequirementsText text={'Все поля обязательны к заполнению'} />
			</Box>

			<form onSubmit={form.onSubmit((values) => handleRegistration(values))}>
				<Stack>
					<TextInput
						label={'Ваше ФИО'}
						placeholder={'Введите ФИО'}
						{...form.getInputProps('fio')}
						leftSection={
							<Icon>
								<IconUser />
							</Icon>
						}
					/>
					<TextInput
						label={'E-mail'}
						placeholder={'Введите e-mail'}
						{...form.getInputProps('email')}
						leftSection={
							<Icon>
								<IconMail />
							</Icon>
						}
					/>

					<CitiesSelect
						city={form.values.city}
						onChangeCity={onChangeCity}
						error={form.errors.city as string}
					/>
					<JobsSelect
						job={form.values.job}
						onChangeJob={onChangeJob}
						error={form.errors.job as string}
					/>
					<TextInput
						label={'Учреждение'}
						placeholder={'Введите название учреждения'}
						{...form.getInputProps('work_place')}
						leftSection={
							<Icon>
								<IconBuildingHospital />
							</Icon>
						}
					/>
					<PasswordInput
						label={'Пароль'}
						placeholder={'Введите пароль'}
						{...form.getInputProps('password')}
						leftSection={
							<Icon>
								<IconLock />
							</Icon>
						}
					/>
					<PasswordInput
						label={'Повторите пароль'}
						placeholder={'Повторите пароль'}
						{...form.getInputProps('repeat_password')}
						leftSection={
							<Icon>
								<IconLock />
							</Icon>
						}
					/>

					<Checkbox
						onClick={(event) => setAcceptOffer(!event.currentTarget.checked)}
						label={
							<>
								Я согласен (-а) с{' '}
								<Anchor href="" target="_blank" inherit>
									политикой обработки персональных данных
								</Anchor>
							</>
						}
					/>
					<Checkbox
						onClick={(event) => setAcceptOffer2(!event.currentTarget.checked)}
						label={'Я являюсь медицинским сотрудником'}
					/>
					{error && (
						<Alert title={'Ошибка при регистрации!'} onClose={setError}>
							{error}
						</Alert>
					)}
					<Button
						color={'dark'}
						disabled={acceptOffer || acceptOffer2}
						type={'submit'}
						loading={isLoading}
					>
						Зарегистрироваться
					</Button>
				</Stack>
			</form>

			<Modal opened={opened} onClose={close} centered title={'Поздравляем!'}>
				<Text>
					Вы зарегистрированы. На вашу почту должно прийти письмо, для активации аккаунта
					подтвердите его.
				</Text>
				<Button onClick={goToAuth} variant={'outline'} mt={30} fullWidth>
					К авторизации
				</Button>
			</Modal>
		</>
	)
})

RegistrationForm.displayName = 'RegistrationForm'
