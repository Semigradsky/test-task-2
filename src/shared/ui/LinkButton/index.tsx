import clsx from 'clsx'
import { ComponentPropsWithRef, FC } from 'react'

import styles from './index.module.scss'

type Props = ComponentPropsWithRef<'a'> & {
	type: 'dark' | 'light'
}

export const LinkButton: FC<Props> = ({
	children,
	type,
	className,
	...other
}) => {
	return (
		<a href="#" className={clsx(className, styles[type])} {...other}>
			{children}
		</a>
	)
}
