import classes from './MainPage.module.css'
import { useNavigate } from 'react-router-dom'
import { getRouteAlgorithm, getRouteCalculator } from '@/shared/consts/router'
import { Box, Group, Text, Title, UnstyledButton } from '@mantine/core'
import { PartnersList } from '@/shared/ui/PartnersList'
import { Button } from '@/shared/ui/Button/Button'

const MainPage = () => {
	const navigate = useNavigate()
	const goToAlgorithm = () => {
		navigate(getRouteAlgorithm())
	}

	const goToCalculator = () => {
		navigate(getRouteCalculator())
	}

	return (
		<div className={classes.wrapper}>
			<Box maw={630}>
				<div className={classes.bg} />
				<Title className={classes.title}>
					Точные расчёты для
					<br />
					точных рекомендаций
				</Title>
				<Text className={classes.text}>
					при назначении антибактериальной терапии в случае инфекции, вызванной
					экстремально резистентными штаммами грам отрицательных бактерий
				</Text>
				<Group mt={20} mb={30}>
					<Button text={'К алгоритму'} onClick={goToAlgorithm} />
					<Button text={'К калькулятору'} onClick={goToCalculator} />
				</Group>
				<PartnersList />
			</Box>
		</div>
	)
}

export default MainPage
