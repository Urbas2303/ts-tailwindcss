import { Comment, CommentPropsType } from '../UI/Comment'

type ProjectProps = {
	side: 'right' | 'left'
	commentProps: CommentPropsType
	imgURL: string
	title: string
	description: string
	linkText: string
}

const Project = ({
	side,
	commentProps,
	imgURL,
	title,
	description,
	linkText,
}: ProjectProps) => {
	const commentMainText = commentProps.mainText

	const commentImgURL = commentProps.imgURL

	const commentName = commentProps.name

	const commentPosition = commentProps.position

	return (
		<div
			className={`my-20 lg:flex ${side === 'right' ? 'flex-row-reverse' : ''}`}
		>
			<img
				className='w-full absolute lg:static lg:w-1/2 object-cover -z-10 max-h-96'
				src={imgURL}
				alt='img'
			/>
			<div className='px-14 pt-4'>
				<h3 className='font-black text-3xl text-gray-100 lg:text-black'>
					{title}
				</h3>
				<p className='text-sm font-light mb-10 text-gray-200 lg:text-black'>
					{description}
				</p>
				<a
					href='#'
					className='inline-flex items-center text-gray-300 underline font-semibold text-xs'
				>
					<span className='mr-2'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 16 16'
							fill='#d4d4d8'
							className='size-2'
						>
							<path
								fillRule='evenodd'
								d='M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z'
								clipRule='evenodd'
							/>
						</svg>
					</span>
					{linkText}
				</a>
				<div
					className={`lg:absolute ${
						side === 'right' ? 'right-1/4' : 'left-1/4'
					} mt-4`}
				>
					<Comment
						mainText={commentMainText}
						imgURL={commentImgURL}
						name={commentName}
						position={commentPosition}
					/>
				</div>
			</div>
		</div>
	)
}

export { Project }
