import '@mantine/core/styles.css'
import { AppShell, MantineProvider, ScrollArea } from '@mantine/core'
import { theme } from './styles/theme'
import { AppRouter } from '@/app/providers/router'
import { Navbar } from '@/widgets/Navbar'
import './styles/global.css'
import { memo } from 'react'
import { OnlyForDoctorsOverlay } from '@/widgets/OnlyForDoctorsOverlay'
import { useDisclosure } from '@mantine/hooks'
import { Header } from '@/widgets/Header'
import { useSelector } from 'react-redux'
import { getInited, getIsAuth, useIsAuth } from '@/entities/User'
import { PageLoader } from '@/widgets/PageLoader'
import { ExitButton } from '@/widgets/ExitButton'

function App() {
	const [opened, { toggle, close }] = useDisclosure()

	const { data } = useIsAuth()

	const isAuth = useSelector(getIsAuth)

	const inited = useSelector(getInited)

	if (!inited) {
		return (
			<MantineProvider>
				<PageLoader />
			</MantineProvider>
		)
	}

	return (
		<MantineProvider theme={theme}>
			<AppShell
				withBorder={false}
				navbar={{
					width: 300,
					breakpoint: 'md',
					collapsed: { desktop: true, mobile: !opened },
				}}
				header={{ height: 76 }}
			>
				<AppShell.Header>
					<Header toggle={toggle} opened={opened} />
				</AppShell.Header>
				<AppShell.Navbar py="xl" px={50}>
					<AppShell.Section grow component={ScrollArea}>
						<Navbar mobile onClose={close} />
					</AppShell.Section>
					<AppShell.Section>{isAuth && <ExitButton />}</AppShell.Section>
				</AppShell.Navbar>
				<AppShell.Main style={{ display: 'flex', justifyContent: 'center' }}>
					<OnlyForDoctorsOverlay>
						<AppRouter />
					</OnlyForDoctorsOverlay>
				</AppShell.Main>
			</AppShell>
		</MantineProvider>
	)
}
export default memo(App)
