import { ReactNode } from 'react'

type SideBlockType = {
	side: 'right' | 'left'
	children: ReactNode
}

const SideBlock = ({ side, children }: SideBlockType) => {
	return (
		<div
			className={`hidden md:block md:w-full  lg:absolute lg:w-5/6 min-h-32 bg-white shadow-2xl z-30 ${
				side === 'left' ? 'right-0' : 'left-0'
			}`}
		>
			{children}
		</div>
	)
}

export { SideBlock }
