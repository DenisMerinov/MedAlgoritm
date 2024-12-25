import { FC } from 'react'
import { useSelector } from 'react-redux'
import { getIsAuth } from '@/entities/User'
import { Navigate, useLocation } from 'react-router-dom'
import { getRouteAuth } from '@/shared/consts/router'
interface RequireAuthProps {
	children: JSX.Element
}

export const RequireAuth: FC<RequireAuthProps> = (props) => {
	const { children } = props

	const location = useLocation()

	const isAuth = useSelector(getIsAuth)

	if (!isAuth) {
		return <Navigate to={getRouteAuth()} state={{ from: location }} replace />
	}

	return <>{children}</>
}
