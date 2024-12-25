import { memo } from 'react'
import { QuestionTable } from '../../QuestionTable'

export const PolimiksinTable = memo(() => {
	return (
		<QuestionTable
			key={'Полимиксин B'}
			title={'Полимиксин B'}
			header={['˃20 мл/мин', '5-20 мл/мин']}
			body={['НД 2-2,5 мг/кг в/в', 'НД 1-1,5 мг/кг']}
			bodyNext={[
				'ПД 1,5-2,5 мг/кг/сут. каждые 12 часов',
				'ПД 1-1,5 мг/кг/сут. каждые 12 часов',
			]}
		/>
	)
})

PolimiksinTable.displayName = 'PolimiksinTable'
