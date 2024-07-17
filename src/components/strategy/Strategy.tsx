import Comment from '../UI/Comment'

const Strategy = () => {
	const commentMainText =
		'With More than 10 Years of Knowledge and Expertise we Design and Code Websites and Apps, We Build Brands and Help Them Succeed'
	const commentImgURL =
		'https://s3-alpha-sig.figma.com/img/10c3/a4b7/54251ca08ddd55e0b307621c2de4217b?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DDyeDSENVfGxKf7OJCOhW4N1ElKj1GnWOm0Wxse8p3WSKjkqPqfh7zSZTCGWdSbMEV5qFghy0I~T7gH3IxCo2n79TO8SMh0mmHbFiw5LjOgaOEpZGS-gUbi9N~FUFv4fNCrKY98NvImsG9xFo-gW9Hn9vrKGYq2NC2~NyZOzXJ5A1R4ufQOmAsI~eFVpY50TBpG~AOVBVlOhAPHm7L2qIRL5Zf1oLcs8wfyoOllcNiFnz5mUgsW7i-QOpcJoNp1o6qhNuJ7Tkq4FOsZ6~Sc-BIg-wrDPUldI7s~Mz91Clix3FZmF5VQp~XQnqqRBbF2NCGhTwrWXpssgQ2yHqm1VXQ__'
	const commentName = 'Genevieve Rodriquez'
	const commentPosition = 'Founder & CEO, Webovio'
	return (
		<div className='flex mx-2 sm:mx-32 my-10 items-end border-b-2 pb-20'>
			<div className='bg-white p-5 lg:w-2/3 rounded-xl'>
				<p className='text-sm font-light mb-10 text-gray-600'>
					What we do for you
				</p>
				<h3 className='font-black text-3xl'>
					Strategy. Design Content. Technology Development{' '}
				</h3>
				<p className='text-sm font-light mb-10 text-gray-600'>
					There’s no secret sauce, no wizard behind the curtain. What makes
					Aerolab tick is an interdisciplinary team with a framework that
					fosters candid collaboration.
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
					More know About us
				</a>
			</div>
			<Comment
				mainText={commentMainText}
				imgURL={commentImgURL}
				name={commentName}
				position={commentPosition}
				addClass='lg:pt-60'
			/>
		</div>
	)
}

export default Strategy
