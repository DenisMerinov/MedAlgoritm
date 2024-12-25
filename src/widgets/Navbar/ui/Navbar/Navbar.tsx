import { FC, memo, useEffect, useMemo } from 'react'
import { useNavbarItems } from '../../model/selectors/getNavbarItems'
import { NavbarItem } from '../NavbarItem/NavbarItem'
import { useLocation } from 'react-router-dom'
import classes from './Navbar.module.css'
import classNames from 'classnames'
import { Stack } from '@mantine/core'

interface NavbarProps {
	mobile?: boolean
	onClose?: () => void
}
export const Navbar: FC<NavbarProps> = memo(({ mobile, onClose }) => {
	const navbarItemsList = useNavbarItems()

	const { pathname } = useLocation()

	const mods = {
		[classes.main]: pathname === '/',
		[classes.mobile]: mobile,
	}

	useEffect(() => {
		if (mobile && onClose) onClose()
	}, [pathname])

	const itemsList = useMemo(
		() =>
			navbarItemsList.map((item) => (
				<NavbarItem
					item={item}
					key={item.path}
					className={classNames(classes.navbarItem, mods)}
				/>
			)),
		[navbarItemsList],
	)

	if (mobile) {
		return (
			<div className={classes.navbar}>
				<Stack gap={'lg'}>{itemsList}</Stack>
			</div>
		)
	}

	return <>{itemsList}</>
})

Navbar.displayName = 'Navbar'
