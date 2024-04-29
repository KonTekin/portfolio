import "./App.css";
import ProjectList from "./components/projects_list";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import projectStyles from "./styles/projects.module.css";

function App() {
	return (
		<>
			<div className="app-container">
				<Hero />
				<Navbar />
				<div className={projectStyles.container}>
					<div className={projectStyles.projectsTitle}>
						<h2 id="projects">Projects</h2>
					</div>
					<ProjectList />
				</div>
			</div>
		</>
	);
}

export default App;
