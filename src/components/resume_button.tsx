import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import '../styles/resume.css';
export const ResumeButton = () => {
	return (
		<div className='resume-box'>
			<a target='_blank' className='button' href='Resume.pdf'>
				<DownloadForOfflineIcon className='resume-icon' />
				<div>Resume</div>
			</a>
		</div>
	);
};
