import Link from '@/src/components/link';
import DefaultLayout from '@/src/layouts/default.layout';
import { experience } from '@/src/static/data/experience';
import { skills } from '@/src/static/data/skills';
import { Page } from '@/src/types/page';
import { NextSeo } from 'next-seo';
import {
	Box,
	Divider,
	Flex,
	Heading,
	ListItem,
	Stack,
	Text,
	UnorderedList
} from '@chakra-ui/react';
import React from 'react';
import { HiLink } from 'react-icons/hi';

const Header = ({ link }: { link: string }) => (
	<>
		<Divider py="25px" mb="30px" id={link} />

		<Link href={`#${link}`} _hover={{ color: 'blue.600' }}>
			<Flex mb="5">
				<Heading size="md" mr="5px">
					{link}
				</Heading>

				<HiLink fontSize="20px" />
			</Flex>
		</Link>
	</>
);

const PageAbout: Page = () => (
	<>
		<NextSeo title="About" />

		<Heading mb="2">About</Heading>

		<Text>A little more about me</Text>

		<Header link="Me" />

		<Stack spacing="15px">
			<Text>
				Presently, I am a core engineer at WorkClass. My main responsibilities
				lie with building the platform and to drive the vision of the company.
			</Text>

			<Text>
				Based in Singapore, I have been coding for over 4 years now, 2 of it
				being professional. I developed a strong skillset in building full-stack
				applications, working in face-paced environments, wearing many hats.
			</Text>

			<Text>
				If you have any opportunities or want to contact me, you contact me{' '}
				<Link href="mailto:ngdallas1@gmail.com" color="teal.500">
					here
				</Link>
				.
			</Text>
		</Stack>

		<Header link="Resume" />

		{experience.map((job, i) => (
			<Box key={i} mb={i + 1 !== experience.length && '40px'}>
				<Text fontSize="2xl" fontWeight="700">
					{job.title}
				</Text>

				<Flex
					justifyContent="space-between"
					flexDirection={['column', 'row']}
					mb="2">
					<Text fontSize="xl" fontWeight="600">
						{job.company}
					</Text>

					<Text as="i">
						{job.from} - {job.to}
					</Text>
				</Flex>

				<UnorderedList mb="2" spacing="7px" pl="14px">
					{job.description.map((desc, i) => (
						<ListItem key={i}>{desc}</ListItem>
					))}
				</UnorderedList>

				<Text as="i">Technologies: {job.technologies.join(', ')}</Text>
			</Box>
		))}

		<Header link="Skills" />

		<Stack spacing="20px">
			{skills.map(({ type, items }) => (
				<Flex flexDirection="column" key={type}>
					<Text fontWeight="700">{type}</Text>
					<Text>{items}</Text>
				</Flex>
			))}
		</Stack>

		<Box height="100px" />
	</>
);

PageAbout.getLayout = page => <DefaultLayout>{page}</DefaultLayout>;

export default PageAbout;
