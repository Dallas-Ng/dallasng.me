import Link from '@/src/components/link';
import DefaultLayout from '@/src/layouts/default.layout';
import { Page } from '@/src/types/page';
import dynamic from 'next/dynamic';
import { Divider, Stack } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import React from 'react';

const ProjectCardList = dynamic(
	() => import('../components/project-card').then(x => x.ProjectCardList),
	{ ssr: false, loading: () => <div style={{ height: 200 }} /> } // eslint-disable-line
);

const IndexPage: Page = () => (
	<>
		<Heading as="h1" size="2xl">
			Dallas Ng
		</Heading>

		<Heading as="h2" size="xl">
			Software Engineer
		</Heading>

		<Divider my="5" />

		<Stack direction={{ base: 'column', md: 'row' }} spacing="20px">
			<Link href="mailto:ngdallas1@gmail.com">ngdallas1@gmail.com</Link>
		</Stack>

		<Divider my="5" />

		<Stack direction="row" alignItems="baseline" mb="5">
			<Heading size="lg">Projects</Heading>
		</Stack>

		<ProjectCardList />
	</>
);

IndexPage.getLayout = page => <DefaultLayout>{page}</DefaultLayout>;

export default IndexPage;
