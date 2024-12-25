import { memo, useEffect } from 'react'
import { getRouteLostPassword, getRouteMain, getRouteRegistration } from '@/shared/consts/router'
import { Button, Stack, Card } from '@mantine/core'
import { LoginForm } from '@/features/authByUsername'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getIsAuth } from '@/entities/User'
import { PageCentered } from '@/widgets/PageCentered'

const AuthPage = () => {
	const navigate = useNavigate()

	const isAuth = useSelector(getIsAuth)

	useEffect(() => {
		if (isAuth) navigate(getRouteMain())
	}, [isAuth])

	const goToRegistration = () => {
		navigate(getRouteRegistration())
	}

	const goToLostPassword = () => {
		navigate(getRouteLostPassword())
	}

	return (
		<PageCentered>
			<Card radius={'lg'} shadow={'lg'} withBorder maw={600} w={'100%'}>
				<LoginForm />
				<Stack mt={20}>
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

export default memo(AuthPage)
