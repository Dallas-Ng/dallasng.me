import {
	Anchor,
	Divider,
	Image,
	List,
	SimpleGrid,
	Text,
	Title
} from '@mantine/core';
import { NextPage } from 'next';
import BlogImage from '../../components/blog/blog-image';
import BlogLayout from '../../components/shared/blog-layout';

const meta = {
	title: 'Tuick',
	desc: 'Backend management system that you will ever need to run and manage your tuition centre',
	date: '13 Jan 2023'
};

const BlogPage: NextPage = () => (
	<BlogLayout meta={meta} header="Projects">
		<Image src="/images/tuick.webp" height={100} fit="contain" alt="Tuick" />

		<Text component="p" align="center">
			Backend management system for tuition centres
			<br />
			<em>Tuition Quick - Tuick</em>
		</Text>

		<Title order={3} mt={40} mb={5}>
			Caveat
		</Title>

		<Text component="p" mb="sm">
			This project does not exist in the real world as I decided to leave it
			during its very early stage to join{' '}
			<Anchor href="https://workclass.co" target="_blank">
				WorkClass
			</Anchor>
			.
		</Text>

		<Text component="p" mb="sm">
			This article aims to explore and document my thought process when starting
			this project.
		</Text>

		<Divider />

		<Title order={3} mt={40} mb={5}>
			Preface
		</Title>

		<Text component="p" mb="sm">
			This project was brought upon me during one of my internships. A director
			wanted to explore the idea of starting up a backend system for tuition
			centres as he saw many problems with their current set up.
		</Text>

		<Title order={3} mt={40} mb={5}>
			What is Tuick?
		</Title>

		<Text component="p" mb="sm">
			Tuick essentially is a all-in-one platform to manage the backend logsitics
			of a tuition centre so that tutors can focus on their main responsibility
			- teaching.
		</Text>

		<Text component="p" mb="sm">
			Tuick would be able to manage the financials such as billing, management
			of courses, management of personnel and students and provide a feedback
			loop to parents.
		</Text>

		<Title order={3} mt={40} mb={5}>
			What is the problem we were trying to solve?
		</Title>

		<Text component="p" mb="sm">
			My partner at the time knew people in the tuition industry. Majority of
			them suffered the problem of handling the logistical aspect of their
			businesses especially when they started growing rapidly.
		</Text>

		<Title order={3} mt={40} mb={5}>
			Revenue
		</Title>

		<Text component="p" mb="sm">
			There were a lot of ideas on how we could make revenue from this business.
		</Text>

		<List withPadding mb="sm">
			<List.Item>Freemium</List.Item>
			<List.Item>
				Monthly Fees by number of Education Centre - similiar to having seats
			</List.Item>
			<List.Item>
				e-Billing fees - Upon each bill that the tuition centre sends
			</List.Item>
		</List>

		{/* <Text component="p" mb="sm"></Text> */}

		<BlogImage
			src="/images/blogs/tuick/name-brainstorms.webp"
			alt="A bunch of ideation names"
			caption="A bunch of ideation of the names"
		/>

		<Title order={3} mt={40} mb={5}>
			What I think are Possible Problems with this Business
		</Title>

		<Text component="p" mb="sm">
			One problem I feel that will happen is that customers will only pay for a
			polished version of the product. In other words, they would want a MMP vs
			a MVP. As it deals with money, no one would really trust something that
			was duct-taped together.
		</Text>

		<Text component="p" mb="sm">
			Another problem I foresaw was that development would need to follow a lot
			of red-tape processes that comes with building financial products.
		</Text>

		<SimpleGrid cols={2}>
			<div>
				<BlogImage
					src="/images/blogs/tuick/business-logic-2.webp"
					alt="Some logic on how features need to be build"
					caption="Some logic on how features need to be build"
				/>
			</div>

			<div>
				<BlogImage
					src="/images/blogs/tuick/db-tables.webp"
					alt="Database tables"
					caption="Database tables that we drafted up"
				/>
			</div>
		</SimpleGrid>

		<Title order={3} mt={40} mb={5}>
			The End
		</Title>

		<Text component="p" mb="sm">
			Well, I was not kidding when I said I left the project at the start.
		</Text>

		<BlogImage
			src="/images/blogs/tuick/meme.webp"
			alt="How much content does this blog actually have"
			caption="How much content does this blog actually have"
		/>
	</BlogLayout>
);

export default BlogPage;
