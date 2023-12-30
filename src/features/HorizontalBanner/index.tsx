import clsx from 'clsx'
import { forwardRef, useEffect, useRef } from 'react'

import Dot from '@/assets/dot.svg?react'
import imgPath from '@/assets/small-party.png'
import { CompactLink, LinkButton } from '@/shared/ui'
import { TopBannerDisappearedFromView } from '@/shared/window-events'

import styles from './index.module.scss'

export const HorizontalBanner = forwardRef<HTMLDivElement>(() => {
	const topBannerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			if (!entries[0].isIntersecting) {
				window.dispatchEvent(new CustomEvent(TopBannerDisappearedFromView))

				observer.disconnect()
			}
		})

		if (topBannerRef.current) {
			observer.observe(topBannerRef.current)
		}

		return () => {
			observer.disconnect()
		}
	}, [])

	return (
		<div className={styles.container} ref={topBannerRef}>
			<img
				className={styles['start-part']}
				src={imgPath}
				height="54px"
				alt=""
			/>

			<div className={styles.wide}>
				<div className={styles['center-part']}>
					<span>
						<span className="text-semi-bold">Black Friday</span>
						<span className={styles['hide']}>, 24-27 Nov</span>
					</span>
					<Dot />
					<span className="text-semi-bold text-gold text-compressed">
						10%OFF
					</span>
					<Dot />
					<span>
						<span>
							Use code{' '}
							<span className="text-semi-bold text-gold">10FRIDAY</span>
						</span>
						<span className={styles['hide']}> at checkout</span>
					</span>
				</div>
			</div>

			<div className={styles.compact}>
				<div className={styles['center-part']}>
					<span>
						<span className="text-semi-bold">Black Friday,</span>
						<span className="text-semi-bold text-gold text-compressed">
							10%OFF
						</span>
					</span>
				</div>
			</div>

			<LinkButton
				type="light"
				className={clsx(styles['end-part'], styles.wide)}
			>
				Shop now
			</LinkButton>

			<CompactLink className={clsx(styles['end-part'], styles.compact)} />
		</div>
	)
})
