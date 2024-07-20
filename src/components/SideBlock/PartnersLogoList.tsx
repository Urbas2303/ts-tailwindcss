import { usePartnersLogo } from '../../store/partnersStore'

const PartnersLogoList = () => {
	const { partnersLogo } = usePartnersLogo()

	return (
		<div className='flex justify-center items-center h-full'>
			{partnersLogo.map(logo => (
				<img
					className='my-auto mx-auto grayscale'
					key={logo.id}
					src={logo.url}
					alt='logo'
				/>
			))}
		</div>
	)
}

export { PartnersLogoList }
