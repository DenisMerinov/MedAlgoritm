import { FC } from 'react'
import { Grid } from '@mantine/core'
import classes from './PartnersList.module.css'
import classNames from 'classnames'
const data = [1, 2, 3, 4, 5]
const dataWhite = [6, 2, 3, 4, 5]
interface PartnersListProps {
	white?: boolean
}
export const PartnersList: FC<PartnersListProps> = ({ white }) => {
	const mods = {
		[classes.white]: white,
	}

	return (
		<div className={classNames(classes.wrapper, mods)}>
			<Grid justify={'space-between'} align={'center'}>
				{white &&
					dataWhite.map((el, index) => (
						<Grid.Col key={index} span={{ base: 'auto' }}>
							<img
								src={`assets/images/partner${el}.svg`}
								alt={'Партнер'}
								className={classes.icon}
							/>
						</Grid.Col>
					))}
				{!white &&
					data.map((el, index) => (
						<Grid.Col key={index} span={{ base: 'auto' }}>
							<img
								src={`assets/images/partner${el}.svg`}
								alt={'Партнер'}
								className={classes.icon}
							/>
						</Grid.Col>
					))}
			</Grid>
		</div>
	)
}
