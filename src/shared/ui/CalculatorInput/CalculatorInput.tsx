import { FC, memo, ReactNode } from 'react'
import classes from './CalculatorInput.module.css'
import { Group, Text } from '@mantine/core'
import classNames from 'classnames'

interface CalculatorInputProps {
	text: string
	additional?: boolean
	Component: ReactNode
	ComponentOptional?: ReactNode
}

export const CalculatorInput: FC<CalculatorInputProps> = memo((props) => {
	const { text, Component, ComponentOptional, additional = false } = props

	return (
		<Group>
			<Text className={classNames(classes.label, {}, additional && classes.labelAdditional)}>
				{text}
			</Text>
			{Component}
			{ComponentOptional && ComponentOptional}
		</Group>
	)
})

CalculatorInput.displayName = 'CalculatorInput'
