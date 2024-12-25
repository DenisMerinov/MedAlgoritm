import { FC, ReactNode } from 'react'
import classes from './Alert.module.css'
import { memo } from 'react'
import { Alert as AlertMantine } from '@mantine/core'
interface AlertProps {
	children: ReactNode
	title: string
	onClose?: (value: string) => void
	type?: 'error' | 'success'
}

export const Alert: FC<AlertProps> = memo((props) => {
	const { title, children, onClose, type = 'error' } = props

	return (
		<AlertMantine
			className={classes.alert}
			variant="light"
			color={type === 'error' ? 'red' : 'green'}
			withCloseButton={!!onClose}
			title={title}
			onClose={onClose && (() => onClose(''))}
		>
			{children}
		</AlertMantine>
	)
})

Alert.displayName = 'Alert'
