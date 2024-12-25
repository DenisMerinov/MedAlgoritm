import { Accordion } from '@mantine/core'
import { useEffect, useState } from 'react'
import { useMediaQuery } from '@mantine/hooks'
import { AboutUsPageInfo } from '../ui/AboutUsPageInfo/AboutUsPageInfo'
import classes from './AboutUsPage.module.css'
import { ContactsForm } from '@/features/contactsUs'
import { Contacts } from '@/entities/Contacts'

const accordionList = [
	{
		label: 'О нас',
		value: '1',
		Component: <AboutUsPageInfo />,
	},
	{
		label: 'Свяжитесь с нами',
		value: '2',
		Component: <ContactsForm />,
	},
	{
		label: 'Контакты',
		value: '3',
		Component: <Contacts />,
	},
]

const AboutUsPage = () => {
	const [accordionState, setAccordionState] = useState<string[]>([])
	const md = useMediaQuery('(min-width: 62em)')

	const onChangeAccordion = (value: string[]) => {
		setAccordionState(value)
	}

	useEffect(() => {
		if (md) {
			setAccordionState(['1', '2', '3'])
		} else {
			setAccordionState([])
		}
	}, [md])

	const items = accordionList.map((item) => (
		<Accordion.Item key={item.value} value={item.value}>
			{!md && <Accordion.Control>{item.label}</Accordion.Control>}
			<Accordion.Panel>{item.Component}</Accordion.Panel>
		</Accordion.Item>
	))

	return (
		<div className={classes.pageWrapper}>
			<Accordion
				multiple
				value={accordionState}
				onChange={onChangeAccordion}
				unstyled
				classNames={classes}
			>
				{items}
			</Accordion>
		</div>
	)
}

export default AboutUsPage
