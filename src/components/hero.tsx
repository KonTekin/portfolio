import { SocialIcons } from "./social_links";
import styles from "../styles/hero.module.css";

const Hero = () => {
	return (
		<div className={styles.container}>
			<div className={styles.text}>
				<h1 className={styles.title}>Hey, I'm Kon</h1>
				<p className={styles.tagline}>
					Squashing bugs one line of code at a time
				</p>
				<SocialIcons />
			</div>
			<div>
				<img
					className={styles.heroImage}
					src="src/assets/orange.jpg"
					alt="Outer space orange nebula"
				/>
			</div>
		</div>
	);
};

export default Hero;
