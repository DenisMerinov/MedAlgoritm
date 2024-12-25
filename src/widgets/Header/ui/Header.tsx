import { FC, memo } from 'react'
import classes from './Header.module.css'
import { Burger, Container, Group, Image } from '@mantine/core'
import { Navbar } from '@/widgets/Navbar'
import { useMediaQuery } from '@mantine/hooks'
import { useLocation } from 'react-router-dom'
import { DropdownMenu } from '@/widgets/DropdownMenu'
import classNames from 'classnames'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import { getRouteMain } from '@/shared/consts/router'

interface HeaderProps {
	toggle: () => void
	opened: boolean
}

export const Header: FC<HeaderProps> = memo((props) => {
	const { toggle, opened } = props
	const md = useMediaQuery('(max-width: 62em)')
	const { pathname } = useLocation()

	const mods = {
		[classes.white]: pathname !== '/',
	}
	const modsLogo = {
		[classes.blue]: pathname !== '/',
	}

	return (
		<div className={classNames(classes.header, mods)}>
			<Container>
				<Group h={'100%'} p={'md'} justify={'space-between'}>
					<AppLink to={getRouteMain()}>
						<div className={classNames(classes.logoWrapper, modsLogo)}>
							<Image src={'assets/images/logoApp.svg'} h={44} w={200} />
						</div>
					</AppLink>
					<Group>
						{md ? (
							<Burger
								color={pathname === '/' ? 'white' : 'black'}
								opened={opened}
								onClick={toggle}
								size={'lg'}
							/>
						) : (
							<>
								<Navbar />
								<DropdownMenu />
							</>
						)}
					</Group>
				</Group>
			</Container>
		</div>
	)
})

Header.displayName = 'Header'
