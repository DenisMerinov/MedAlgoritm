import { FC, memo, useEffect, useState } from 'react'
import classes from './AcinetobacterBaumannii.module.css'
import { QuestionBlock } from '@/entities/Algorithm/ui/QuestionBlock/QuestionBlock'
import { ResultBlock } from '@/entities/Algorithm/ui/ResultBlock/ResultBlock'
import { Accordion, ActionIcon, Button, Card, Group } from '@mantine/core'
import { QuestionTable } from '@/shared/ui/QuestionTable/QuestionTable'
import { IconSquareRoundedArrowLeftFilled } from '@tabler/icons-react'

interface AcinetobacterBaumanniiProps {
	clear: boolean
	setClear: (value: boolean) => void
}

export const AcinetobacterBaumannii: FC<AcinetobacterBaumanniiProps> = memo((props) => {
	const { clear, setClear } = props

	const [page, setPage] = useState<number>(0)
	const [result, setResult] = useState<boolean[]>([])

	const handleUpdateQuestion = (result: boolean, end?: boolean) => {
		if (end) setPage(777)
		else setPage((prevState) => prevState + 1)

		setResult((prevState) => [...prevState, result])
	}

	const handleBackQuestion = () => {
		setPage((prevState) => prevState - 1)

		setResult((prevState) => prevState.slice(0, -1))
	}

	const handleClear = () => {
		setPage(0)
		setResult([])
	}

	useEffect(() => {
		if (clear) {
			setPage(0)
			setResult([])
			setClear(false)
		}

		return () => {
			setPage(0)
			setResult([])
		}
	}, [clear, setClear])

	return (
		<Card shadow={'lg'} radius={'lg'} p={'lg'} className={classes.acinetobacterBaumannii}>
			{page !== 0 && page !== 777 && (
				<div onClick={handleBackQuestion}>
					<ActionIcon color={'gray'} variant={'gradient'}>
						<IconSquareRoundedArrowLeftFilled />
					</ActionIcon>
				</div>
			)}
			{page === 0 && (
				<QuestionBlock
					title={'Первый вопрос'}
					question={
						'Определяется ли у пациента чувствительность Acinetobacter baumannii к карбапенемам?'
					}
					buttons={[
						{ text: 'Да', onClick: () => handleUpdateQuestion(true, true) },
						{ text: 'Нет', onClick: () => handleUpdateQuestion(false) },
					]}
				/>
			)}
			{page === 1 && (
				<QuestionBlock
					title={'Второй вопрос'}
					question={'Есть ли нарушение функции почек (СКФ < 50 мл/мин)?'}
					buttons={[
						{ text: 'Да', onClick: () => handleUpdateQuestion(true) },
						{ text: 'Нет', onClick: () => handleUpdateQuestion(false) },
					]}
				/>
			)}
			{page === 2 && (
				<QuestionBlock
					title={'Третий вопрос'}
					question={
						'Есть ли нарушение функции печени (АЛТ ≥ 3 верхних границ норм + Общий билирубин ≥ 2 верхних границ норм)'
					}
					buttons={[
						{ text: 'Да', onClick: () => handleUpdateQuestion(true, true) },
						{ text: 'Нет', onClick: () => handleUpdateQuestion(false, true) },
					]}
				/>
			)}
			{page === 777 && result[0] && (
				<ResultBlock
					result={[
						'Рассмотреть вопрос о назначении карбапенемов',
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
						/>,
						<QuestionTable
							key={'Дорипенем'}
							title={'Дорипенем'}
							header={['˃50 мл/мин', '30-50 мл/мин', '11-29 мл/мин']}
							body={[
								'0,5-1 г. 3 раза в сутки в/в',
								'0,5 г. 3 раза в сутки в/в',
								'0,5 г 2 раза в сутки в/в',
							]}
						/>,
						<QuestionTable
							key={'Имипенем/циластатин'}
							title={'Имипенем/циластатин'}
							header={['≥ 60 мл/мин', '30-59 мл/мин', '15-29 мл/мин']}
							body={[
								'1 г. 4 раза в сутки в/в',
								'0,5 г. 4 раза в сутки в/в',
								'0,5 г. 2 раза в сутки в/в',
							]}
						/>,
						<QuestionTable
							key={'Биапенем'}
							title={'Биапенем'}
							header={['≥15 мл/мин', '<15 мл/мин']}
							body={['600 мг 2 раза в сутки в/в', '300 мг 2 раза в сутки в/в']}
						/>,
					]}
				/>
			)}
			{page === 777 && !result[0] && result[1] && !result[2] && (
				<ResultBlock
					result={[
						'Тигециклин + Сульбактам',
						<QuestionTable
							title={'Тигециклин'}
							key={'Тигециклин'}
							header={['НД 200 мг в/в']}
							body={['ПД 100 мг х 2р/сут в/в']}
						/>,
						<QuestionTable
							title={'Сульбактам'}
							key={'Сульбактам'}
							header={['≥30 мл/мин', '15-29 мл/мин', '<15 мл/мин']}
							body={[
								'2 г. 2 раза в сутки в/в',
								'1 г. 2 раза в сутки в/в',
								'1 г. 1 раз в сутки в/в',
							]}
						/>,
					]}
				/>
			)}
			{page === 777 && !result[0] && !result[1] && result[2] && (
				<ResultBlock
					result={[
						'Полимиксин В + Сульбактам',
						<QuestionTable
							title={'Полимиксин B'}
							key={'Полимиксин B'}
							header={['˃20 мл/мин', '5-20 мл/мин']}
							body={[
								'НД 2-2,5 мг/кг в/в ПД 1,5-2,5 мг/кг/сут. каждые 12 часов',
								'НД 1-1,5 мг/кг ПД 1-1,5 мг/кг/сут. каждые 12 часов',
							]}
						/>,
						<QuestionTable
							title={'Сульбактам'}
							key={'Сульбактам'}
							header={['≥30 мл/мин', '15-29 мл/мин', '<15 мл/мин']}
							body={[
								'2 г. 2 раза в сутки в/в',
								'1 г. 2 раза в сутки в/в',
								'1 г. 1 раз в сутки в/в',
							]}
						/>,
					]}
				/>
			)}
			{page === 777 && !result[0] && result[1] && result[2] && (
				<ResultBlock
					result={[
						'Если нарушена функция и почек и печени, необходимо определить, что повреждено больше:',
						<Accordion key={'acc1'}>
							<Accordion.Item value={'если почки: Тигециклин + Сульбактам'}>
								<Accordion.Control>
									если почки: Тигециклин + Сульбактам
								</Accordion.Control>
								<Accordion.Panel>
									<QuestionTable
										title={'Тигециклин'}
										key={'Тигециклин'}
										header={['НД 200 мг в/в']}
										body={['ПД 100 мг х 2р/сут в/в']}
									/>
									<QuestionTable
										title={'Сульбактам'}
										key={'Сульбактам'}
										header={['≥30 мл/мин', '15-29 мл/мин', '<15 мл/мин']}
										body={[
											'2 г. 2 раза в сутки в/в',
											'1 г. 2 раза в сутки в/в',
											'1 г. 1 раз в сутки в/в',
										]}
									/>
								</Accordion.Panel>
							</Accordion.Item>
							<Accordion.Item value={'если печень: Полимиксин В + Сульбактам'}>
								<Accordion.Control>
									если печень: Полимиксин В + Сульбактам
								</Accordion.Control>
								<Accordion.Panel>
									<QuestionTable
										title={'Полимиксин B'}
										key={'Полимиксин B'}
										header={['˃20 мл/мин', '5-20 мл/мин']}
										body={[
											'НД 2-2,5 мг/кг в/в ПД 1,5-2,5 мг/кг/сут. каждые 12 часов',
											'НД 1-1,5 мг/кг ПД 1-1,5 мг/кг/сут. каждые 12 часов',
										]}
									/>
									<QuestionTable
										title={'Сульбактам'}
										key={'Сульбактам'}
										header={['≥30 мл/мин', '15-29 мл/мин', '<15 мл/мин']}
										body={[
											'2 г. 2 раза в сутки в/в',
											'1 г. 2 раза в сутки в/в',
											'1 г. 1 раз в сутки в/в',
										]}
									/>
								</Accordion.Panel>
							</Accordion.Item>
						</Accordion>,
					]}
				/>
			)}
			{page === 777 && !result[0] && !result[1] && !result[2] && (
				<ResultBlock
					result={[
						'Если ли у пациента нет нарушения функции печени и почек (соответствующие критериям) Выберите один из трех вариантов:',
						<Accordion key={Math.random()}>
							<Accordion.Item value={'Тигециклин + Сульбактам'}>
								<Accordion.Control>Тигециклин + Сульбактам</Accordion.Control>
								<Accordion.Panel>
									<QuestionTable
										title={'Тигециклин'}
										key={'Тигециклин'}
										header={['НД 200 мг в/в']}
										body={['ПД 100 мг х 2р/сут в/в']}
									/>
									<QuestionTable
										title={'Сульбактам'}
										key={'Сульбактам'}
										header={['≥30 мл/мин', '15-29 мл/мин', '<15 мл/мин']}
										body={[
											'2 г. 2 раза в сутки в/в',
											'1 г. 2 раза в сутки в/в',
											'1 г. 1 раз в сутки в/в',
										]}
									/>
								</Accordion.Panel>
							</Accordion.Item>
							<Accordion.Item value={'Полимиксин B + Сульбактам'}>
								<Accordion.Control>Полимиксин B + Сульбактам</Accordion.Control>
								<Accordion.Panel>
									<QuestionTable
										title={'Полимиксин B'}
										key={'Полимиксин B'}
										header={['˃20 мл/мин', '5-20 мл/мин']}
										body={[
											'НД 2-2,5 мг/кг в/в ПД 1,5-2,5 мг/кг/сут. каждые 12 часов',
											'НД 1-1,5 мг/кг ПД 1-1,5 мг/кг/сут. каждые 12 часов',
										]}
									/>
									<QuestionTable
										title={'Сульбактам'}
										key={'Сульбактам'}
										header={['≥30 мл/мин', '15-29 мл/мин', '<15 мл/мин']}
										body={[
											'2 г. 2 раза в сутки в/в',
											'1 г. 2 раза в сутки в/в',
											'1 г. 1 раз в сутки в/в',
										]}
									/>
								</Accordion.Panel>
							</Accordion.Item>
							<Accordion.Item value={'Тигециклин* + Полимиксин B'}>
								<Accordion.Control>Тигециклин* + Полимиксин B</Accordion.Control>
								<Accordion.Panel>
									<QuestionTable
										title={'Тигециклин'}
										key={'Тигециклин'}
										header={['НД 200 мг в/в']}
										body={['ПД 100 мг х 2р/сут в/в']}
									/>
									<QuestionTable
										title={'Полимиксин B'}
										key={'Полимиксин B'}
										header={['˃20 мл/мин', '5-20 мл/мин']}
										body={[
											'НД 2-2,5 мг/кг в/в ПД 1,5-2,5 мг/кг/сут. каждые 12 часов',
											'НД 1-1,5 мг/кг ПД 1-1,5 мг/кг/сут. каждые 12 часов',
										]}
									/>
								</Accordion.Panel>
							</Accordion.Item>
						</Accordion>,
					]}
				/>
			)}
			<Group justify={'flex-end'}>
				{page === 777 && (
					<Button onClick={handleClear} color={'gray'} variant={'outline'}>
						Сбросить
					</Button>
				)}
			</Group>
		</Card>
	)
})

AcinetobacterBaumannii.displayName = 'AcinetobacterBaumannii'
