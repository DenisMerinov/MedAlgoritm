import { memo } from 'react'
import { QuestionTable } from '../../QuestionTable'

export const CeftazidimAviabaktamTable = memo(() => {
	return (
		<QuestionTable
			title={'Цефтазидим/авиабактам'}
			header={['˃50 мл/мин', '31-50 мл/мин', '16-30 мл/мин', '5-15 мл/мин']}
			body={[
				'2,5 г. 3 раза в сутки в/в',
				'1,25 г. 3 раза в сутки в/в',
				'0,94 г. 2 раз в сутки в/в',
				'0,94 г. 1 раз в сутки в/в',
			]}
		/>
	)
})

CeftazidimAviabaktamTable.displayName = 'CeftazidimAviabaktamTable'
