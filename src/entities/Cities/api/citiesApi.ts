import { rtkApi } from '@/shared/api/rtkApi'
import { CitiesResponse } from '../model/types/cities'

const citiesApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getCity: build.mutation<CitiesResponse, { s: string }>({
			query: (body) => ({
				url: '/rus-geo/city',
				method: 'POST',
				body,
			}),
		}),
	}),
})

export const useGetCity = citiesApi.useGetCityMutation
