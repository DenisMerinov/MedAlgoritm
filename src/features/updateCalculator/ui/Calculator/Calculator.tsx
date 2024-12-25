import {
	Button,
	Card,
	Grid,
	Group,
	NumberInput,
	Radio,
	RadioGroup,
	Stack,
	Text,
} from '@mantine/core'
import { CalculatorInput } from '@/shared/ui/CalculatorInput/CalculatorInput'
import classes from './Calculator.module.css'
import { useForm } from '@mantine/form'
import { ICalculator } from '@/features/updateCalculator/model/types/calculator'
import { useState } from 'react'
export const Calculator = () => {
	const [result, setResult] = useState<number>(0)

	const form = useForm<ICalculator>({
		initialValues: {
			age: '',
			doze: 'mkmol',
			gender: 'man',
			kreatin: '',
			massa: '',
		},

		validate: {
			age: (value) => (!value ? 'Заполните поле' : null),
			massa: (value) => (!value ? 'Выберите вес' : null),
			kreatin: (value) => (!value ? 'Выберите креатин' : null),
			doze: (value) => (!value ? 'Выберите дозировку' : null),
			gender: (value) => (!value ? 'Выберите пол пациента' : null),
		},
	})

	const handleCalculate = (values: ICalculator) => {
		console.log(values)

		// Преобразование входных данных к числовым значениям
		const age = Number(values.age)
		const massa = Number(values.massa)
		let kreatin = Number(values.kreatin)

		// Перевод единиц измерения креатинина
		switch (values.doze) {
			case 'mmol':
				kreatin *= 1000 // 1 ммоль/л = 1000 мкмоль/л
				break
			case 'mgml':
				kreatin /= 0.0113 // 0.0113 мг/дл = 1 мкмоль/л
				break
		}

		// Расчет по формуле Кокрофта-Голта
		let result = (88 * (140 - age) * massa) / (72 * kreatin)

		// Поправка для женщин
		if (values.gender === 'woman') {
			result *= 0.85
		}

		const resultCalc = result.toFixed(2)

		setResult(parseFloat(resultCalc))
	}

	const handleClear = () => {
		form.setValues({
			kreatin: '',
			doze: 'mkmol',
			age: '',
			gender: 'man',
			massa: '',
		})
		setResult(0)
	}

	return (
		<>
			<Card withBorder shadow={'md'} radius={'xl'} p={20}>
				<form onSubmit={form.onSubmit((values) => handleCalculate(values))}>
					<Stack>
						<CalculatorInput
							text={'Возраст'}
							Component={
								<NumberInput
									placeholder={'Введите возраст пациента'}
									min={18}
									max={150}
									{...form.getInputProps('age')}
								/>
							}
							ComponentOptional={'лет'}
						/>
						<CalculatorInput
							text={'Пол'}
							Component={
								<RadioGroup name="gender" {...form.getInputProps('gender')}>
									<Group>
										<Radio value="man" label="Мужчина" />
										<Radio value="woman" label="Женщина" />
									</Group>
								</RadioGroup>
							}
						/>
						<CalculatorInput
							text={'Креатинин'}
							Component={
								<NumberInput
									placeholder={'Введите кол-во'}
									min={0}
									{...form.getInputProps('kreatin')}
								/>
							}
							ComponentOptional={
								<RadioGroup name="view" {...form.getInputProps('doze')}>
									<Group>
										<Radio value="mkmol" label="мкмоль/л" />
										<Radio value="mmol" label="ммоль/л" />
										<Radio value="mgml" label="мг/дл" />
									</Group>
								</RadioGroup>
							}
						/>
						<Grid>
							<Grid.Col span={12}>
								<Stack>
									{/*<CalculatorInput
								text={'Рост*'}
								additional
								Component={
									<NumberInput placeholder={'Введите рост пациента'} min={0} />
								}
								ComponentOptional={'см'}
							/>*/}
									<CalculatorInput
										text={'Вес*'}
										additional
										Component={
											<NumberInput
												placeholder={'Введите вес пациента'}
												min={0}
												{...form.getInputProps('massa')}
											/>
										}
										ComponentOptional={'кг'}
									/>
								</Stack>
							</Grid.Col>
							{/*<Grid.Col span={6}>
						<Card className={classes.cardWarn}>
							<Group wrap={'nowrap'}>
								<IconSquareRoundedArrowLeftFilled
									className={classes.icon}
									size={46}
								/>
								<Text className={classes.cardText}>
									Данные значения нужны только расчёта СКФ для детей и клиренса
									креатинина по формуле Кокрофта-Голта
								</Text>
							</Group>
						</Card>
					</Grid.Col>*/}
						</Grid>
						<Group justify={'flex-end'} mt={20}>
							<Button className={classes.btnComplete} type={'submit'}>
								Рассчитать
							</Button>
							<Button className={classes.btnReset} onClick={handleClear}>
								Сброс
							</Button>
						</Group>
					</Stack>
				</form>
			</Card>
			{result !== 0 && (
				<Card withBorder shadow={'md'} radius={'xl'} p={20} mt={50}>
					<Group>
						<Text fz={'lg'} span>
							Результат:
						</Text>

						<Text fz={'md'} span>
							{result} мл/мин
						</Text>
					</Group>
				</Card>
			)}
		</>
	)
}
