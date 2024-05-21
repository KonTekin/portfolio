interface Project {
	title: string;
	status: string;
	description: string;
	iconSource: string[];
	github?: string;
}

const projects: Project[] = [
	{
		title: "Portfolio",
		status: "Deployed",
		description: `My personal website to keep track of and display my projects. it also serves as a
									place for me to write blog posts about anything that I'm interested in, not just
									web development. I'll change this website continously as I find new technologies
									that I would like to try out.`,
		iconSource: ["src/assets/vite.svg", "src/assets/react.svg"],
		github: "https://github.com/KonTekin/portfolio",
	},
	{
		title: "Blackjack",
		status: "Completed",
		description:
			"While blackjack may seem like a simple game, implementing the game mechanics, card styling, and state management was a fun challange. Check out the repo to try out the game! ",
		iconSource: [
			"src/assets/vite.svg",
			"src/assets/react.svg",
			"src/assets/icons8-typescript.svg",
		],
		github: "https://github.com/KonTekin/blackjack-sensei",
	},
	{
		title: "Item Vendor",
		status: "In Progress",
		description:
			"This will be an app for one of my childhood video games that I used to play, Runescape. It will help keep track of the items a player buys, sells and the realized profits. This app will be built with the local first mentaility and will be able to run with no internet.",
		iconSource: [
			"src/assets/vite.svg",
			"src/assets/react.svg",
			"src/assets/icons8-typescript.svg",
		],
	},
	// {
	// 	title: "Clanity",
	// 	status: "Upcomming",
	// 	description: `This is my favorite project idea because I'm long time gamer.I feel that to many
	//     gaming communities still use forums and while Discord accomplishes a lot, there's
	//     still a void. I will be building a full fledged application to provide what I
	//     think is missing.`,
	// 	iconSource: [
	// 		"src/assets/nextjs3.svg",
	// 		"src/assets/react.svg",
	// 		"src/assets/icons8-typescript.svg",
	// 	],
	// 	github: "",
	// },
];

export default projects;
