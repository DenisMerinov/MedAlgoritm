import { Anchor, Grid, List, Stack, Title } from '@mantine/core'
import { IconMail, IconMapPin, IconPhone } from '@tabler/icons-react'
import { PartnersList } from '@/shared/ui/PartnersList'
export const Contacts = () => {
	return (
		<Grid mt={20}>
			<Grid.Col span={{ base: 12, md: 6 }}>
				<Title order={2} mb={20}>
					Контакты
				</Title>
				<List>
					<Stack gap={'lg'}>
						<List.Item icon={<IconMail />}>
							e-mail:{' '}
							<Anchor target={'_blank'} href={'mailto:info@antimicrob.net'}>
								info@antimicrob.net
							</Anchor>
						</List.Item>
						<List.Item icon={<IconPhone />}>тел.: +7 (495) 721-24-40</List.Item>
						<List.Item icon={<IconMapPin />}>
							Коммуникационное агентство: Россия, город Москва, 129085 ул. Годовикова,
							д. 9, стр. 3, офис 5.10
						</List.Item>
					</Stack>
				</List>
			</Grid.Col>
			<Grid.Col span={{ base: 12, md: 6 }}>
				<iframe
					src="https://yandex.ru/map-widget/v1/?um=constructor%3A483c7c3f456c8bca8250b99c09f60e38319ca0b935f78714b3587b03078a60e0&amp;source=constructor"
					width="100%"
					height="300"
					frameBorder="0"
				></iframe>
			</Grid.Col>
			<Grid.Col span={12}>
				<Title order={2}>Наши партнёры</Title>
				<PartnersList white />
			</Grid.Col>
		</Grid>
	)
}
