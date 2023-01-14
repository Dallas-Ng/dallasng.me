import {
	Anchor,
	Button,
	Center,
	createStyles,
	Divider,
	Grid,
	SimpleGrid,
	Stack,
	Text,
	Title
} from '@mantine/core';
import ProjectCard from '../components/project-card';
import WorkExpCard from '../components/work-experience-card';
import Layout from '../components/shared/layout';
import { NextPage } from 'next';
import { NextLink } from '@mantine/next';
import { EXPERIENCE } from '../data/experience.data';
import { IconFileDownload } from '@tabler/icons';
import BlogCard from '../components/blog-card';

const IndexPage: NextPage = () => {
	const c = useStyles().classes;

	return (
		<>
			<Layout backBtn={false}>
				<h1>Hi, I&apos;m Dallas</h1>

				<Divider />

				<Title order={2} mt="xl" mb="md">
					About
				</Title>

				<p>
					Hey! I am a full-stack engineer capable of building end-to-end
					products. I enjoy converting dreams to reality and working in
					fast-paced environments.
				</p>

				<p>
					I have been working for the past few years for agencies, corporations
					and start ups. Through experience, I developed a skillset that allows
					me to jump into different parts of the product such as marketing, SEO,
					user-testing and more.
				</p>

				<p>
					If you have any opportunities or want to contact me, you contact me{' '}
					<Anchor href="mailto:ngdallas1@gmail.com">here</Anchor>.
				</p>

				<Title order={2} mt="xl" mb="md">
					Experience
				</Title>

				<div className={c.workContainer}>
					{EXPERIENCE.map((exp, i) => (
						<WorkExpCard key={i} {...exp} />
					))}
				</div>

				<Center>
					<Button
						component="a"
						download
						href="/dallas_ng_resume.pdf"
						leftIcon={<IconFileDownload size={16} />}
						variant="outline"
						my="md">
						Download My Resume
					</Button>
				</Center>

				<Center>
					<Anchor href="/resume" component={NextLink}>
						<Text size="sm">View Online Resume</Text>
					</Anchor>
				</Center>

				{/* <Title order={2} mt="xl" mb="md">
					Blogs
				</Title>

				<Grid>
					<Grid.Col md={8}>
						<BlogCard
							title="Hard Truths of Front End Development"
							category="learning"
							image="/images/blogs/hard-truths/drugs.png"
							href="/blogs/hard-truth-of-front-end-development"
						/>
					</Grid.Col>

					<Grid.Col md={4}>
						<Stack>
							<BlogCard
								title="Intern House"
								category="learning"
								image="/images/burn.jpg"
								href="/blogs/intern-house"
							/>
						</Stack>
					</Grid.Col>
				</Grid> */}

				<Title order={2} mt="xl" mb="md">
					Projects
				</Title>

				<SimpleGrid
					breakpoints={[
						{ cols: 2, spacing: 'md' },
						{ cols: 1, spacing: 'xs' }
					]}>
					<ProjectCard
						href="/projects/steam-account-switcher"
						imgSrc="/images/steam.webp"
						title="Steam Account Switcher"
						desc="A windows application that helps switch in between steam accounts seamlessly"
						skills={['c#', 'WPF']}
						target="_self"
					/>

					<ProjectCard
						href="/projects/intern-house"
						imgSrc="/images/internhouse.webp"
						imgFit="contain"
						title="intern.house"
						desc="A website that connects interns to accomodations, click to read the blog!"
						skills={['React', 'Django']}
						target="_self"
					/>

					<ProjectCard
						href="/projects/tuick"
						imgSrc="/images/tuick.webp"
						title="Tuick"
						imgFit="contain"
						desc="Backend management system to run and manage your tuition centre"
						target="_self"
					/>

					<ProjectCard
						href="/projects/small-habits-big-change"
						imgSrc="/images/shbc.webp"
						title="Small Habits Big Change"
						imgFit="contain"
						desc="A duct-taped project that was made for the lowest cost possible."
						target="_self"
					/>
				</SimpleGrid>

				<Center mt="xl">
					<Anchor href="https://github.com/dallas-ng" target="_blank">
						<Text size="sm">View Other Projects</Text>
					</Anchor>
				</Center>
			</Layout>
		</>
	);
};

const useStyles = createStyles(theme => ({
	workContainer: {
		borderRadius: 10
	},
	workBtn: {
		display: 'block',
		width: '100%',
		padding: theme.spacing.md,
		color: theme.black,

		'&:hover': {
			backgroundColor: theme.colors.gray[0]
		}
	}
}));

export default IndexPage;
