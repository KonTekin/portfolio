import projects from '../projects';
interface TechProps {
	icons: string[];
}

const ProjectTech: React.FC<TechProps> = ({ icons }) => {
	return (
		<div className='project-card-tech'>
			{icons.map((icon: string) => {
				return icon.match('typescript') ? (
					<img className='ts-icon' src={icon}></img>
				) : (
					<img className='project-card-icons' src={icon}></img>
				);
			})}
		</div>
	);
};
const ProjectList = () => {
	return (
		<div className='projects-list-container'>
			{projects.map(({ title, status, description, iconSource, github }) => {
				return (
					<div className='project-card'>
						<div className='project-card-title'>
							<h3 className='project-title'>{title}</h3>
							<p className='project-status'>{status}</p>
						</div>
						<div className='project-card-content'>
							<div className='project-card-description'>{description}</div>
						</div>
						<ProjectTech icons={iconSource} />
						<div className='project-card-actions'>
							<a href={github} target='_blank' className='project-code-button'>
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
