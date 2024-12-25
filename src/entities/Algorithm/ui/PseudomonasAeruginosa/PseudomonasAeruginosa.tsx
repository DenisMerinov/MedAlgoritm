import { FC, memo, useEffect, useState } from 'react'
import classes from './PseudomonasAeruginosa.module.css'
import { Accordion, ActionIcon, Button, Card, Group } from '@mantine/core'
import { IconSquareRoundedArrowLeftFilled } from '@tabler/icons-react'
import { QuestionBlock } from '../QuestionBlock/QuestionBlock'
import { ResultBlock } from '../ResultBlock/ResultBlock'
import { QuestionTable } from '@/shared/ui/QuestionTable/QuestionTable'
import { AccordionItem } from '@/shared/ui/AccordionItem/AccordionItem'

interface PseudomonasAeruginosaProps {
	clear: boolean
	setClear: (value: boolean) => void
}

export const PseudomonasAeruginosa: FC<PseudomonasAeruginosaProps> = memo((props) => {
	const { setClear, clear } = props

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

	const renderPolimixinTable = () => {
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
	}
	const renderAmikacinTable = () => {
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
	}
	const renderFosfomicinTable = () => {
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
	}
	const renderCitrofolxinTable = () => {
		return (
			<QuestionTable
				key={'Ципрофлоксацин'}
				title={'Ципрофлоксацин'}
				header={['˃50 мл/мин', '30-50 мл/мин', '5-29 мл/мин']}
				body={[
					'400 мг 2-3 раза в сутки в/в',
					'400 мг 2 раза в сутки в/в',
					'400 мг 1 раз в сутки в/в',
				]}
			/>
		)
	}

	const renderAztreonTable = () => {
		return (
			<QuestionTable
				key={'Азтреонам'}
				title={'Азтреонам'}
				header={['≥ 30 мл/мин', '10-29 мл/мин', '<10 мл/мин']}
				body={[
					'2 г. 3 раза в сутки в/в',
					'2 г. 2 раза в сутки в/в',
					'1 г. 2 раза в сутки в/в',
				]}
			/>
		)
	}

	const renderAviabaktam = () => {
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
	}

	const renderTazabaktom = () => {
		return (
			<QuestionTable
				title={'Цефтолазан/тазобактам'}
				header={['˃50 мл/мин', '30-50 мл/мин', '15-29 мл/мин']}
				body={[
					'3 г. 3 раза в сутки в/в',
					'1,5 г. 3 раза в сутки в/в',
					'750 мг 3 раза в сутки в/в',
				]}
			/>
		)
	}

	const renderCiprofluxin = () => {
		return (
			<QuestionTable
				title={'Ципрофлоксацин'}
				header={['˃50 мл/мин', '30-50 мл/мин', '5-29 мл/мин']}
				body={[
					'400 мг 2-3 раза в сутки в/в',
					'400 мг 2 раза в сутки в/в',
					'400 мг 1 раз в сутки в/в',
				]}
			/>
		)
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
			{/*1 вопрос*/}
			<>
				{page === 0 && (
					<QuestionBlock
						title={'Первый вопрос'}
						question={
							'Определяется ли у пациента чувствительность Pseudomonas aeruginosa к карбапенемам?'
						}
						buttons={[
							{ text: 'Да', onClick: () => handleUpdateQuestion(true, true) },
							{ text: 'Нет', onClick: () => handleUpdateQuestion(false) },
						]}
					/>
				)}
			</>
			{/*2 вопрос*/}
			<>
				{page === 1 && (
					<QuestionBlock
						title={'Второй вопрос'}
						question={'Проводился ли анализ на определение карбапенемаз?'}
						buttons={[
							{ text: 'Да', onClick: () => handleUpdateQuestion(true) },
							{ text: 'Нет', onClick: () => handleUpdateQuestion(false, true) },
						]}
					/>
				)}
			</>
			{/*3 вопрос*/}
			<>
				{page === 2 && (
					<QuestionBlock
						title={'Третий вопрос'}
						question={'Выявлены ли карбапенемазы ?'}
						buttons={[
							{ text: 'Да', onClick: () => handleUpdateQuestion(true) },
							{ text: 'Нет', onClick: () => handleUpdateQuestion(false, true) },
						]}
					/>
				)}
			</>
			{/*4 вопрос*/}
			<>
				{page === 3 && (
					<QuestionBlock
						title={'Четвертый вопрос'}
						question={'Определен ли тип карбапенемаз?'}
						buttons={[
							{
								text: 'Да, карбапенемазы выявлены и тип определен',
								onClick: () => handleUpdateQuestion(true),
							},
							{ text: 'Нет', onClick: () => handleUpdateQuestion(false, true) },
						]}
					/>
				)}
			</>
			{/*5 вопрос*/}
			<>
				{page === 4 && (
					<QuestionBlock
						title={'Пятый вопрос'}
						question={'Выявлена ли продукция металло-бета-лактамаз (WIM)?'}
						buttons={[
							{
								text: 'Да',
								onClick: () => handleUpdateQuestion(true, true),
							},
							{ text: 'Нет', onClick: () => handleUpdateQuestion(false) },
						]}
					/>
				)}
			</>
			{/*6 вопрос*/}
			<>
				{page === 5 && (
					<QuestionBlock
						title={'Шестой вопрос'}
						question={'Выявлена ли продукция сериновых карбапенемаз (GES-5)?'}
						buttons={[{ text: 'Да', onClick: () => handleUpdateQuestion(true, true) }]}
					/>
				)}
			</>
			{/*1 результат*/}
			<>
				{page === 777 && result[0] && (
					<ResultBlock
						result={[
							'Рассмотреть вопрос о назначении карбапенемов',
							<QuestionTable
								key={'Меропенем'}
								title={'Меропенем'}
								header={[
									'˃50 мл/мин',
									'25-50 мл/мин',
									'10-25 мл/мин',
									'< 10 мл/мин',
								]}
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
			</>
			{/*2 результат*/}
			{page === 777 && !result[0] && !result[1] && (
				<ResultBlock
					result={[
						'Азтреонам* + Полимиксин',
						renderAztreonTable(),
						renderPolimixinTable(),
						'* Возможно назначение других АБ и их комбинаций при сохраненной чувствительности (амикацин, фосфомицин, ципрофлоксацин)',
						<Accordion key={Math.random()}>
							<AccordionItem
								header={'Амикацин + Полимиксин B'}
								Tables={[renderAmikacinTable(), renderPolimixinTable()]}
							/>
							<AccordionItem
								header={'Фосфомицин + Полимиксин B'}
								Tables={[renderFosfomicinTable(), renderPolimixinTable()]}
							/>
							<AccordionItem
								header={'Ципрофлоксацин + Полимиксин B'}
								Tables={[renderCitrofolxinTable(), renderPolimixinTable()]}
							/>
						</Accordion>,
					]}
				/>
			)}
			{/*3 результат*/}
			{page === 777 && !result[0] && result[1] && !result[2] && (
				<ResultBlock
					result={[
						<Accordion key={Math.random()}>
							<AccordionItem
								header={'Цефтолазан/тазобактам'}
								Tables={[renderTazabaktom()]}
							/>
							<AccordionItem
								header={'Полимиксин B + Фосфомицин'}
								Tables={[renderPolimixinTable(), renderFosfomicinTable()]}
							/>
							<AccordionItem
								header={'Полимиксин B + Амикацин'}
								Tables={[renderPolimixinTable(), renderAmikacinTable()]}
							/>
							<AccordionItem
								header={'Полимиксин B + Ципрофлоксацин'}
								Tables={[renderPolimixinTable(), renderCiprofluxin()]}
							/>
						</Accordion>,
					]}
				/>
			)}
			{/*4 результат*/}
			{page === 777 && !result[0] && result[1] && result[2] && !result[3] && (
				<ResultBlock
					result={[
						'Азтреонам + Полимиксин B',
						renderAztreonTable(),
						renderPolimixinTable(),
						'* Возможно назначение других АБ и их комбинаций при сохраненной чувствительности (амикацин, фосфомицин, ципрофлоксацин)',
						<Accordion key={'546546464646456'}>
							<AccordionItem
								header={'Амикацин + Полимиксин B'}
								Tables={[renderAmikacinTable(), renderPolimixinTable()]}
							/>
							<AccordionItem
								header={'Фосфомицин + Полимиксин B'}
								Tables={[renderFosfomicinTable(), renderPolimixinTable()]}
							/>
							<AccordionItem
								header={'Ципрофлоксацин + Полимиксин B'}
								Tables={[renderCitrofolxinTable(), renderPolimixinTable()]}
							/>
						</Accordion>,
					]}
				/>
			)}
			{/*5 результат*/}
			{page === 777 && !result[0] && result[1] && result[2] && result[3] && result[4] && (
				<ResultBlock
					result={[
						'Азтреонами +Полимиксин В',
						renderAztreonTable(),
						renderPolimixinTable(),
					]}
				/>
			)}
			{page === 777 &&
				!result[0] &&
				result[1] &&
				result[2] &&
				result[3] &&
				!result[4] &&
				result[5] && (
					<ResultBlock
						result={[
							'Цефтазидим/авибактам',
							renderAviabaktam(),
							<Accordion key={Math.random()}>
								<AccordionItem
									header={'Полимиксин В + Фосфомицин'}
									Tables={[renderFosfomicinTable(), renderPolimixinTable()]}
								/>
								<AccordionItem
									header={'Полимиксин В + Ципрофлоксацин'}
									Tables={[renderCiprofluxin(), renderPolimixinTable()]}
								/>
								<AccordionItem
									header={'Полимиксин В + Амикацин'}
									Tables={[renderAmikacinTable(), renderPolimixinTable()]}
								/>
							</Accordion>,
						]}
					/>
				)}
			{/* Кнопка сбросить*/}
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

PseudomonasAeruginosa.displayName = 'PseudomonasAeruginosa'
