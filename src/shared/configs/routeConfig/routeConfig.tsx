import { RouteProps } from 'react-router-dom'
import {
	getRouteAboutUs,
	getRouteAlgorithm,
	getRouteAuth,
	getRouteCalculator,
	getRouteChangePassword,
	getRouteLostPassword,
	getRouteMain,
	getRouteProfile,
	getRouteRegistration,
} from '../../consts/router'
import { MainPage } from '@/pages/MainPage'
import { AboutUsPage } from '@/pages/AboutUsPage'
import { AlgorithmPage } from '@/pages/AlgorithmPage'
import { CalculatorPage } from '@/pages/CalculatorPage'
import { ProfilePage } from '@/pages/ProfilePage'
import { AuthPage } from '@/pages/AuthPage'
import { RegistrationPage } from '@/pages/RegistrationPage'
import { LostPasswordPage } from '@/pages/LostPasswordPage'
import { ChangePasswordPage } from '@/pages/ChangePasswordPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

export type AppRoutesProps = RouteProps & {
	authOnly?: boolean
}

export enum AppRoutes {
	MAIN = 'main',
	ABOUT_US = 'aboutUs',
	CALCULATOR = 'calculator',
	ALGORITHM = 'algorithm',
	PROFILE = 'profile',
	AUTH = 'auth',
	LOST_PASSWORD = 'lost_password',
	REGISTRATION = 'registration',
	CHANGE_PASSWORD = 'change_password',
	NOT_FOUND_PAGE = 'not_found_page',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: getRouteMain(),
	[AppRoutes.ABOUT_US]: getRouteAboutUs(),
	[AppRoutes.ALGORITHM]: getRouteAlgorithm(),
	[AppRoutes.CALCULATOR]: getRouteCalculator(),
	[AppRoutes.PROFILE]: getRouteProfile(),
	[AppRoutes.AUTH]: getRouteAuth(),
	[AppRoutes.REGISTRATION]: getRouteRegistration(),
	[AppRoutes.LOST_PASSWORD]: getRouteLostPassword(),
	[AppRoutes.CHANGE_PASSWORD]: getRouteChangePassword(':id'),
	[AppRoutes.NOT_FOUND_PAGE]: '*',
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath[AppRoutes.MAIN],
		element: <MainPage />,
	},
	[AppRoutes.AUTH]: {
		path: RoutePath[AppRoutes.AUTH],
		element: <AuthPage />,
	},
	[AppRoutes.REGISTRATION]: {
		path: RoutePath[AppRoutes.REGISTRATION],
		element: <RegistrationPage />,
	},
	[AppRoutes.LOST_PASSWORD]: {
		path: RoutePath[AppRoutes.LOST_PASSWORD],
		element: <LostPasswordPage />,
	},
	[AppRoutes.CHANGE_PASSWORD]: {
		path: RoutePath[AppRoutes.CHANGE_PASSWORD],
		element: <ChangePasswordPage />,
	},
	[AppRoutes.ABOUT_US]: {
		path: RoutePath[AppRoutes.ABOUT_US],
		element: <AboutUsPage />,
	},
	[AppRoutes.ALGORITHM]: {
		path: RoutePath[AppRoutes.ALGORITHM],
		element: <AlgorithmPage />,
		authOnly: true,
	},
	[AppRoutes.CALCULATOR]: {
		path: RoutePath[AppRoutes.CALCULATOR],
		element: <CalculatorPage />,
		authOnly: true,
	},
	[AppRoutes.PROFILE]: {
		path: RoutePath[AppRoutes.PROFILE],
		element: <ProfilePage />,
		authOnly: true,
	},
	[AppRoutes.NOT_FOUND_PAGE]: {
		path: RoutePath[AppRoutes.NOT_FOUND_PAGE],
		element: <NotFoundPage />,
	},
}
