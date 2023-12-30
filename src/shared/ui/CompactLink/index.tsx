import clsx from 'clsx'
import { ComponentPropsWithRef, FC } from 'react'

import Chevron from '@/assets/chevron.svg?react'

import styles from './index.module.scss'

type Props = Omit<ComponentPropsWithRef<'a'>, 'children'>

export const CompactLink: FC<Props> = ({ className, ...other }) => {
	return (
		<a href="#" className={clsx(className, styles.link)} {...other}>
			<Chevron />
		</a>
	)
}
