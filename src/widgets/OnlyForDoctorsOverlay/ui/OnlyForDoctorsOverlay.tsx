import { FC, memo, ReactNode, useState } from 'react'
import classes from './OnlyForDoctorsOverlay.module.css'
import { LOCAL_STORAGE_ONLY_DOC } from '@/shared/consts/localstorage'
import { Button, Grid, Highlight, Modal, Stack, Text } from '@mantine/core'
import { RequirementsText } from '@/shared/ui/RequirementsText/RequirementsText'

export interface OnlyForDoctorsOverlayProps {
	children: ReactNode
}

const fallback = localStorage.getItem(LOCAL_STORAGE_ONLY_DOC)
export const OnlyForDoctorsOverlay: FC<OnlyForDoctorsOverlayProps> = memo(({ children }) => {
	const [onlyDoc, setOnlyDoc] = useState<boolean>(!!fallback)

	const handleConfirm = () => {
		setOnlyDoc(true)
		localStorage.setItem(LOCAL_STORAGE_ONLY_DOC, 'true')
	}

	const handleCancel = () => {
		window.location.href = 'https://www.google.com/'
	}

	return (
		<>
			<Modal
				opened={!onlyDoc}
				onClose={() => console.log('Выберите вариант')}
				closeOnClickOutside={false}
				centered
				size={'lg'}
				withCloseButton={false}
				overlayProps={{
					blur: 8,
				}}
				radius={'lg'}
			>
				<Stack>
					<RequirementsText text={'Этот сайт предназначен только для мед. работников'} />
					<Text ta={'justify'} fz={'sm'}>
						Я понимаю, что информация на данном сайте предназначена только для
						специалистов здравоохранения, и подтверждаю, что являюсь медицинским или
						фармацевтическим работником/студентом соответствующего учреждения
					</Text>
					<Grid>
						<Grid.Col span={{ base: 12 }}>
							<Button color={'green.9'} fullWidth onClick={handleConfirm}>
								Подтверждаю
							</Button>
						</Grid.Col>
						{/*<Grid.Col span={{ base: 12, xs: 6 }}>
							<Button color={'gray'} fullWidth onClick={handleCancel}>
								Я не являюсь мед. работником
							</Button>
						</Grid.Col>*/}
					</Grid>
				</Stack>
			</Modal>
			{children}
		</>
	)
})

OnlyForDoctorsOverlay.displayName = 'OnlyForDoctorsOverlay'
