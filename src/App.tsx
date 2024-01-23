import './App.css';
import ProjectList from './components/projects_list';
import Hero from './components/hero';
import Navbar from './components/navbar';

function App() {
	return (
		<>
			<div className='app-container'>
				<Hero />
				<Navbar />
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
