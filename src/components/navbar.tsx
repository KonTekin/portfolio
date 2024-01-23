import { ResumeButton } from "./resume_button";

const Navbar = () => {
	return (
		<div className='nav-container'>
			<ResumeButton />
			<a href='#projects' className='nav-link'>
				Projects
			</a>
		</div>
	);
};

export default Navbar;
