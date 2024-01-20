import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../styles/socials.css';

export const SocialIcons = () => {
	return (
		<div className='social-box'>
			<a href='https://github.com/KonTekin' target='_blank'>
				<GitHubIcon className='icon' />
			</a>
			<a href='https://www.linkedin.com/in/konstantin-tekin-96b674239/' target='_blank'>
				<LinkedInIcon className='icon' />
			</a>
			<a href='https://twitter.com/KonstantinTekin' target='_blank'>
				<TwitterIcon className='icon' />
			</a>
		</div>
	);
};
