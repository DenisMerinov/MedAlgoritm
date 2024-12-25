import { Box, Grid } from '@mantine/core'
import { UpdateAvaButton } from '@/features/updateProfile'
import { memo } from 'react'
import { ProfileCard } from '@/entities/User'
import { UpdateProfileButton } from '@/features/updateProfile'
import { Title } from '@mantine/core'

const ProfilePage = () => {
	return (
		<Grid w={'100%'}>
			<Grid.Col span={12}>
				<Title order={2}>Личный кабинет</Title>
			</Grid.Col>

			<Grid.Col span={{ base: 12, md: 6 }}>
				<ProfileCard
					UpdateAvaButton={<UpdateAvaButton />}
					UpdateProfileButton={<UpdateProfileButton />}
				/>
			</Grid.Col>
			<Grid.Col span={{ base: 12, md: 6 }}>
				<Box bg={'gradient'} w={'100%'} h={'100%'} style={{ borderRadius: 30 }}></Box>
			</Grid.Col>
		</Grid>
	)
}

export default memo(ProfilePage)
