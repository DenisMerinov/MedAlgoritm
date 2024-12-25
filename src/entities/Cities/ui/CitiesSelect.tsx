import { FC, memo } from 'react'
import { Loader, Select } from '@mantine/core'
import { IconMapPin } from '@tabler/icons-react'
import { useDebounce } from '@/shared/lib/hooks/useDebounce'
import { useGetCity } from '../api/citiesApi'

interface CitiesSelectProps {
	city: number
	onChangeCity: (value: number) => void
	error: string
	label?: string
}

export const CitiesSelect: FC<CitiesSelectProps> = memo((props) => {
	const { city, onChangeCity, error, label } = props

	const [getCity, { isLoading, data }] = useGetCity()

	const fetchGetCity = async (value: string) => {
		try {
			await getCity({ s: value }).unwrap()
		} catch (e: any) {
			console.log(e.data.message)
		}
	}

	const updateDebounce = useDebounce(fetchGetCity, 200)

	const onChangeSearch = (value: string) => {
		if (value.length > 1 && !city) updateDebounce(value)
	}

	const selectedData = data?.result.list.map((city) => {
		return { value: String(city.id), label: city.city }
	})

	return (
		<Select
			placeholder={label ?? 'Выберите Ваш город'}
			label={'Выберите город'}
			leftSection={<IconMapPin color={'black'} />}
			searchable
			nothingFoundMessage="Начните вводить свой город"
			rightSection={isLoading && <Loader size={'sm'} />}
			onSearchChange={onChangeSearch}
			data={selectedData}
			clearable
			onChange={(value) => onChangeCity(Number(value))}
			value={String(city)}
			error={error}
		/>
	)
})

CitiesSelect.displayName = 'CitiesSelect'
