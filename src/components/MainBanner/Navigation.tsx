const Navigation = () => {
	return (
		<nav className='flex items-center justify-between'>
			<div className='lg:flex'>
				<a href='#'>
					<svg
						width='55'
						height='36'
						viewBox='0 0 55 36'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M36.6502 30.4842C35.35 32.6512 32.2094 32.6511 30.9092 30.4842L12.7815 0.271275L48.8656 0.271275C51.4676 0.271275 53.0748 3.10989 51.7361 5.34111L36.6502 30.4842Z'
							fill='#FFD723'
						/>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M18.1277 30.4842C19.4279 32.6512 22.5685 32.6511 23.8687 30.4842L41.9964 0.271275L5.91239 0.271275C3.31037 0.271275 1.70317 3.10989 3.0419 5.34111L18.1277 30.4842Z'
							fill='white'
						/>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M12.7815 0.27124H41.9964L27.39 24.617L12.7815 0.27124Z'
							fill='#F6F6F6'
						/>
					</svg>
				</a>
				<h2 className='ml-4 font-black uppercase text-xl text-white'>
					yukolokolcev.
				</h2>
			</div>
			<div className='bg-white rounded-full p-1 ml-4'>
				<a href='#'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className='size-8'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
						/>
					</svg>
				</a>
			</div>
		</nav>
	)
}

export { Navigation }
