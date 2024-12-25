import { PageCentered } from '@/widgets/PageCentered'
import { Card } from '@mantine/core'
import { ChangePasswordForm } from '@/features/LostPassword'

const ChangePasswordPage = () => {
	return (
		<PageCentered>
			<Card radius={'lg'} shadow={'lg'} withBorder maw={600} w={'100%'}>
				<ChangePasswordForm />
			</Card>
		</PageCentered>
	)
}

export default ChangePasswordPage
