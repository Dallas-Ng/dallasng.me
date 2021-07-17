import { ProjectCardList } from '@/src/components/project-card';
import DefaultLayout from '@/src/layouts/default.layout';
import { Page } from '@/src/types/page';
import { Divider, Heading } from '@chakra-ui/react';
import React from 'react';

const IndexPage: Page = () => (
	<>
		<Heading as="h1" size="xl" mb="2">
			Dallas Ng
		</Heading>

		<Heading as="h2" size="md">
			Software Engineer
		</Heading>

		<Divider my="5" />

		<Heading as="h2" size="md" mb="5">
			Projects
		</Heading>

		<ProjectCardList />
	</>
);

IndexPage.getLayout = page => <DefaultLayout>{page}</DefaultLayout>;

export default IndexPage;
