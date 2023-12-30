import clsx from 'clsx'
import { forwardRef } from 'react'

import CloseIcon from '@/assets/close.svg?react'
import { LinkButton } from '@/shared/ui'

import styles from './index.module.scss'

export type BigBannerProps = {
	onClose?: () => void
}

export const BigBanner = forwardRef<HTMLDivElement, BigBannerProps>(
	({ onClose }, ref) => {
		return (
			<div className={clsx(styles.container, 'text-medium')} ref={ref}>
				{onClose && (
					<a
						href="#"
						className={styles.closeIcon}
						onClick={(event) => {
							event.preventDefault()
							onClose()
						}}
					>
						<CloseIcon />
					</a>
				)}

				<div className={styles.content}>
					<div className={styles['black-friday']}>Black Friday</div>
					<div className={styles.discount}>10%OFF</div>
					<div className={styles.clarification}>
						Use code <span className="text-gold">10FRIDAY</span> at checkout
					</div>

					<LinkButton type="dark">
						<div className={styles.wide}>Shop now through Monday</div>
						<div className={styles.compact}>Shop now</div>
					</LinkButton>
				</div>
			</div>
		)
	},
)
