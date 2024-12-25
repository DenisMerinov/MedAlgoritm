import { memo } from 'react'
import { QuestionTable } from '../../QuestionTable'

export const StandardTable = memo(() => {
	return (
		<>
			<QuestionTable
				key={'Меропенем'}
				title={'Меропенем'}
				header={['˃50 мл/мин', '25-50 мл/мин', '10-25 мл/мин', '< 10 мл/мин']}
				body={[
					'2 г. 3 раза в сутки в/в',
					'2 г. 2 раза в сутки в/в',
					'1 г. 2 раза в сутки в/в',
					'1 г. 1 раз в сутки в/в',
				]}
			/>
			<QuestionTable
				key={'Дорипенем'}
				title={'Дорипенем'}
				header={['˃50 мл/мин', '30-50 мл/мин', '11-29 мл/мин']}
				body={[
					'0,5-1 г. 3 раза в сутки в/в',
					'0,5 г. 3 раза в сутки в/в',
					'0,5 г 2 раза в сутки в/в',
				]}
			/>
			<QuestionTable
				key={'Имипенем/циластатин'}
				title={'Имипенем/циластатин'}
				header={['≥ 60 мл/мин', '30-59 мл/мин', '15-29 мл/мин']}
				body={[
					'1 г. 4 раза в сутки в/в',
					'0,5 г. 4 раза в сутки в/в',
					'0,5 г. 2 раза в сутки в/в',
				]}
			/>
			<QuestionTable
				key={'Биапенем'}
				title={'Биапенем'}
				header={['≥15 мл/мин', '<15 мл/мин']}
				body={['600 мг 2 раза в сутки в/в', '300 мг 2 раза в сутки в/в']}
			/>
		</>
	)
})

StandardTable.displayName = 'StandardTable'
