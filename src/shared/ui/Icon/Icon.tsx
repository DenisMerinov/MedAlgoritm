import { FC, memo, ReactNode } from 'react'
import classes from './Icon.module.css'

interface IconProps {
	children: ReactNode
}

export const Icon: FC<IconProps> = memo((props) => {
	const { children } = props

	return <div className={classes.icon}>{children}</div>
})

Icon.displayName = 'Icon'
