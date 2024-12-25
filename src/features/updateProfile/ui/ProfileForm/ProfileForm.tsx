import { FC, memo, useEffect, useState } from 'react'
import { useGetDataUser } from '@/entities/User'
import { useForm } from '@mantine/form'
import { UpdateUserRequest } from '@/features/updateProfile/model/types/updateProfile'
import { Box, Button, Stack, TextInput } from '@mantine/core'
import { JobsSelect } from '@/entities/Jobs'
import { useUpdateUser } from '../../api/updateUserApi'
import { Alert } from '@/shared/ui/Alert/Alert'

interface ProfileFormProps {
	onClose?: () => void
}
export const ProfileForm: FC<ProfileFormProps> = memo(({ onClose }) => {
	const { data } = useGetDataUser()

	const [updateUser, { isLoading }] = useUpdateUser()

	const [error, setError] = useState<string>('')

	const form = useForm<UpdateUserRequest>({
		initialValues: {
			fio: '',
			work_place: '',
		},
	})

	useEffect(() => {
		if (data) {
			const { work_place, fio, job_id } = data.result

			form.setValues({
				fio: fio,
				work_place: work_place,
				job: job_id,
			})
		}
	}, [data])

	const onChangeCity = (value: number) => {
		form.setFieldValue('city', value)
	}

	const onChangeJob = (value: number) => {
		form.setFieldValue('job', value)
	}

	const handleUpdateUser = async (values: UpdateUserRequest) => {
		console.log('values', values)

		try {
			await updateUser(values).unwrap()
			onClose && onClose()
		} catch (e: any) {
			console.log(e)
			setError(e.data.message)
		}
	}

	if (!data) return null

	const { city_name, job_name } = data.result

	return (
		<form onSubmit={form.onSubmit((values) => handleUpdateUser(values))}>
			<Stack gap={'xl'}>
				<TextInput
					label={'ФИО'}
					placeholder={'Введите ФИО'}
					{...form.getInputProps('fio')}
				/>
				<TextInput
					label={'ФИО'}
					placeholder={'Введите ФИО'}
					{...form.getInputProps('work_place')}
				/>
				{/*			<div>
					<Text fz={'lg'}>{`Текущий город: ${city_name}`}</Text>*/}
				{/*	<CitiesSelect
					label={'Можете изменить город'}
					city={form.values.city ?? 0}
					onChangeCity={onChangeCity}
					error={form.errors.city as string}
				/>*/}
				{/*		</div>*/}
				<JobsSelect
					job={form.values.job ?? 0}
					onChangeJob={onChangeJob}
					error={form.errors.job as string}
				/>
				<Box mt={50}>
					{error && (
						<Alert title={'Ошибка'} onClose={() => setError('')}>
							{error}
						</Alert>
					)}
					<Button fullWidth type={'submit'} loading={isLoading}>
						Изменить
					</Button>
				</Box>
			</Stack>
		</form>
	)
})

ProfileForm.displayName = 'ProfileForm'
