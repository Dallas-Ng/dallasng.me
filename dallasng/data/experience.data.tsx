import { Text } from '@mantine/core';

export const EXPERIENCE = [
	// {
	// 	title: 'Freelance Software Engineer',
	// 	company: 'dallasng.dev',
	// 	from: 'Jan 2020',
	// 	to: 'Present',
	// 	imgUrl: '/logo-blue.webp',
	// 	website: 'https://dallasng.dev',
	// 	description: [
	// 		<Text>
	// 			Build client's dreams into reality. This can be anything from creating
	// 			hosting for servers, web applications and proof of concepts.
	// 		</Text>,
	// 		<Text>Mainly offer software development/consultancy services.</Text>
	// 	],
	// 	technologies: ['Project Requirements']
	// },
	{
		title: 'Tech',
		company: 'Embed Financial Group Holdings',
		from: 'Aug 2024',
		to: 'Present',
		imgUrl: '/images/efgh.png',
		website: 'https://efgh.xyz',
		description: ['Responsible for tech for our subsidiary companies'],
		technologies: []
	},
	{
		title: 'Growth',
		company: 'Embed Global',
		from: 'Aug 2024',
		to: 'Present',
		imgUrl: '/images/embed-global.svg',
		website: 'https://embed.global',
		description: ['Responsible for growth, marketing and tech in the company'],
		technologies: []
	},
	{
		title: 'Full Stack Engineer',
		company: 'CoinMarketCap',
		from: 'Mar 2024',
		to: 'Aug 2024',
		imgUrl: '/images/cmc.webp',
		website: 'https://coinmarketcap.com',
		description: [
			'Led and executed full-stack SEO development, collaborating with product managers, SEO teams, and technical departments to implement key features',
			'Developed a SEO management system handling over 10 million pages, allowing custom metadata and  fine-tuned adjustments of single pages to determined categories',
			'Rebuilt HTML Sitemap to enhance backlink quality and global components to improve on-page SEO metrics such as load speed and keyword density, including translation and localization for 38 languages'
		],
		technologies: ['React', 'Java', 'Python']
	},
	{
		title: 'Full Stack Engineer',
		company: 'The SEO Copilot',
		from: 'Aug 2023',
		to: 'Jan 2024',
		imgUrl: '/images/seocopilot.jpg',
		website: 'https://theseocopilot.com',
		description: [
			'Engineered core services and automation tools to boost client SEO metrics, optimise indexing, and sitemap health, improving both on-page/off-page strategies for over 2900 domains',
			'Developed a pipeline to identify clients ranking keyword cluster into a multi-layer blog from YouTube videos, boosting niche ranking and driving organic search growth'
		],
		technologies: ['React', 'Python', 'AWS', 'GAI', 'GSC', 'GCP']
	},
	{
		title: 'Artillery Officer',
		company: 'Singapore Armed Forces',
		from: 'Aug 2021',
		to: 'Aug 2023',
		imgUrl: '/images/singapore-army.webp',
		description: [
			<Text>
				Developed a telegram bot with google spreadsheet integration to track
				parade state (leaves, MCs, medical appointments), platoon movement
				activity and forecasted weekly activities
			</Text>
		],
		technologies: ['Python']
	},
	// {
	// 	title: 'Technical Advisor / Consultant',
	// 	company: 'WorkClass',
	// 	from: 'Sep 2021',
	// 	to: 'Jan 2023',
	// 	imgUrl: '/images/WorkClass.jpg',
	// 	website: 'https://workclass.co',
	// 	description: [
	// 		<Text>
	// 			Main concerns are with the company's SEO, tech debt and architecture.
	// 		</Text>
	// 	],
	// 	technologies: []
	// },
	{
		title: 'Founding Engineer & Lead Engineer',
		company: 'WorkClass',
		from: 'Aug 2020',
		to: 'Sep 2021',
		imgUrl: '/images/WorkClass.jpg',
		website: 'https://workclass.co',
		description: [
			<Text>
				<strong>Engineer #1 and technical lead</strong> for all WorkClass,{' '}
				<strong>pioneered development</strong> for WorkClass services.
			</Text>,
			<Text>
				Responsible for SEO, <strong>outranking competitors</strong> on google
				and increased <strong>click through rate by 73%</strong>,{' '}
				<strong>page views by 15%</strong> and{' '}
				<strong>indexed organic keywords by 45%</strong>.
			</Text>,
			<Text>
				Developed platform monetisation strategies and sales tools,{' '}
				<strong>
					created adsense strategies which produces 10% of total revenue every
					month
				</strong>
			</Text>,
			<Text>
				Scaled technical architecture for <strong>10 different services</strong>
				, to <strong>support 100k users</strong>, ranging from mobile apps, web
				apps and backend operations
			</Text>,
			<Text>
				<strong>Sourced and mentored</strong> 10 interns who went on to Meta, JP
				Morgan, ByteDance, Shopee and Binance
			</Text>
		],
		technologies: [
			'React',
			'React Native',
			'Django',
			'Python',
			'AWS',
			'Firebase',
			'Docker',
			'SQL',
			'Agile',
			'Scrum'
		]
	},
	{
		title: 'Software Engineer (Intern)',
		company: 'Stone Forest IT',
		from: 'Mar 2020',
		to: 'Aug 2020',
		imgUrl: '/images/stoneforest.jpg',
		website: 'https://www.stoneforest.com.sg/stoneforestit',
		description: [
			<Text>
				Developed a new <strong>client on-boarding system</strong> that allows
				for more
				<strong>customisable procedural form filling</strong>, checking for
				customers' political risk and investment conflict of interest
			</Text>,
			<Text>
				<strong>Developed</strong> an <strong>individual tax system</strong>{' '}
				that handles tax computations and XML submissions to IRAS,{' '}
				<strong>reduced tax computation errors</strong> by building test cases
			</Text>,
			<Text>
				Assisted in planning and roll-out of new REST APIs built on existing
				infrastructure, while <strong>maintaining 100% uptime</strong>
			</Text>,
			<Text>
				Walk-through with product owners on UAT cases to{' '}
				<strong>
					discover and correct system requirements and functionality
				</strong>
			</Text>
		],
		technologies: ['ASP.NET', '.NET', '.NET Core', 'MVC', 'C#', 'SQL', 'TFS']
	},
	{
		title: 'Frontend Engineer',
		company: 'Clickr Media',
		from: 'Aug 2019',
		to: 'Jan 2020',
		imgUrl: '/images/clickr.jpg',
		website: 'https://www.clickrmedia.com',
		description: [
			<Text>
				Built websites for clients such as{' '}
				<strong>DBS, DHL, ExtraSpaceAsia and Blackmores.</strong>
			</Text>,
			<Text>
				Migrated and built new website for <strong>all 13 DBS countries</strong>
				; Worked with <strong>translations, localisation and migration</strong>{' '}
				for all of DBS assets.
			</Text>,
			<Text>
				Developed an internal system that{' '}
				<strong>manages over 3000 projects</strong> utilizing project deadline
				checks and customized queries built on third-party APIs
			</Text>,
			<Text>
				<strong>Specialised in doing ad-hoc web development</strong> related
				tasks that requires{' '}
				<strong>
					multiple iterations with strict deadlines and changing project scopes
				</strong>
			</Text>
		],
		technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Photoshop']
	}
];
