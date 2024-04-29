import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import styles from "../styles/resume.module.css";
export const ResumeButton = () => {
	return (
		<div className={styles.container}>
			<a
				target="_blank"
				className={styles.button}
				href="Resume.pdf"
				rel="noreferrer"
			>
				<DownloadForOfflineIcon className={styles.icon} />
				<div>Resume</div>
			</a>
		</div>
	);
};
