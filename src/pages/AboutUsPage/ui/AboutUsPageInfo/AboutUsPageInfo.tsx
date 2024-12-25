import classes from './AboutUsPageInfo.module.css'
import { Box, Grid, Image, List, Stack, Text, Title } from '@mantine/core'

export const AboutUsPageInfo = () => {
	return (
		<Grid mt={20}>
			<Grid.Col span={{ base: 12, md: 6 }} order={{ base: 2, md: 1 }}>
				<Stack gap={'sm'}>
					<Title order={2}>О нас</Title>
					<Text>
						Система поддержки принятия решений — это быстрый и легкий доступ к
						информации, которая поможет в рутинной работе и в решении редких клинически
						сложных задач: под рукой всегда будут актуальные алгоритмы диагностики и
						лечения в интерактивном формате.
					</Text>
					<Text>
						Это мощный инструмент для профессионалов, которые ценят свое время и могут
						использовать его при принятии решений о назначении стартовой
						антибактериальной терапии в случае инфекции, вызванной экстремально
						резистентными штаммами грамотрицательных микроорганизмов ( Klebsiella
						pneumoniae, Pseudomonas aeruginosa и Acinetobacter baumannii).
					</Text>
					<Box>
						<Text fw={600}>
							Система поддержки принятия врачебных решений пригодится в работе:
						</Text>
						<List>
							<List.Item>руководителей медицинских организаций,</List.Item>
							<List.Item>заведующих отделениями ОРИТ,</List.Item>
							<List.Item>врачей анестезиологов-реаниматологов,</List.Item>
							<List.Item>клинических фармакологов,</List.Item>
							<List.Item>госпитальных эпидемиологов,</List.Item>
							<List.Item> микробиологов.</List.Item>
						</List>
					</Box>

					<Text>
						Алгоритмы системы разработаны ведущими экспертами ГКБ имени С.С. Юдина
						Департамента здравоохранения города Москвы и учитывают факторы риска,
						механизмы резистентности грамотрицательных бактерий и их распространенность
						в ОРИТ.
					</Text>
					<Text>
						В системе представлены алгоритмы выбора АБП при инфекциях, вызванных
						Acinetobacter baumannii, Klebsiella pneumoniae, Pseudomonas aeruginosa,
						резистентных к карбапенемам, а также схемы дозирования антибиотиков у
						пациентов с почечной недостаточностью.
					</Text>
				</Stack>
			</Grid.Col>
			<Grid.Col span={{ base: 12, md: 6 }} order={{ base: 1, md: 2 }}>
				<Image src={'assets/images/about-img.png'} />
			</Grid.Col>
		</Grid>
	)
}
