export type CommentPropsType = {
	mainText: string
	imgURL: string
	name: string
	position: string
	addClass?: string
}

const Comment = ({
	mainText,
	imgURL,
	name,
	position,
	addClass,
}: CommentPropsType) => {
	return (
		<div
			className={`hidden md:block w-auto max-w-96 px-5 pb-5 pt-5 bg-white shadow-2xl rounded-xl ${
				addClass ? addClass : ''
			}`}
		>
			<p>{mainText}</p>
			<div className='flex mt-6'>
				<img className='h-14 w-14 rounded-full mr-2' src={imgURL} alt='img' />
				<div>
					<p className='font-semibold'>{name}</p>
					<p className='text-sm'>{position}</p>
				</div>
			</div>
		</div>
	)
}

export { Comment }
