import { NextPage } from 'next';
import {
	Card,
	Container,
	Title,
	Text,
	Box,
	Group,
	Badge,
	useMantineColorScheme,
	Grid,
	Stack
} from '@mantine/core';
import ExperienceLayout from '../../components/shared/experience-layout';
import Marquee from 'react-fast-marquee';

const Project: React.FC<{ title: string; desc: string; tags: string[] }> = ({
	title,
	desc,
	tags
}) => (
	<Card
		style={{ width: 300, padding: '10px 15px' }}
		withBorder
		radius="md"
		mx="sm">
		<Text weight="bold">{title}</Text>

		<Text size="sm">{desc}</Text>

		<Badge size="sm" color="indigo">
			{tags}
		</Badge>
	</Card>
);

const data = [
	{
		title: 'Internal Dashboard',
		desc: 'Our internal sales management platform, we can configure how employers can use the website to managing products',
		tags: ['Gatsby']
	},
	{
		title: 'WorkClass.co',
		desc: 'The main website of the company. Jobseekers apply on this platform and the platform for executing our SEO strategy',
		tags: ['Next.JS']
	},
	{
		title: 'Employer Portal',
		desc: 'Portal for employers to post their jobs',
		tags: ['Gatsby']
	},
	{
		title: 'Telegram Bot',
		desc: 'A robust telegram bot that allows users to manage their resumes and profiles while applying for jobs',
		tags: ['Python']
	},
	{
		title: 'Jobseeker Mobile App',
		desc: 'Android and iOS app for jobseekers to apply for jobs',
		tags: ['React Native']
	},
	{
		title: 'Resume Builder',
		desc: 'An end-to-end resume builder that allow our job seekers to create their resumes',
		tags: ['Gatsby']
	}
];

const ExpWorkClassPage: NextPage = () => {
	const { colorScheme } = useMantineColorScheme();

	return (
		<ExperienceLayout meta={{ title: 'WorkClass', desc: 'teste' }}>
			<Container size="sm">
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<Title mb={5} mr={5}>
						WorkClass
					</Title>

					<img
						alt="WorkClass Logo"
						src="https://workclass.co/images/workclass/workclass-icon.png"
						width={35}
						height={35}
					/>
				</div>

				<Text mb="md">
					WorkClass is a job board to help frontline job seekers find their
					ideal job in 24 hours. WorkClass is backed by some of the best
					investors including 500 Startups, Goodwater Capital, Antler and
					Kistefos, featured on Business Times, CNA, and many more. Their
					mission is to help everyone to find a job in 24 hours with
					best-in-class matching algorithms.
				</Text>
			</Container>

			<Container size="sm">
				<Title order={2} mb={5}>
					My Role at WorkClass
				</Title>

				<Text mb="md">
					I joined WorkClass in 2020 when the company first started to
					transition into building its own platform. My role at that point was
					to build anything under the sun that we needed, this ranged from
					mobile apps, backend services to AWS infrastructure. As the company
					grew, I adopted a more managerial role and started to manage the
					company's product line and development team.
				</Text>

				<Text mb="md">
					My Impactful Achievements <em>(imo)</em>
				</Text>

				<ul>
					<li>
						Kickstarted the SEO strategies for the company. Ranking 1st on
						Google Search for certain keywords.
					</li>
					<li>
						Built the development team - setting up project managment, hiring
						processes and focusing on creating meaningful internships
					</li>
					<li>Developing all of WorkClass core services</li>
				</ul>

				<Title order={2}>Projects I've Led</Title>
			</Container>

			<Box my="lg">
				<Marquee
					gradientColor={
						colorScheme === 'dark' ? [26, 27, 30] : [255, 255, 255]
					}>
					{data.map(project => (
						<Project {...project} />
					))}
				</Marquee>
			</Box>

			<Container size="sm">
				<Title order={2} mb={5}>
					Things I Learned
				</Title>

				<Text mb="md">
					<span style={{ fontSize: 24, fontWeight: 'bold', lineHeight: 1 }}>
						1.
					</span>{' '}
					Building SEO is{' '}
					<span style={{ textDecoration: 'line-through' }}>a bitch</span>{' '}
					<strong>hard</strong>. I had to learn the hard way how SEO was suppose
					to be build and how changes are binary: either the changes you did
					improve your score or completely destroy it.
				</Text>

				<Text mb="md">
					<span style={{ fontSize: 24, fontWeight: 'bold', lineHeight: 1 }}>
						2.
					</span>{' '}
					Finding talent is a challenge and will take a long time. We spent many
					months trying to find software engineers and interns to join
					WorkClass. The challenge also extends to trying to validate if that
					person is the correct fit for your company vice-versa.
				</Text>

				<Text>
					<span style={{ fontSize: 24, fontWeight: 'bold', lineHeight: 1 }}>
						3.
					</span>{' '}
					Planning for the future. Whether it be picking technologies for a
					project to piroritising certain features, it all leads to how to
					company will perform in the future.
				</Text>
			</Container>
		</ExperienceLayout>
	);
};

export default ExpWorkClassPage;
