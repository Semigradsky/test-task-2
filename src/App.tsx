import { FC } from 'react'

import { AnnoyingBanner, BigBanner, HorizontalBanner } from '@/features'

const App: FC = () => {
	return (
		<>
			<HorizontalBanner />
			<AnnoyingBanner
				bannerId="black-friday-2023-11-24"
				Component={BigBanner}
			/>
		</>
	)
}

export default App
