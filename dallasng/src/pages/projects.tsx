import DefaultLayout from '@/src/layouts/default.layout';
import { Page } from '@/src/types/page';
import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';
import { Heading } from '@chakra-ui/react';
import React from 'react';

const ProjectCardList = dynamic(
	() => import('../components/project-card').then(x => x.ProjectCardList),
	{ ssr: false } // eslint-disable-line
);

const PageProjects: Page = () => {
	return (
		<>
			<NextSeo title="Projects" />

			<Heading size="md" mb="5">
				Projects
			</Heading>

			<ProjectCardList />
		</>
	);
};

PageProjects.getLayout = page => <DefaultLayout>{page}</DefaultLayout>;

export default PageProjects;
