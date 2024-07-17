import { useProjects } from '../../store/projectsStore'
import { ProjectType } from '../../types'
import Project from './Project'

const ProjectList = () => {
	const projects = useProjects(state => state.projects)

	return (
		<div className='mb-40'>
			<div className='md:flex items-center justify-center pb-10 mx-2 sm:mx-32 my-10 bg-white'>
				<h3 className='font-black text-3xl md:w-1/2 my-auto mx-auto max-w-80'>
					We Have Some Awesomr Project.
				</h3>
				<p className='text-sm font-light mb-10 text-gray-600 md:w-1/2 my-auto mx-auto  max-w-80'>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s,
				</p>
			</div>
			{projects.map((project: ProjectType, index: number) => (
				<Project
					key={project.id}
					side={index % 2 === 0 ? 'left' : 'right'}
					commentProps={{
						mainText: project.commentProps.mainText,
						imgURL: project.commentProps.imgURL,
						name: project.commentProps.name,
						position: project.commentProps.position,
					}}
					imgURL={project.imgURL}
					title={project.title}
					description={project.description}
					linkText={project.linkText}
				/>
			))}
		</div>
	)
}

export default ProjectList
