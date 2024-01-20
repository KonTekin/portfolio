import { SocialIcons } from "./social_links";

const Hero = () => {
	return (
		<div className='hero-container'>
			<div className='hero-text-container'>
				<h1 className='hero-text-title'>Hey, I'm Kon</h1>
				<p className='hero-text-tagline'>Squashing bugs one line of code at a time</p>
				<div className='social-container'>
					<SocialIcons />
				</div>
			</div>
			<div className='image-container'>
				<img className='hero-image' src='src/assets/orange.jpg' alt='Outer space orange nebula' />
			</div>
		</div>
	);
};

export default Hero;
