import { FC, memo, useEffect, useState } from 'react'
import { Accordion, Button, Card, Group } from '@mantine/core'
import { QuestionBlock } from '@/entities/Algorithm/ui/QuestionBlock/QuestionBlock'
import { ResultBlock } from '@/entities/Algorithm/ui/ResultBlock/ResultBlock'
import { AccordionItem } from '@/shared/ui/AccordionItem/AccordionItem'
import { StandardTable } from '@/shared/ui/QuestionTable/ui/StandardTable/StandardTable'
import { AztreonamTable } from '@/shared/ui/QuestionTable/ui/AztreonamTable/AztreonamTable'
import { CeftazidimAviabaktamTable } from '@/shared/ui/QuestionTable/ui/CeftazidimAviabaktamTable/CeftazidimAviabaktamTable'
import { PolimiksinTable } from '@/shared/ui/QuestionTable/ui/PolimiksinTable/PolimiksinTable'
import { TigeciklinTable } from '@/shared/ui/QuestionTable/ui/TigeciklinTable/TigeciklinTable'
import { FosfomocinTable } from '@/shared/ui/QuestionTable/ui/FosfomocinTable/FosfomocinTable'
import { AmikacinTable } from '@/shared/ui/QuestionTable/ui/AmikacinTable/AmikacinTable'

interface KlebsiellaPneumoniaeProps {
	clear: boolean
	setClear: (value: boolean) => void
}

