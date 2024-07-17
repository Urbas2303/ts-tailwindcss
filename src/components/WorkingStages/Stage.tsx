type StageProps = {
	title: string
	description: string
	linkText: string
}

const Stage = ({ title, description, linkText }: StageProps) => {
	return (
		<div className="className='my-auto mx-auto my-6 lg:max-w-32 flex flex-col justify-between">
			<h4 className='text-xl font-semibold mb-auto'>{title}</h4>
			<p className='my-4 flex-grow'>{description}</p>
			<a
				href='#'
				className='flex items-center text-gray-300 underline font-semibold text-xs mt-auto'
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
		</div>
	)
}

export default Stage
