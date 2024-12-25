import { memo } from 'react'
import { QuestionTable } from '../../QuestionTable'

export const AmikacinTable = memo(() => {
	return (
		<QuestionTable
			title={'Амикацин'}
			header={['≥ 50 мл/мин', '10-50 мл/мин', '<10 мл/мин']}
			body={[
				'Нагрузочная доза, затем 7,5 мг/кг 2 раза в сутки в/в или 15 мг/кг 1 раз в сутки в/в',
				'Нагрузочная доза, затем 7,5 мг/кг 1 раза в сутки в/в',
				'Нагрузочная доза, затем 7,5 мг/кг 1 раз в 47 часов в/в',
			]}
		/>
	)
})

AmikacinTable.displayName = 'AmikacinTable'
