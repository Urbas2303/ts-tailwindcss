import { useStages } from '../../store/stageStore'
import { Stage } from './Stage'

const WorkingStages = () => {
	const stages = useStages(state => state.stages)

	return (
		<div className='mx-2 sm:mx-32 my-10 border-t-2 py-20'>
			<h2 className='font-black text-3xl text-black w-2/3'>
				Deation & Evaluation - Best Way to Kick off Your Product Idea
			</h2>
			<div className='md:flex items-start justify-center h-full s'>
				{stages.map(stage => (
					<Stage
						key={stage.id}
						title={stage.title}
						description={stage.description}
						linkText={stage.linkText}
					/>
				))}
			</div>
		</div>
	)
}

export { WorkingStages }
