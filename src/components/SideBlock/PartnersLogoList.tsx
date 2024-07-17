import { usePartnersLogo } from '../../store/partnersStore'
import { PartnerLogo } from '../../types'

const PartnersLogoList = () => {
	const logoList = usePartnersLogo(state => state.partnersLogo)

	return (
		<div className='flex justify-center items-center h-full'>
			{logoList.map((logo: PartnerLogo) => (
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

export default PartnersLogoList
