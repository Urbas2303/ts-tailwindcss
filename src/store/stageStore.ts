import { create } from 'zustand'
import { StageType } from '../types'

interface StagesStor {
	stages: StageType[]
}

export const useStages = create<StagesStor>((set, get) => ({
	stages: [
		{
			id: 1,
			title: 'Product Design Sprint',
			description:
				'A five-day workshop that will help you answer crucial business questions',
			linkText: 'Read More',
		},
		{
			id: 2,
			title: 'Scoping Session',
			description:
				'A workshop aimed at shaping your business idea, answering questions regarding project planning',
			linkText: 'Read More',
		},
		{
			id: 3,
			title: 'UX Review',
			description:
				'An evaluation which will help you radically improve your product.',
			linkText: 'Read More',
		},
		{
			id: 4,
			title: 'Code Review',
			description:
				'Do you know what one of the key secrets of success is what makes people successful in business',
			linkText: 'Read More',
		},
	],
}))
