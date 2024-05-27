import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
// import TwitterIcon from "@mui/icons-material/Twitter";
import styles from "../styles/socials.module.css";

export const SocialIcons = () => {
	return (
		<div className={styles.container}>
			<div className={styles.socials}>
				<a href="https://github.com/KonTekin" target="_blank" rel="noreferrer">
					<GitHubIcon sx={{ fontSize: 30 }} className={styles.icon} />
				</a>
				<a
					href="https://www.linkedin.com/in/konstantin-tekin-96b674239/"
					target="_blank"
					rel="noreferrer"
				>
					<LinkedInIcon sx={{ fontSize: 30 }} className={styles.icon} />
				</a>
				{/* <a
					href="https://twitter.com/KonstantinTekin"
					target="_blank"
					rel="noreferrer"
				>
					<TwitterIcon className={styles.icon} />
				</a> */}
			</div>
		</div>
	);
};
