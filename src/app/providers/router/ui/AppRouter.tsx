import { memo, Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRoutesProps, routeConfig } from '@/shared/configs/routeConfig/routeConfig'
import { PageLoader } from '@/widgets/PageLoader'
import { ScrollToTop } from './ScrollToTop'
import { Container } from '@mantine/core'
import { RequireAuth } from '@/app/providers/router/ui/RequireAuth'

const AppRouter = () => {
	const renderWithWrapper = useCallback((route: AppRoutesProps) => {
		const element = <Suspense fallback={<PageLoader />}>{route.element}</Suspense>

		return (
			<Route
				key={route.path}
				path={route.path}
				element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
			/>
		)
	}, [])

	return (
		<Container className={'page-wrapper'}>
			<ScrollToTop />
			<Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
		</Container>
	)
}

export default memo(AppRouter)
