import {
	Grid,
	Title,
	Text,
	TextInput,
	Textarea,
	FileInput,
	Button,
	Group,
	Stack,
	InputBase,
} from '@mantine/core'
import { IconFilePlus } from '@tabler/icons-react'
import { RequirementsText } from '@/shared/ui/RequirementsText/RequirementsText'
import { useForm } from '@mantine/form'
import { ContactsUsRequest } from '../model/types/contactsUs'
import { useSelector } from 'react-redux'
import { getSendTicket } from '../model/selectors/getSendTicket/getSendTicket'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { sendTicket } from '../model/services/sendTicket'
import { Alert } from '@/shared/ui/Alert/Alert'
import { IMaskInput } from 'react-imask'
import { useEffect } from 'react'
export const ContactsForm = () => {
	const { isLoading, success, error } = useSelector(getSendTicket)
	const dispatch = useAppDispatch()

	const form = useForm<ContactsUsRequest>({
		initialValues: {
			email: '',
			fio: '',
			phone: '',
			message: '',
			file: null,
		},

		validate: {
			fio: (value) => (!value.trim() ? 'Заполните поле' : null),
			phone: (value) => (!value.trim() ? 'Заполните номер телефона' : null),
			message: (value) => (!value.trim() ? 'Введите Ваше сообщение' : null),
			email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Введите Email'),
		},
	})

	const handleSendTicket = (values: ContactsUsRequest) => {
		dispatch(sendTicket(values))
	}

	useEffect(() => {
		if (success)
			form.setValues({
				phone: '',
				email: '',
				message: '',
				fio: '',
				file: null,
			})
	}, [success])

	return (
		<Grid mt={20}>
			<Grid.Col span={{ base: 12, md: 6 }}>
				<Title order={2} mb={20}>
					Свяжитесь с нами
				</Title>
				<Text size={'xs'}>
					Пожалуйста, заполните форму обратной связи и наши специалисты оперативно
					обработают Ваше обращение.
				</Text>
			</Grid.Col>
			<Grid.Col span={{ base: 12, md: 6 }}>
				<form onSubmit={form.onSubmit((values) => handleSendTicket(values))}>
					<Stack gap={'xs'}>
						<RequirementsText text={'Все поля, кроме файла обязательны к заполнению'} />
						<TextInput placeholder={'Ваши ФИО'} {...form.getInputProps('fio')} />
						<TextInput placeholder={'Ваш email'} {...form.getInputProps('email')} />
						<InputBase
							component={IMaskInput}
							mask="+7 (000) 000 00 00"
							placeholder={'Ваш номер телефона'}
							{...form.getInputProps('phone')}
						/>
						<Textarea placeholder={'Ваш вопрос'} {...form.getInputProps('message')} />
						<FileInput
							clearable
							placeholder={'Ваш файл'}
							leftSection={<IconFilePlus />}
							{...form.getInputProps('file')}
						/>
						{success && (
							<Alert title={'Поздравляем'} type={'success'}>
								{'Ваше обращение успешно отправлено'}
							</Alert>
						)}
						{error && <Alert title={'Ошибка!'}>{error}</Alert>}
						<Group justify={'right'}>
							<Button type={'submit'} loading={isLoading}>
								Отправить
							</Button>
						</Group>
					</Stack>
				</form>
			</Grid.Col>
		</Grid>
	)
}
