import { ProjectBox, Heading } from ".";
import { ProjectProps } from "@/types";

const projects: ProjectProps[] = [
	{
		title: "TaskWise",
		description:
			"An intuitive and user-friendly todo web application built with Next.js and Firebase. TaskWise allows users to manage their tasks efficiently by adding, updating, and deleting todo items. The application also features user authentication and authorization.",
		techStack: ["Next.js", "Firebase", "Clerk", "Vercel"],
		github: "https://github.com/emmaoliviamellgren/taskwise",
		demo: "https://taskwise.vercel.app/",
	},
	{
		title: "Nestify",
		description:
			"Nestify is a mock web application inspired by Airbnb, built using Next.js and Firebase with Stripe API for (mock) payments. It is a modern, scalable, and user-friendly application that allows users to browse (fictional) housings, book stays, and manage their bookings.",
		techStack: ["Next.js", "Typescript", "Firebase", "Stripe API"],
		github: "https://github.com/emmaoliviamellgren/nestify",
		demo: "https://nestify-gamma.vercel.app/",
	},
	{
		title: "Performance Checker",
		description:
			'A developer-focused accessibility and performance auditing tool built with Next.js. PerformanceChecker allows users to analyze any website’s performance using Google’s PageSpeed Insights API. The app provides a clear breakdown of key metrics such as performance, SEO, best practices, and accessibility.',
		techStack: ["Next.js", "TypeScript", "PageSpeed Insights API"],
		github: "https://github.com/emmaoliviamellgren/performance-checker",
		demo: "https://performancechecker.vercel.app/",
	},
	{
		title: "Weather of Today",
		description:
			"I wanted to recreate my weather application that was built with vanilla JavaScript. I was interested in learning Vue, so I thought it would be fun to rebuild it with Vue and learn the language in the process. This web applications offers an intuitive and user-friendly experience, with geolocation API and a multi-day forecast.",
		techStack: ["Vue", "Netlify", "Geolocation API"],
		github: "https://github.com/emmaoliviamellgren/weather-vue",
		demo: "https://weatheroftoday.netlify.app",
	},
];

const Projects = () => {
	return (
		<>
			<Heading contentTitle="Highlighted projects" />
			<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-6 relative pb-1">
				{projects.map((project, index) => (
					<ProjectBox
						key={index}
						{...project}
					/>
				))}
			</div>
		</>
	);
};

export default Projects;
