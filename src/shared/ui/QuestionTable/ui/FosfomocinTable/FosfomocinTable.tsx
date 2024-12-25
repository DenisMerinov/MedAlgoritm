import { memo } from 'react'
import { QuestionTable } from '../../QuestionTable'

export const FosfomocinTable = memo(() => {
	return (
		<QuestionTable
			title={'Фосфомицин'}
			header={['˃ 40 мл/мин', '40-20 мл/мин', '20-10 мл/мин', '< 10 мл/мин']}
			body={[
				'4 г. 3-4 раза в сутки в/в',
				'2-4 г. 2 раза в сутки в/в',
				'2-4 г. 1 раз в сутки в/в',
				'2-4 г. каждые 48 часов',
			]}
		/>
	)
})

FosfomocinTable.displayName = 'FosfomocinTable'
