import { ResumeButton } from "./resume_button";
import styles from "../styles/navigation.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";

const Navbar = () => {
	const [isHidden, setIsHidden] = useState(true);
	const toggleNav = () => {
		setIsHidden(!isHidden);
	};
	return (
		<>
			{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<div
				className={isHidden ? `${styles.menu}` : `${styles.hidden}`}
				onClick={toggleNav}
			>
				<MenuIcon
					style={{
						fontSize: "28px",
					}}
				/>
			</div>
			<div
				className={
					isHidden
						? `${styles.container}`
						: `${styles.container} ${styles.open}`
				}
			>
				<ResumeButton />
				<a href="#projects" className={styles.link}>
					Projects
				</a>
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<div className={styles.hideArrow} onClick={toggleNav}>
					<ArrowForwardIosIcon />
				</div>
			</div>
		</>
	);
};

export default Navbar;
