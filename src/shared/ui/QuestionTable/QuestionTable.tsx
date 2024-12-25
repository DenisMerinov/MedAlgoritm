import { FC, memo } from 'react'
import { Table } from '@mantine/core'

interface QuestionTableProps {
	title: string
	header: string[]
	body: string[]
	bodyNext?: string[]
}

export const QuestionTable: FC<QuestionTableProps> = memo((props) => {
	const { title, body, bodyNext, header } = props

	return (
		<Table withTableBorder withColumnBorders captionSide={'top'}>
			<Table.Caption>{title}</Table.Caption>
			<Table.Tbody>
				<Table.Tr>
					{header.map((text, index) => (
						<Table.Td key={index}>{text}</Table.Td>
					))}
				</Table.Tr>
				<Table.Tr>
					{body.map((text, index) => (
						<Table.Td key={index}>{text}</Table.Td>
					))}
				</Table.Tr>
				<Table.Tr>
					{bodyNext &&
						bodyNext.map((text, index) => <Table.Td key={index}>{text}</Table.Td>)}
				</Table.Tr>
			</Table.Tbody>
		</Table>
	)
})

QuestionTable.displayName = 'QuestionTable'
