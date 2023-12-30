import {
	RefObject,
	useCallback,
	useEffect,
	useLayoutEffect,
	useRef,
} from 'react'

import { TopBannerDisappearedFromView } from '@/shared/window-events'

export const useEmergingElement = (elementRef: RefObject<HTMLElement>) => {
	const startTopRef = useRef(0)

	const setOpacity = useCallback(() => {
		const endTop = window.innerHeight / 2
		const current =
			window.innerHeight - elementRef.current!.getBoundingClientRect().top

		if (current >= endTop) {
			elementRef.current!.style.opacity = '1'
			window.removeEventListener('scroll', setOpacity)
			return
		}

		elementRef.current!.style.opacity = String(
			(current - startTopRef.current) / (endTop - startTopRef.current),
		)
	}, [elementRef])

	const startHandleScrolling = useCallback(() => {
		startTopRef.current =
			window.innerHeight - elementRef.current!.getBoundingClientRect().top
		setOpacity()
		window.addEventListener('scroll', setOpacity)
	}, [elementRef, setOpacity])

	useEffect(() => {
		window.addEventListener(TopBannerDisappearedFromView, startHandleScrolling)

		return () => {
			window.removeEventListener(
				TopBannerDisappearedFromView,
				startHandleScrolling,
			)
			window.removeEventListener('scroll', setOpacity)
		}
	}, [setOpacity, startHandleScrolling])

	useLayoutEffect(() => {
		elementRef.current!.style.opacity = '0'
	}, [elementRef, setOpacity])
}
