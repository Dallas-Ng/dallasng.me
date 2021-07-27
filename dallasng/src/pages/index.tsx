import Link from '@/src/components/link';
import { ProjectCardList } from '@/src/components/project-card';
import DefaultLayout from '@/src/layouts/default.layout';
import { Page } from '@/src/types/page';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Divider, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const IndexPage: Page = () => (
	<>
		<Heading as="h1" size="2xl" mb="3">
			Hi, I&apos;m Dallas
		</Heading>

		<Text>
			I work at{' '}
			<Link href="https://workclass.co">
				WorkClass
				<ExternalLinkIcon pb="3px" />
			</Link>{' '}
			as a Senior Software Engineer.
		</Text>

		<Divider my="5" />

		<Stack direction={['column', 'row']} spacing={['5px', '25px']}>
			<Text>
				<Link href="/about#Me">About Me</Link>
			</Text>

			<Text>
				<Link href="/about#Resume">Resume</Link>
			</Text>

			<Text>
				<Link href="/about#Skills">Skills</Link>
			</Text>
		</Stack>

		<Divider my="5" />

		<Heading as="h2" size="md" mb="5">
			Projects
		</Heading>
		<ProjectCardList />
	</>
);

IndexPage.getLayout = page => <DefaultLayout>{page}</DefaultLayout>;

export default IndexPage;
