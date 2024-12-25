import { FC, memo } from 'react'
import { NavbarItemType } from '../../model/types/navbar'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import classes from './NavbarItem.module.css'
import { useLocation } from 'react-router-dom'
import classNames from 'classnames'

interface NavbarItemProps {
	item: NavbarItemType
	className?: string
}

export const NavbarItem: FC<NavbarItemProps> = memo((props) => {
	const { item, className } = props

	const { pathname } = useLocation()

	const mods = {
		[classes.active]: pathname === item.path,
	}

	return (
		<AppLink to={item.path} className={classNames(classes.navbarItem, mods, className)}>
			{item.text}
		</AppLink>
	)
})

NavbarItem.displayName = 'NavbarItem'
