import React, { FC, ForwardRefExoticComponent, useRef, useState } from 'react'

import { useEmergingElement } from './useEmergingElement'

type AnnoyingBannerProps = {
	onClose: () => void
	Component: ForwardRefExoticComponent<
		{
			onClose?: () => void
		} & React.RefAttributes<HTMLDivElement>
	>
}

const AnnoyingBanner: FC<AnnoyingBannerProps> = ({ Component, onClose }) => {
	const bannerRef = useRef<HTMLDivElement>(null)

	useEmergingElement(bannerRef)

	return <Component ref={bannerRef} onClose={onClose} />
}

type AnnoyingBannerWrapperProps = {
	bannerId: string
	Component: ForwardRefExoticComponent<
		{
			onClose?: () => void
		} & React.RefAttributes<HTMLDivElement>
	>
}

export const AnnoyingBannerWrapper: FC<AnnoyingBannerWrapperProps> = ({
	bannerId,
	Component,
}) => {
	const [showBanner, setShowBanner] = useState(
		localStorage.getItem(`hide-banner-${bannerId}`) === null,
	)

	if (!showBanner) {
		return null
	}

	return (
		<AnnoyingBanner
			Component={Component}
			onClose={() => {
				localStorage.setItem(`hide-banner-${bannerId}`, 'yes')
				setShowBanner(false)
			}}
		/>
	)
}
