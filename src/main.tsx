import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/app/App'
import { BrowserRouter } from 'react-router-dom'
import { StoreProvider } from '@/app/providers/StoreProvider'
import '@mantine/core/styles.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<StoreProvider>
				<App />
			</StoreProvider>
		</BrowserRouter>
	</React.StrictMode>,
)
