import { memo, useState } from 'react'
import classes from './AuthModal.module.css'
import { Modal, Button, Stack } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { getRouteMain } from '@/shared/consts/router'
import { LoginForm } from '@/features/authByUsername'
import { SendEmailForm } from '@/features/LostPassword'

export const AuthModal = memo(() => {
	const navigate = useNavigate()

	const [authScreen, setAuthScreen] = useState<'auth' | 'reg' | 'lostpass'>('auth')

	const handlerScreenAuth = () => {
		setAuthScreen('auth')
	}
	const handlerScreenReg = () => {
		setAuthScreen('reg')
	}
	const handlerScreenLostPass = () => {
		setAuthScreen('lostpass')
	}

	const handleClose = () => {
		navigate(getRouteMain())
	}

	const renderButton = (text: string, onClick: () => void) => {
		return (
			<Button variant={'subtle'} size={'compact-md'} onClick={onClick} ml={10}>
				{text}
			</Button>
		)
	}

	const renderAuthScreen = () => {
		switch (authScreen) {
			case 'auth':
				return <LoginForm />
			case 'reg':
				return null
			case 'lostpass':
				return <SendEmailForm />
		}
	}

	const renderAuthNavigation = () => {
		switch (authScreen) {
			case 'auth':
				return (
					<Stack mt={20}>
						<div>
							<span>Нет аккаунта?</span>
							{renderButton('Зарегистрироваться', handlerScreenReg)}
						</div>
						<div>
							<span>Забыли пароль?</span>
							{renderButton('Восстановить', handlerScreenLostPass)}
						</div>
					</Stack>
				)
			case 'reg':
				return (
					<Stack mt={20}>
						<div>
							<span>Есть аккаунта?</span>
							{renderButton('Войти', handlerScreenAuth)}
						</div>
						<div>
							<span>Забыли пароль?</span>
							{renderButton('Восстановить', handlerScreenLostPass)}
						</div>
					</Stack>
				)
			case 'lostpass':
				return (
					<Stack mt={20}>
						<div>
							<span>Есть аккаунта?</span>
							{renderButton('Войти', handlerScreenAuth)}
						</div>
						<div>
							<span>Нет аккаунта?</span>
							{renderButton('Зарегистрироваться', handlerScreenReg)}
						</div>
					</Stack>
				)
		}
	}

	return (
		<Modal
			size={'lg'}
			centered
			radius={'lg'}
			opened={true}
			onClose={handleClose}
			closeOnClickOutside={false}
			className={classes.authModal}
			overlayProps={{
				blur: 8,
			}}
			zIndex={9999999}
		>
			{renderAuthScreen()}
			{renderAuthNavigation()}
		</Modal>
	)
})

AuthModal.displayName = 'AuthModal'
