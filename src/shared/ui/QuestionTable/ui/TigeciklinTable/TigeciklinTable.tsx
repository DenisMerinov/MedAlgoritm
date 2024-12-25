import { memo } from 'react'
import { QuestionTable } from '../../QuestionTable'

export const TigeciklinTable = memo(() => {
	return (
		<QuestionTable
			key={'Тигециклин*'}
			title={'Тигециклин*'}
			header={['НД 200 мг в/в']}
			body={['ПД 100 мг х 2р/сут в/в']}
		/>
	)
})

TigeciklinTable.displayName = 'TigeciklinTable'
