import { rtkApi } from '@/shared/api/rtkApi'
import { JobsResponse } from '@/entities/Jobs/model/types/jobs'

const jobsApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getJobs: build.query<JobsResponse, void>({
			query: () => ({
				url: '/jobs',
			}),
		}),
	}),
})

export const useGetJobs = jobsApi.useGetJobsQuery
