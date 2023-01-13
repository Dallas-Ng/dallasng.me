import { Text } from '@mantine/core';

export const EXPERIENCE = [
	{
		title: 'Artillery Officer',
		company: 'Singapore Armed Forces',
		from: 'Aug 2021',
		to: 'Present',
		imgUrl:
			'https://upload.wikimedia.org/wikipedia/en/a/aa/Crest_of_the_Singapore_Armed_Forces.png',
		description: [],
		technologies: []
	},
	{
		title: 'Technical Advisor / Consultant',
		company: 'WorkClass',
		from: 'Sep 2021',
		to: 'Jan 2023',
		imgUrl: '/images/WorkClass.png',
		website: 'https://workclass.co',
		description: [
			<Text>
				Manage the company but from afar, no longer involved in the day to day
				operations.
			</Text>,
			<Text>
				Main concerns are with the company's SEO, tech debt and architecture.
			</Text>
		],
		technologies: []
	},
	{
		title: 'Technical Lead',
		company: 'WorkClass',
		from: 'Aug 2020',
		to: 'Sep 2021',
		imgUrl: '/images/WorkClass.png',
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
				<strong>Built development team</strong>, conducted resume screenings,
				hiring interviews and coordinated team structure
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
		title: 'Freelance Software Engineer',
		company: 'dallasng.dev',
		from: 'Jan 2020',
		to: 'Aug 2021',
		imgUrl: '/logo-blue.webp',
		website: 'https://dallasng.dev',
		description: [
			<Text>
				Build client's dreams into reality. This can be anything from creating
				hosting for servers, web applications and proof of concepts.
			</Text>,
			<Text>Mainly offer software development/consultancy services.</Text>
		],
		technologies: ['Upon Project']
	},
	{
		title: 'Software Engineer Intern',
		company: 'Stone Forest IT',
		from: 'Mar 2020',
		to: 'Aug 2020',
		imgUrl:
			'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/debe06bdb8de41df0c8b',
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
		imgUrl:
			'https://media-exp1.licdn.com/dms/image/C560BAQEXyGmFKh05Dg/company-logo_200_200/0/1519879594183?e=2147483647&v=beta&t=yf7b9Pzl4qo-7S9-rwbU_DcrULgS5N5rrwggnZC029g',
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
