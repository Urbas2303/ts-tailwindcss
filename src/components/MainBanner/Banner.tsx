import MainText from './MainText'
import Navigation from './Navigation'

const Banner = () => {
	return (
		<div className='relative h-auto min-w-80'>
			<img
				className='absolute -top-24 md:-top-56 w-full h-screen object-cover -scale-x-100 -z-20'
				src='https://s3-alpha-sig.figma.com/img/b2de/d413/912b641c73d9d4c83ee09aae3aa78b74?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O9CYQnJdPRvrCsGUmBHtMSceuDAb1~VpajoBNGBqvCKT3KXL8Gty6jCCfhOpYo3miEcOUhP6qb~1QQhl3qUuQNBsosFyf2oU0H7ryCnOimme0nlEAu3S4Vl-D0M9xTRKcWQwQJj0mKdxBIpLgfSNhvLeGLsw7P78SBMNokX5elx8bNVbXpWx8IHGT5RPk3n218AIzkglRitXLH~t5fhXoQPTKgDyXsL7038laWfYdsILQikuqn9UZbelCKALKyrrzbWU3K3lVog6O83pG0atM447aqm6gj2LtAXt-HPBry9JiBEtN9Z7b9XiKogfPXMkd~zRHmsLDpYdYuNZUl-7cA__'
				alt='banner-img'
			/>
			<div className='relative z-10 mx-2 sm:mx-32 my-10'>
				<Navigation />
				<MainText />
			</div>
		</div>
	)
}

export default Banner
