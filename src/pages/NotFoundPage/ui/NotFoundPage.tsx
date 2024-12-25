import classes from './NotFoundPage.module.css'
import { memo } from 'react'
import { IconZoomQuestion } from '@tabler/icons-react'
import { Card, Title } from '@mantine/core'
import { PageCentered } from '@/widgets/PageCentered'
const NotFoundPage = () => {
	return (
		<PageCentered>
			<Card>
				<div className={classes.wrapperNotFoundCode}>
					<div className={classes.notFoundCode}>404</div>
					<div className={classes.wrapperForIcon}>
						<IconZoomQuestion size={80} stroke={1.3} />
					</div>
				</div>
				<Title>Страница не найдена</Title>
			</Card>
		</PageCentered>
	)
}

export default memo(NotFoundPage)
