const MainText = () => {
	return (
		<section className='mt-10 text-white lg:w-2/3 xl:w-1/2'>
			<p>A place where</p>
			<h1 className='my-10 font-bold text-5xl'>
				A creative agency for redemptive brands
			</h1>
			<p>
				Anteelo is a leading strategic design firm that builds powerful digital
				solutions for startups and enterprises.
			</p>
			<a
				href='#'
				className='inline-flex items-center text-yellow-400 underline font-semibold'
			>
				<span className='mr-2'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 16 16'
						fill='rgb(250 204 21)'
						className='size-3'
					>
						<path
							fillRule='evenodd'
							d='M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z'
							clipRule='evenodd'
						/>
					</svg>
				</span>
				Get in touch
			</a>
		</section>
	)
}

export { MainText }
