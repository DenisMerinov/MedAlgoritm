import { FC } from 'react'
import classes from './RequirementsText.module.css'
import { Group, Text } from '@mantine/core'
import { IconAlertCircleFilled } from '@tabler/icons-react'

interface RequirementsTextProps {
	text: string
}

export const RequirementsText: FC<RequirementsTextProps> = (props) => {
	const { text } = props

	return (
		<Group wrap={'nowrap'} className={classes.requirementsText}>
			<IconAlertCircleFilled size={20} stroke={1} />
			<Text>{text}</Text>
		</Group>
	)
}
