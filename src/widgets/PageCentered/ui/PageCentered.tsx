import { FC, memo, ReactNode } from 'react'
import classes from './PageCentered.module.css'

interface PageCenteredProps {
	children: ReactNode
}

export const PageCentered: FC<PageCenteredProps> = memo(({ children }) => {
	return <div className={classes.pageCentered}>{children}</div>
})

PageCentered.displayName = 'PageCentered'
