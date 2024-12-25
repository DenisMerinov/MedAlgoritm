import { Center, Grid, Text } from '@mantine/core'
import { Button } from '@/shared/ui/Button/Button'
import { useState } from 'react'
import classes from './AlgorithmPage.module.css'
import { AcinetobacterBaumannii } from '@/entities/Algorithm'
import { PseudomonasAeruginosa } from '@/entities/Algorithm/ui/PseudomonasAeruginosa/PseudomonasAeruginosa'
import { KlebsiellaPneumoniae } from '@/entities/Algorithm/ui/KlebsiellaPneumoniae/KlebsiellaPneumoniae'

type AlgorithmType =
	| 'acinetocacterBaumannii'
	| 'pseudomonasAeruginosa'
	| 'klebsiellaPneumoniae'
	| null

const AlgorithmPage = () => {
	const [alg, setAlg] = useState<AlgorithmType>(null)

	const [clear, setClear] = useState<boolean>(false)

	const renderAlgorithm = () => {
		switch (alg) {
			case 'acinetocacterBaumannii':
				return <AcinetobacterBaumannii clear={clear} setClear={setClear} />
			case 'pseudomonasAeruginosa':
				return <PseudomonasAeruginosa clear={clear} setClear={setClear} />
			case 'klebsiellaPneumoniae':
				return <KlebsiellaPneumoniae clear={clear} setClear={setClear} />
			default:
				return null
		}
	}

	return (
		<div>
			<Text mb={10}>Выберите алгоритм АБП при карбапенем:</Text>
			<Grid>
				<Grid.Col span={{ base: 12, md: 4 }}>
					<Center>
						<Button
							text={'Резистентный Acinetobacter baumannii'}
							onClick={() => {
								setClear(true)
								setAlg('acinetocacterBaumannii')
							}}
							active={alg === 'acinetocacterBaumannii'}
						/>
					</Center>
				</Grid.Col>
				<Grid.Col span={{ base: 12, md: 4 }}>
					<Center>
						<Button
							text={'Резистентный Pseudomonas aeruginosa'}
							onClick={() => {
								setClear(true)
								setAlg('pseudomonasAeruginosa')
							}}
							active={alg === 'pseudomonasAeruginosa'}
						/>
					</Center>
				</Grid.Col>
				<Grid.Col span={{ base: 12, md: 4 }}>
					<Center>
						<Button
							text={'Резистентный Klebsiella pneumoniae'}
							onClick={() => {
								setClear(true)
								setAlg('klebsiellaPneumoniae')
							}}
							active={alg === 'klebsiellaPneumoniae'}
						/>
					</Center>
				</Grid.Col>
			</Grid>

			<div className={classes.wrapper}>{renderAlgorithm()}</div>
		</div>
	)
}

export default AlgorithmPage