export const KlebsiellaPneumoniae: FC<KlebsiellaPneumoniaeProps> = memo((props) => {
	const { clear, setClear } = props

	const [page, setPage] = useState<number>(0)
	const [result, setResult] = useState<boolean[]>([])
	const [variant, setVariant] = useState<number>(0)
	const handleUpdateQuestion = (result: boolean, end?: boolean, variant?: number) => {
		if (end) setPage(777)
		else setPage((prevState) => prevState + 1)

		if (variant) setVariant(variant)

		setResult((prevState) => [...prevState, result])
	}

	const handleClear = () => {
		setPage(0)
		setResult([])
		setVariant(0)
	}

	useEffect(() => {
		if (clear) {
			setPage(0)
			setResult([])
			setVariant(0)
			setClear(false)
		}

		return () => {
			setPage(0)
			setResult([])
			setVariant(0)
		}
	}, [clear, setClear])

	console.log(result)
	console.log(variant)

	return (
		<Card shadow={'lg'} radius={'lg'} p={'lg'}>
			{/*0 вопрос*/}
			<>
				{page === 0 && (
					<QuestionBlock
						title={'Первый вопрос'}
						question={
							'Определяется ли  у пациента чувствительность Klebsiella pneumoniae к карбапенемам?'
						}
						buttons={[
							{ text: 'Да', onClick: () => handleUpdateQuestion(true, true) },
							{ text: 'Нет', onClick: () => handleUpdateQuestion(false) },
						]}
					/>
				)}
			</>
			{/*1 вопрос*/}
			<>
				{page === 1 && (
					<QuestionBlock
						title={'Второй вопрос'}
						question={'Определялось ли наличие карбапенемаз?'}
						buttons={[
							{ text: 'Да', onClick: () => handleUpdateQuestion(true) },
							{ text: 'Нет', onClick: () => handleUpdateQuestion(false, true) },
						]}
					/>
				)}
			</>
			{/*2 вопрос*/}
			<>
				{page === 2 && (
					<QuestionBlock
						title={'Третий вопрос'}
						question={'Выявлено ли наличие карбапенемаз?'}
						buttons={[
							{ text: 'Да', onClick: () => handleUpdateQuestion(true, false, 2) },
							{ text: 'Нет', onClick: () => handleUpdateQuestion(false, false, 1) },
						]}
					/>
				)}
			</>
			{/*3 вопрос ВАРИАНТ 1*/}
			<>
				{page === 3 && variant === 1 && (
					<QuestionBlock
						title={'Четвертый вопрос'}
						question={'Определялась ли МПК меропенема?'}
						buttons={[
							{ text: 'Да', onClick: () => handleUpdateQuestion(true) },
							{ text: 'Нет', onClick: () => handleUpdateQuestion(false, true) },
						]}
					/>
				)}
			</>
			{/*4 вопрос ВАРИАНТ 1*/}
			<>
				{page === 4 && variant === 1 && (
					<QuestionBlock
						title={'Пятый вопрос'}
						question={'МПК меропенема ≤ 8 мкг/л ?'}
						buttons={[
							{
								text: 'Да',
								onClick: () => handleUpdateQuestion(true, true),
							},
							{ text: 'Нет', onClick: () => handleUpdateQuestion(false, true) },
						]}
					/>
				)}
			</>
			{/*3 вопрос ВАРИАНТ 2*/}
			<>
				{page === 3 && variant === 2 && (
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
			{/*4 вопрос ВАРИАНТ 2*/}
			<>
				{page === 4 && variant === 2 && (
					<QuestionBlock
						title={'Пятый вопрос'}
						question={'Выявлена ли продукция металло-бета-лактамаз (NDM)?'}
						buttons={[
							{ text: 'Да', onClick: () => handleUpdateQuestion(true, true) },
							{ text: 'Нет', onClick: () => handleUpdateQuestion(false) },
						]}
					/>
				)}
			</>
			{/*5 вопрос ВАРИАНТ 2*/}
			<>
				{page === 5 && variant === 2 && (
					<QuestionBlock
						title={'Шестой вопрос'}
						question={'Выявлена продукция сериновых карбапенемаз (OXA-48, KPC)?'}
						buttons={[{ text: 'Да', onClick: () => handleUpdateQuestion(true, true) }]}
					/>
				)}
			</>
			{/*0 результат*/}
			<>
				{page === 777 && result[0] && (
					<ResultBlock
						result={[
							'Рассмотреть вопрос о назначении карбапенемов',
							<StandardTable key={Math.random()} />,
						]}
					/>
				)}
			</>
			{/*1 результат*/}
			<>
				{page === 777 && !result[0] && !result[1] && (
					<ResultBlock
						result={[
							<Accordion key={Math.random()}>
								<AccordionItem
									header={'Азтреонам + Цефтазидим/авибактам'}
									Tables={[
										<AztreonamTable key={Math.random()} />,
										<CeftazidimAviabaktamTable key={Math.random()} />,
									]}
								/>
								<AccordionItem
									header={'Полимиксин В + Тигециклин'}
									Tables={[
										<PolimiksinTable key={Math.random()} />,
										<TigeciklinTable key={Math.random()} />,
									]}
								/>
							</Accordion>,
							'Возможно добавить',
							<Accordion key={Math.random()}>
								<AccordionItem
									header={'Фосфомицин или Амикацин'}
									Tables={[
										<FosfomocinTable key={Math.random()} />,
										'Или',
										<AmikacinTable key={Math.random()} />,
									]}
								/>
							</Accordion>,
						]}
					/>
				)}
			</>
			{/*3 результат вариант 1*/}
			<>
				{page === 777 &&
					variant === 1 &&
					!result[0] &&
					result[1] &&
					!result[2] &&
					!result[3] && (
						<ResultBlock
							result={[
								<PolimiksinTable key={Math.random()} />,
								<TigeciklinTable key={Math.random()} />,
								'Возможно добавить:',
								<FosfomocinTable key={Math.random()} />,
								'Или',
								<AmikacinTable key={Math.random()} />,
							]}
						/>
					)}
			</>
			{/*4 результат вариант 1*/}
			<>
				{page === 777 &&
					variant === 1 &&
					!result[0] &&
					result[1] &&
					!result[2] &&
					result[3] &&
					!result[4] && (
						<ResultBlock
							result={[
								<PolimiksinTable key={Math.random()} />,
								<TigeciklinTable key={Math.random()} />,
								'Возможно добавить:',
								<FosfomocinTable key={Math.random()} />,
								'Или',
								<AmikacinTable key={Math.random()} />,
							]}
						/>
					)}
			</>
			{/*4 результат вариант 1*/}
			<>
				{page === 777 &&
					variant === 1 &&
					!result[0] &&
					result[1] &&
					!result[2] &&
					result[3] &&
					result[4] && (
						<ResultBlock
							result={[
								'Рассмотреть назначение карбапенемов:',
								<StandardTable key={Math.random()} />,
								'Возможно добавить:',
								<TigeciklinTable key={Math.random()} />,
								'Или',
								<PolimiksinTable key={Math.random()} />,
							]}
						/>
					)}
			</>
			{/*3 результат вариант 2*/}
			<>
				{page === 777 &&
					variant === 2 &&
					!result[0] &&
					result[1] &&
					result[2] &&
					!result[3] && (
						<ResultBlock
							result={[
								<Accordion key={Math.random()}>
									<AccordionItem
										header={'Азтреонам + Цефтазидим/авибактам'}
										Tables={[
											<AztreonamTable key={Math.random()} />,
											<CeftazidimAviabaktamTable key={Math.random()} />,
										]}
									/>
									<AccordionItem
										header={'Полимиксин В+Тигециклин'}
										Tables={[
											<PolimiksinTable key={Math.random()} />,
											<TigeciklinTable key={Math.random()} />,
										]}
									/>
								</Accordion>,
								'Возможно добавить',
								<Accordion key={Math.random()}>
									<AccordionItem
										header={'Фосфомицин или Амикацин'}
										Tables={[
											<FosfomocinTable key={Math.random()} />,
											'Или',
											<AmikacinTable key={Math.random()} />,
										]}
									/>
								</Accordion>,
							]}
						/>
					)}
			</>
			{/*4 результат вариант 2*/}
			<>
				{page === 777 &&
					variant === 2 &&
					!result[0] &&
					result[1] &&
					result[2] &&
					result[3] &&
					result[4] && (
						<ResultBlock
							result={[
								<Accordion key={Math.random()}>
									<AccordionItem
										header={'Азтреонам + Цефтазидим/авибактам'}
										Tables={[
											<AztreonamTable key={Math.random()} />,
											<CeftazidimAviabaktamTable key={Math.random()} />,
										]}
									/>
									<AccordionItem
										header={'Полимиксин В+Тигециклин'}
										Tables={[
											<PolimiksinTable key={Math.random()} />,
											<TigeciklinTable key={Math.random()} />,
											'Возможно добавить:',
											<FosfomocinTable key={Math.random()} />,
											<AmikacinTable key={Math.random()} />,
										]}
									/>
								</Accordion>,
								'Возможно добавить',
								<Accordion key={Math.random()}>
									<AccordionItem
										header={'Фосфомицин или Амикацин'}
										Tables={[
											<FosfomocinTable key={Math.random()} />,
											'Или',
											<AmikacinTable key={Math.random()} />,
										]}
									/>
								</Accordion>,
							]}
						/>
					)}
			</>
			{/*5 результат вариант 2*/}
			<>
				{page === 777 &&
					variant === 2 &&
					!result[0] &&
					result[1] &&
					result[2] &&
					result[3] &&
					!result[4] &&
					result[5] && (
						<ResultBlock
							result={[
								<Accordion key={Math.random()}>
									<AccordionItem
										header={'Цефтазидим/авибактам'}
										Tables={[<CeftazidimAviabaktamTable key={Math.random()} />]}
									/>
									<AccordionItem
										header={'Полимиксин В + Тигециклин'}
										Tables={[
											<PolimiksinTable key={Math.random()} />,
											<TigeciklinTable key={Math.random()} />,
										]}
									/>
								</Accordion>,
								'Возможно добавить',
								<Accordion key={Math.random()}>
									<AccordionItem
										header={'Фосфомицин или Амикацин'}
										Tables={[
											<FosfomocinTable key={Math.random()} />,
											'Или',
											<AmikacinTable key={Math.random()} />,
										]}
									/>
								</Accordion>,
							]}
						/>
					)}
			</>
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

KlebsiellaPneumoniae.displayName = 'KlebsiellaPneumoniae'
