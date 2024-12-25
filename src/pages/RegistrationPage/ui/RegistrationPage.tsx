import { Stack, Button, Card } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { getRouteAuth, getRouteLostPassword } from '@/shared/consts/router'
import { RegistrationForm } from '@/features/RegistrationService'
import { PageCentered } from '@/widgets/PageCentered'
import { memo } from 'react'

const RegistrationPage = () => {
	const navigate = useNavigate()

	const goToAuth = () => {
		navigate(getRouteAuth())
	}

	const goToLostPassword = () => {
		navigate(getRouteLostPassword())
	}

	return (
		<PageCentered>
			<Card radius={'lg'} shadow={'lg'} withBorder maw={600} w={'100%'}>
				<RegistrationForm />
				<Stack mt={20}>
					<div>
						<span>Есть аккаунта?</span>
						<Button variant={'subtle'} size={'compact-md'} onClick={goToAuth} ml={10}>
							Войти
						</Button>
					</div>
					<div>
						<span>Забыли пароль?</span>
						<Button
							variant={'subtle'}
							size={'compact-md'}
							onClick={goToLostPassword}
							ml={10}
						>
							Восстановить
						</Button>
					</div>
				</Stack>
			</Card>
		</PageCentered>
	)
}

export default memo(RegistrationPage)
