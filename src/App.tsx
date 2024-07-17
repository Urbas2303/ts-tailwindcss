import Footer from './components/Footer/Footer'
import Banner from './components/MainBanner/Banner'
import ProjectList from './components/Projects/ProjectList'
import PartnersLogoList from './components/SideBlock/PartnersLogoList'
import SideBlock from './components/SideBlock/SideBlock'
import Strategy from './components/strategy/Strategy'
import WorkingStages from './components/WorkingStages/WorkingStages'

function App() {
	return (
		<>
			<Banner />
			<SideBlock side='left'>
				<PartnersLogoList />
			</SideBlock>
			<Strategy />
			<ProjectList />
			<WorkingStages />
			<SideBlock side='right'>
				<div className='mx-10 my-10'>
					<h2 className='text-3xl font-bold'>
						Let’s make something <br /> amazing together.
					</h2>
					<a
						href='#'
						className='flex items-center text-gray-300 underline font-semibold text-xs mt-5'
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
						LET'S GET STARTED
					</a>
				</div>
			</SideBlock>
			<Footer />
		</>
	)
}

export default App
