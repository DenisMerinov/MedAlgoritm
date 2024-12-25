import { FC } from 'react'
import { UnstyledButton, UnstyledButtonProps } from '@mantine/core'
import classes from './Button.module.css'
import classNames from 'classnames'
interface ButtonProps extends UnstyledButtonProps {
	text: string
	onClick?: (arg?: any) => void
	active?: boolean
}
export const Button: FC<ButtonProps> = (props) => {
	const { active, text, onClick, ...otherProps } = props

	const mods = {
		[classes.active]: active,
	}

	return (
		<UnstyledButton className={classNames(classes.btn, mods)} onClick={onClick} {...otherProps}>
			{text}
		</UnstyledButton>
	)
}
