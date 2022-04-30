import {
	Anchor,
	Button,
	Center,
	createStyles,
	Divider,
	Grid,
	Group,
	SimpleGrid,
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
import SmallBlogCard from '../components/small-blog-card';

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

				<Title order={2} mt="xl" mb="md">
					Projects
				</Title>

				<SimpleGrid
					breakpoints={[
						{ cols: 2, spacing: 'md' },
						{ cols: 1, spacing: 'xs' }
					]}>
					<ProjectCard
						href="https://github.com/Dallas-Ng/Steam-Account-Switcher"
						imgSrc="/images/steam.webp"
						title="Steam Account Switcher"
						desc="A windows application that helps switch in between steam accounts seamlessly"
						skills={['c#', 'WPF']}
					/>

					<ProjectCard
						href="https://intern.house"
						imgSrc="/images/internhouse.webp"
						imgFit="contain"
						title="intern.house"
						desc="No longer in development - A website that connects interns to accomodations"
						skills={['React', 'Django']}
					/>

					<ProjectCard
						imgSrc="/images/tuick.webp"
						title="Tuick"
						imgFit="contain"
						desc="School management system that you will ever need to run and manage your tuition centre"
					/>
				</SimpleGrid>

				<Center mt="xl">
					<Anchor href="https://github.com/dallas-ng" target="_blank">
						<Text size="sm">View Other Projects</Text>
					</Anchor>
				</Center>

				<Title order={2} mt="xl" mb="md">
					Blogs
				</Title>

				<Text mb="md">
					Blogs are still under construction, it's not done yet!
				</Text>

				<Grid>
					<Grid.Col xs={12} md={8}>
						<BlogCard
							title="Handling Millions of Pages"
							category="learning"
							image="/images/scale.jpg"
							status="writing"
						/>
					</Grid.Col>

					<Grid.Col xs={12} md={4}>
						<Group position="apart">
							<SmallBlogCard title="SEO TL;DR" category="learning" />

							<SmallBlogCard
								title="intern.house"
								category="project discussion"
							/>

							<SmallBlogCard
								title="The Frontend Migration Checklist"
								category="docs"
							/>
						</Group>
					</Grid.Col>
				</Grid>

				<Center mt="xl">
					{/* <Anchor href="https://github.com/dallas-ng"> */}
					<Text size="sm">Blogs Under Construction</Text>
					{/* </Anchor> */}
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
