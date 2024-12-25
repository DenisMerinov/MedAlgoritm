import { FC, memo, ReactNode } from 'react'
import { Accordion } from '@mantine/core'

interface AccordionItemProps {
	header: string
	Tables: ReactNode[]
}

export const AccordionItem: FC<AccordionItemProps> = memo(({ Tables, header }) => {
	return (
		<Accordion.Item value={header}>
			<Accordion.Control>{header}</Accordion.Control>
			<Accordion.Panel>{Tables.map((table) => table)}</Accordion.Panel>
		</Accordion.Item>
	)
})

AccordionItem.displayName = 'AccordionItem'
