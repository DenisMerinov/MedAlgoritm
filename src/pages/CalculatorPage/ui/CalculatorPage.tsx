import { Text, Title } from '@mantine/core'
import { Calculator } from '@/features/updateCalculator'

const CalculatorPage = () => {
	return (
		<div>
			<Title order={2} mb={12}>
				Калькулятор
			</Title>
			<Text mb={15}>
				Универсальный калькулятор расчета скорости клубочковой фильтрации и клиренса
				креатинина
			</Text>
			<Calculator />
		</div>
	)
}

export default CalculatorPage
