import { SocialIcons } from "./social_links";
import styles from "../styles/hero.module.css";

const Hero = () => {
	return (
		<div className={styles.container}>
			<div className={styles.text}>
				<h1 className={styles.title}>Hey, I'm Kon</h1>
				<p className={styles.tagline}>
					My place for all things dev, tech, and personal interests!
				</p>
				<SocialIcons />
			</div>
			{/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
			<div className={styles.imageContainer}></div>
			<div>
				<img
					className={styles.heroImage}
					src="../orange.jpg"
					alt="Outer space orange nebula"
				/>
			</div>
		</div>
	);
};

export default Hero;
