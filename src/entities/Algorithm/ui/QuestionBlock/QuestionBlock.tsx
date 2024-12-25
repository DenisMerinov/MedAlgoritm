import { FC, memo } from 'react'
import classes from './QuestionBlock.module.css'
import { Button, Title, Text, Grid } from '@mantine/core'

type ButtonAnswer = { text: string; onClick: () => void }

interface QuestionBlockProps {
	title: string
	question: string
	buttons?: ButtonAnswer[]
}

export const QuestionBlock: FC<QuestionBlockProps> = memo((props) => {
	const { title, question, buttons } = props

	return (
		<div className={classes.questionWrapper}>
			<Title order={2} className={classes.title}>
				{title}
			</Title>
			<Text size={'lg'} className={classes.text}>
				{question}
			</Text>
			<Grid className={classes.btnBlock}>
				{buttons &&
					buttons.map((el, index) => (
						<Grid.Col key={index} span={{ base: 'auto' }}>
							<Button onClick={el.onClick} fullWidth>
								{el.text}
							</Button>
						</Grid.Col>
					))}
			</Grid>
		</div>
	)
})

QuestionBlock.displayName = 'QuestionBlock'
