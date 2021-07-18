import Link from '@/src/components/link';
import { ProjectCardList } from '@/src/components/project-card';
import DefaultLayout from '@/src/layouts/default.layout';
import { Page } from '@/src/types/page';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Divider, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const IndexPage: Page = () => (
	<>
		<Heading as="h1" size="2xl" mb="3">
			Hi, I'm Dallas
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

		<Heading as="h2" size="md" mb="5">
			Projects
		</Heading>

		<ProjectCardList />
	</>
);

IndexPage.getLayout = page => <DefaultLayout>{page}</DefaultLayout>;

export default IndexPage;
