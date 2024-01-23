interface Project {
	title: string;
	status: string;
	description: string;
	iconSource: string[];
	github: string;
}

const projects: Project[] = [
	{
		title: 'Portfolio',
		status: 'Deployed',
		description: `My personal website to keep track of and display my projects. it also serves as a
									place for me to write blog posts about anything that I'm interested in, not just
									web development. I'll change this website continously as I find new technologies
									that I would like to try out.`,
		iconSource: ['src/assets/vite.svg', 'src/assets/react.svg'],
		github: 'https://github.com/KonTekin/portfolio',
	},
	{
		title: 'Blackjack Guru',
		status: 'In Development',
		description: `I wanted to learn the basic strategy for Blackjack, which led me to to build this
        application. Play blackjack and get hints on when to hit, stay or double down.
        Supports general rules for now but will add rules based on different areas later
        on.`,
		iconSource: ['src/assets/vite.svg', 'src/assets/react.svg', 'src/assets/icons8-typescript.svg'],
		github: '',
	},
	{
		title: 'Clanity',
		status: 'Upcomming',
		description: `This is my favorite project idea because I'm long time gamer.I feel that to many
        gaming communities still use forums and while Discord accomplishes a lot, there's
        still a void. I will be building a full fledged application to provide what I
        think is missing.`,
		iconSource: [
			'src/assets/nextjs3.svg',
			'src/assets/react.svg',
			'src/assets/icons8-typescript.svg',
		],
		github: '',
	},
];

export default projects;
