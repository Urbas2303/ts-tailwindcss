import { CommentPropsType } from './components/UI/Comment'

interface PartnerLogo {
	id: number
	url: string
}

interface ProjectType {
	id: number
	commentProps: CommentPropsType
	imgURL: string
	title: string
	description: string
	linkText: string
}

interface StageType {
	id: number
	title: string
	description: string
	linkText: string
}

export type { PartnerLogo, ProjectType, StageType }
