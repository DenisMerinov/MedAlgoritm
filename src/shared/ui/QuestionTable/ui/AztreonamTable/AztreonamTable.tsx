import { memo } from 'react'
import { QuestionTable } from '../../QuestionTable'

export const AztreonamTable = memo(() => {
	return (
		<QuestionTable
			key={'Азтреонам'}
			title={'Азтреонам'}
			header={['≥ 30 мл/мин', '10-29 мл/мин', '<10 мл/мин']}
			body={['2 г. 3 раза в сутки в/в', '2 г. 2 раза в сутки в/в', '1 г. 2 раза в сутки в/в']}
		/>
	)
})

AztreonamTable.displayName = 'AztreonamTable'
