import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { PageCentered } from '@/widgets/PageCentered'
import { Card, Stack, Button, Modal } from '@mantine/core'
import { getRouteAuth, getRouteRegistration } from '@/shared/consts/router'
import { SendEmailForm } from '@/features/LostPassword'
import { useDisclosure } from '@mantine/hooks'

const LostPasswordPage = () => {
	const navigate = useNavigate()

	const goToAuth = () => {
		navigate(getRouteAuth())
	}

	const goToRegistration = () => {
		navigate(getRouteRegistration())
	}

	return (
		<PageCentered>
			<Card radius={'lg'} shadow={'lg'} withBorder maw={600} w={'100%'}>
				<SendEmailForm />
				<Stack mt={20}>
					<div>
						<span>Есть аккаунта?</span>

						<Button variant={'subtle'} size={'compact-md'} onClick={goToAuth} ml={10}>
							Войти
						</Button>
					</div>
					<div>
						<span>Нет аккаунта?</span>

						<Button
							variant={'subtle'}
							size={'compact-md'}
							onClick={goToRegistration}
							ml={10}
						>
							Зарегистрироваться
						</Button>
					</div>
				</Stack>
			</Card>
		</PageCentered>
	)
}

export default memo(LostPasswordPage)
