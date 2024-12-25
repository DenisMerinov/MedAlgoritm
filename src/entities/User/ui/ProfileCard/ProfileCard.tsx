import { FC, memo, ReactNode } from 'react'
import classes from './ProfileCard.module.css'
import { useGetDataUser } from '@/entities/User'
import { Avatar, Box, Center, Group, Skeleton, Stack, Text, Title } from '@mantine/core'

interface ProfileCardProps {
	UpdateAvaButton: ReactNode
	UpdateProfileButton: ReactNode
}
export const ProfileCard: FC<ProfileCardProps> = memo(
	({ UpdateAvaButton, UpdateProfileButton }) => {
		const { isLoading, data } = useGetDataUser()

		if (isLoading) {
			return (
				<div>
					<Skeleton h={150} w={'100%'} />
					<Skeleton h={50} w={'100%'} />
					<Skeleton h={50} w={'100%'} />
					<Skeleton h={50} w={'100%'} />
				</div>
			)
		}

		if (!data) return null

		const { fio, work_place, job_name, city_name, email, ava } = data.result

		return (
			<div>
				<div className={classes.card}>
					<Center>
						<Avatar
							alt={fio ?? 'UserAva'}
							className={classes.ava}
							src={ava}
							my={30}
							w={250}
							h={250}
						/>
					</Center>

					{UpdateAvaButton}

					<Stack mt={50}>
						<Group>
							<Text c={'gray'}>Email:</Text>
							<Text>{email}</Text>
						</Group>
						<Group>
							<Text c={'gray'}>ФИО:</Text>
							<Text>{fio}</Text>
						</Group>
						<Group>
							<Text c={'gray'}>Специальность:</Text>
							<Text>{job_name}</Text>
						</Group>
						<Group>
							<Text c={'gray'}>Город:</Text>
							<Text>{city_name}</Text>
						</Group>
						<Group>
							<Text c={'gray'}>Учреждение:</Text>
							<Text>{work_place}</Text>
						</Group>

						{UpdateProfileButton}
					</Stack>
				</div>
			</div>
		)
	},
)

ProfileCard.displayName = 'ProfileCard'
