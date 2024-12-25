import { memo, useEffect, useState } from 'react'
import { Button, FileButton } from '@mantine/core'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { updateUserAva } from '@/entities/User/model/services/updateUserAva'
import { Alert } from '@/shared/ui/Alert/Alert'
import { useSelector } from 'react-redux'
import { getUpdateAva } from '@/entities/User/model/selectors/getUpdateAva/getUpdateAva'

export const UpdateAvaButton = memo(() => {
	const dispatch = useAppDispatch()
	const [error, setError] = useState<string>('')

	const updateAva = useSelector(getUpdateAva)

	const resizeAndCropImage = (file: File, maxWidth: number, maxHeight: number): Promise<File> => {
		return new Promise((resolve, reject) => {
			const img = new Image()
			img.onload = () => {
				let { width, height } = img

				// Обрезка до соотношения сторон 1 к 1
				if (width !== height) {
					const minSide = Math.min(width, height)
					width = minSide
					height = minSide
				}

				// Уменьшение размера, если больше максимального
				if (width > maxWidth || height > maxHeight) {
					width = maxWidth
					height = maxHeight
				}

				const canvas = document.createElement('canvas')
				canvas.width = width
				canvas.height = height
				const ctx = canvas.getContext('2d')
				if (ctx) {
					ctx.drawImage(img, 0, 0, width, height)

					canvas.toBlob((blob) => {
						if (blob) {
							resolve(new File([blob], file.name, { type: 'image/png' }))
						} else {
							reject('Ошибка при создании изображения')
						}
					}, 'image/png')
				} else {
					reject('Не удалось создать контекст для canvas')
				}
			}

			img.onerror = () => {
				reject('Ошибка при чтении файла')
			}

			img.src = URL.createObjectURL(file)
		})
	}
	const handlerUpdateAva = async (file: File | null) => {
		if (file) {
			try {
				const resizedFile = await resizeAndCropImage(file, 1000, 1000)
				dispatch(updateUserAva({ file: resizedFile }))
				setError('')
			} catch (error: any) {
				setError(error)
			}
		}
	}

	useEffect(() => {
		if (updateAva.error) setError(updateAva.error)
	}, [updateAva.error])

	console.log('updateAva.error', updateAva.error)

	return (
		<>
			{error && (
				<Alert title={'Ошибка'} onClose={() => setError('')}>
					{error}
				</Alert>
			)}
			{/*<RequirementsText text={'Вес фото должен быть до 3 Мб'} />*/}
			<FileButton onChange={handlerUpdateAva}>
				{(props) => (
					<Button fullWidth loading={updateAva.isLoading} {...props}>
						Изменить фотографию
					</Button>
				)}
			</FileButton>
		</>
	)
})

UpdateAvaButton.displayName = 'UpdateAvaButton'
