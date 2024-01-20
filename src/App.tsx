import './App.css';
import { SocialIcons } from './components/social_links';
import { ResumeButton } from './components/resume_button';


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
				<div className='hero-container'>
					<div className='hero-text-container'>
						<h1 className='hero-text-title'>Hey, I'm Kon</h1>
						<p className='hero-text-tagline'>Squashing bugs one line of code at a time</p>
						<div className='social-container'>
							<SocialIcons />
						</div>
					</div>
					<div className='image-container'>
						<img
							className='hero-image'
							src='src/assets/orange.jpg'
							alt='Outer space orange nebula'
						/>
					</div>
				</div>
				<div className='projects-container'>
					<div className='projects-title'>
						<h2 id='projects'>Projects</h2>
					</div>
					<div className='projects-list-container'>
						<div className='project-card'>
							<div className='project-card-title'>
								<h3 className='project-title'>Portfolio</h3>
								<p className='project-status'>Deployed</p>
							</div>
							<div className='project-card-content'>
								<div className='project-card-description'>
									My personal website to keep track of and display my projects. it also serves as a
									place for me to write blog posts about anything that I'm interested in, not just
									web development. I'll change this website continously as I find new technologies
									that I would like to try out.
								</div>
							</div>
							<div className='project-card-tech'>
								<img src='src/assets/vite.svg' className='project-card-icons'></img>
								<img src='src/assets/react.svg' className='project-card-icons'></img>
								{/* <img src='src/assets/icons8-typescript.svg' className='ts-icon'></img> */}
							</div>
							<div className='project-card-actions'>
								<a className='project-code-button'>View Code</a>
							</div>
						</div>
						<div className='project-card'>
							<div className='project-card-title'>
								<h3 className='project-title'>Blackjack Guru</h3>
								<p className='project-status'>In development</p>
							</div>
							<div className='project-card-content'>
								<div className='project-card-description'>
									I wanted to learn the basic strategy for Blackjack, which led me to to build this
									application. Play blackjack and get hints on when to hit, stay or double down.
									Supports general rules for now but will add rules based on different areas later
									on.
								</div>
							</div>
							<div className='project-card-tech'>
								<img src='src/assets/vite.svg' className='project-card-icons'></img>
								<img src='src/assets/react.svg' className='project-card-icons'></img>
								<img src='src/assets/icons8-typescript.svg' className='ts-icon'></img>
							</div>
							<div className='project-card-actions'>
								<a className='project-code-button'>View Code</a>
							</div>
						</div>
						<div className='project-card'>
							<div className='project-card-title'>
								<h3 className='project-title'>Clanity</h3>
								<p className='project-status'>Upcomming</p>
							</div>
							<div className='project-card-content'>
								<div className='project-card-description'>
									This is my favorite project idea because I'm long time gamer.I feel that to many
									gaming communities still use forums and while Discord accomplishes a lot, there's
									still a void. I will be building a full fledged application to provide what I
									think is missing.
								</div>
							</div>
							<div className='project-card-tech'>
								<img src='src/assets/nextjs3.svg' className='project-card-icons next-icon'></img>
								<img src='src/assets/react.svg' className='project-card-icons'></img>
								<img src='src/assets/icons8-typescript.svg' className='ts-icon'></img>
							</div>
							<div className='project-card-actions'>
								<a className='project-code-button'>View Code</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
