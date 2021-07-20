import DefaultLayout from '@/src/layouts/default.layout';
import { Page } from '@/src/types/page';
import { NextSeo } from 'next-seo';
import dynamic from 'next/dynamic';
import { Heading, Text } from '@chakra-ui/react';
import React from 'react';

const ProjectCardList = dynamic(
	() => import('../components/project-card').then(x => x.ProjectCardList),
	{ ssr: false } // eslint-disable-line
);

const PageProjects: Page = () => {
	return (
		<>
			<NextSeo title="Projects" />

			<Heading mb="2">Projects</Heading>

			<Text mb="5">See what I have been developing on</Text>

			<ProjectCardList />
		</>
	);
};

PageProjects.getLayout = page => <DefaultLayout>{page}</DefaultLayout>;

export default PageProjects;
