import './App.css';
import { ResumeButton } from './components/resume_button';
import ProjectList from './components/projects_list';
import Hero from './components/hero';

function App() {
	return (
		<>
			<div className='app-container'>
				<div className='nav-container'>
					<ResumeButton />
					<a href='#projects' className='nav-link'>
						Projects
					</a>
				</div>
				<Hero />
				<div className='projects-container'>
					<div className='projects-title'>
						<h2 id='projects'>Projects</h2>
					</div>
					<ProjectList />
				</div>
			</div>
		</>
	);
}

export default App;
