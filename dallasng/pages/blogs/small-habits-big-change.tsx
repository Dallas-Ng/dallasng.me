import { Text, Title, Button, Anchor } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons';
import { NextPage } from 'next';
import BlogImage from '../../components/blog/blog-image';
import BlogLayout from '../../components/shared/blog-layout';

const meta = {
	title: 'Small Habits Big Change',
	desc: 'Some things I had to learn the hard way',
	date: '14 Jan 2023'
};

const BlogPage: NextPage = () => (
	<BlogLayout meta={meta} header="Projects">
		<Button
			mb="xs"
			mr="xs"
			component="a"
			href="https://dallas-ng.github.io/TeamWater/"
			target="_blank"
			variant="outline"
			leftIcon={<IconExternalLink size={14} />}>
			View Website
		</Button>

		<Button
			component="a"
			href="https://github.com/Dallas-Ng/TeamWater"
			target="_blank"
			variant="outline"
			leftIcon={<IconExternalLink size={14} />}>
			View Source Code
		</Button>

		<Title order={3} mt={40} mb={5}>
			Small Habits Big Change
		</Title>

		<Text component="p">
			This project was part of a PUB intitative competition by NYP business
			students back in 2019. The intiative was meant to reduce water wastage in
			the community through pledging certain actions. This website was built to
			be an interactive and more personalised way for pledges to be done as
			other competitors used social media likes for pledges.{' '}
		</Text>

		<Text component="p">
			<strong>
				We managed to achieve 1,203 pledges and was the 1st runner up of the
				competition!
			</strong>
		</Text>

		<Title order={3} mt={40} mb={5}>
			Constraints
		</Title>

		<Text component="p">
			This project is one of my most memorable and unique experiences with web
			development. The constraints of the project requires essentially having $0
			cost and needed to be built in <u>2 days</u>. The only problem was that
			this website had to be live for several weeks and have a functional
			database to manage pledges.
		</Text>

		<Text component="p">
			I decided to use GitHub pages for hosting and{' '}
			<Anchor href="https://jsonbin.io/" target="_blank">
				jsonbin.io
			</Anchor>{' '}
			for my database. With these two platforms, we managed to release our
			website with 0 development cost, only needing to pay for the domain.
		</Text>

		<BlogImage
			height={150}
			src="/images/blogs/shbc/architecture.png"
			alt="The system architecture of this project"
			caption="The system architecture of this project"
		/>

		<Title order={3} mt={40} mb={5}>
			How does this website work?
		</Title>

		<Text component="p">
			This website comes with a fully functional front-end for users to pledge
			different actions to achieve less water wastage, it also comes with an{' '}
			<Anchor
				href="https://dallas-ng.github.io/TeamWater/admin"
				target="_blank">
				administrative backend
			</Anchor>{' '}
			for management of the pledges.
		</Text>

		<Text component="p">
			As this website was built with Javascript, Bootstrap and HTML, I adoped a
			component-like system, similar to React. There were multiple functions
			that created components of HTML given certain inputs. This allowed me to
			create my own templating system.
		</Text>

		<BlogImage
			src="/images/blogs/shbc/component.png"
			alt="A component to create the pledge card"
			caption="A component to create the pledge card"
		/>

		<BlogImage
			src="/images/blogs/shbc/admin.png"
			alt="Admin backend"
			caption="Backend - inputs are verified and checked before saving"
		/>

		<Title order={3} mt={40} mb={5}>
			Learning Pointers
		</Title>

		<Text component="p">
			Having built this project has taught me many things. It has taught me how
			to build things based on my own problem solving, allowing me to be more
			confident with Javascript.
		</Text>

		<Text component="p">
			It was one of my projects where users could directly influence how I built
			things as new users interacted with the website, I have had to update it
			in certain ways such as including icons and animations to attract users to
			click on the cards.
		</Text>

		<BlogImage
			src="/images/blogs/shbc/pledges.png"
			alt="Contributors of the project"
			caption="Contributors of the project"
		/>
	</BlogLayout>
);

export default BlogPage;
