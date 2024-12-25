import { FC, memo, ReactNode } from 'react'
import classes from './ResultBlock.module.css'
import { Title, Text, Stack } from '@mantine/core'

interface ResultBlockProps {
	result: ReactNode[]
	additionalText?: string
}

export const ResultBlock: FC<ResultBlockProps> = memo((props) => {
	const { result, additionalText } = props

	return (
		<div className={classes.resultBlock}>
			<Stack gap={'xl'}>
				<Title order={2} className={classes.title}>
					Результат
				</Title>
				<>{additionalText}</>
				{result.map((el, index) => (
					<div key={index}>{el}</div>
				))}
			</Stack>
		</div>
	)
})

ResultBlock.displayName = 'ResultBlock'
