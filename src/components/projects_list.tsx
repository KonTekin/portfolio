import projects from "../projects";
import styles from "../styles/projects.module.css";
interface TechProps {
	icons: string[];
}

const ProjectTech: React.FC<TechProps> = ({ icons }) => {
	return (
		<div className={styles.cardTech}>
			{icons.map((icon: string) => {
				return icon.match("typescript") ? (
					// biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
					<img className={styles.tsIcon} src={icon} alt="typescript icon" />
				) : (
					// biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
					<img className={styles.cardIcons} src={icon} alt="Other icons" />
				);
			})}
		</div>
	);
};
const ProjectList = () => {
	return (
		<div className={styles.listContainer}>
			{projects.map(({ title, status, description, iconSource, github }) => {
				return (
					// biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
					<div className={styles.card}>
						<div className={styles.cardTitle}>
							<h3 className={styles.title}> {title}</h3>
							<p className={styles.status}>{status}</p>
						</div>
						<div>
							<div className={styles.cardDescription}>{description}</div>
						</div>
						<ProjectTech icons={iconSource} />
						<div className={styles.cardActions}>
							<a
								href={github}
								target="_blank"
								className={styles.button}
								rel="noreferrer"
							>
								View Code
							</a>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ProjectList;
