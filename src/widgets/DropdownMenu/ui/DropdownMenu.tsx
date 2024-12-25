import { FC, memo } from 'react'
import classes from './DropdownMenu.module.css'
import { Avatar, Button, Menu, Skeleton } from '@mantine/core'
import { ExitButton } from '@/widgets/ExitButton/ui/ExitButton'
import { useDisclosure } from '@mantine/hooks'
import { useSelector } from 'react-redux'
import { getIsAuth, useGetDataUser } from '@/entities/User'
import { useLocation, useNavigate } from 'react-router-dom'
import { getRouteAuth } from '@/shared/consts/router'

interface DropdownMenuProps {}

export const DropdownMenu: FC<DropdownMenuProps> = memo(() => {
	const [openedMenu, { open, close }] = useDisclosure()

	const isAuth = useSelector(getIsAuth)

	const { pathname } = useLocation()

	const navigate = useNavigate()
	const goToAuth = () => {
		navigate(getRouteAuth())
	}

	const { data, isLoading } = useGetDataUser()

	return (
		<div className={classes.dropdownMenu}>
			{!isAuth ? (
				<Button
					onClick={goToAuth}
					variant={'subtle'}
					color={pathname !== '/' ? 'dark' : 'white'}
					fw={400}
				>
					Войти
				</Button>
			) : (
				<Menu onClose={close} onOpen={open} opened={openedMenu}>
					<Menu.Target>
						{isLoading ? (
							<Skeleton radius={'50%'} w={44} h={44} />
						) : (
							<Avatar
								w={44}
								h={44}
								variant={'filled'}
								radius={'xl'}
								color={'indigo'}
								src={data?.result.ava ?? ''}
								className={classes.ava}
							/>
						)}
					</Menu.Target>
					<Menu.Dropdown p={0}>
						<ExitButton onClose={close} />
					</Menu.Dropdown>
				</Menu>
			)}
		</div>
	)
})

DropdownMenu.displayName = 'DropdownMenu'
