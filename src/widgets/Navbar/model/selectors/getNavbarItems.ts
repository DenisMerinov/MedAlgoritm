import { NavbarItemType } from '../types/navbar'
import {
	getRouteAboutUs,
	getRouteAlgorithm,
	getRouteCalculator,
	getRouteMain,
	getRouteProfile,
} from '@/shared/consts/router'

export const useNavbarItems = () => {
	const navbarItemsList: NavbarItemType[] = [
		{ path: getRouteMain(), text: 'Главная' },
		{ path: getRouteAboutUs(), text: 'О нас' },
		{ path: getRouteAlgorithm(), text: 'Алгоритмы' },
		{ path: getRouteCalculator(), text: 'Калькулятор' },
		{ path: getRouteProfile(), text: 'Профиль' },
	]

	return navbarItemsList
}
