import { FC, memo } from 'react'
import { Select, Skeleton } from '@mantine/core'
import { useGetJobs } from '@/entities/Jobs/api/jobsApi'
import { IconStethoscope } from '@tabler/icons-react'

interface JobsSelectProps {
	job: number
	onChangeJob: (value: number) => void
	error: string
}

export const JobsSelect: FC<JobsSelectProps> = memo((props) => {
	const { job, onChangeJob, error } = props

	const { isLoading, data } = useGetJobs()

	if (isLoading) {
		return <Skeleton h={40} w={'100%'} />
	}

	if (!data) return null

	const selectedData = data.result.list.map((jobs) => ({
		value: String(jobs.value),
		label: jobs.label,
	}))

	return (
		<Select
			placeholder={'Выберите специальность'}
			label={'Ваша специальность'}
			data={selectedData}
			onChange={(value) => onChangeJob(Number(value))}
			value={String(job)}
			error={error}
			leftSection={<IconStethoscope color={'black'} />}
		/>
	)
})

JobsSelect.displayName = 'JobsSelect'
