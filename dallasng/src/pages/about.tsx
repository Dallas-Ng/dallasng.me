import DefaultLayout from '@/src/layouts/default.layout';
import { Page } from '@/src/types/page';
import { NextSeo } from 'next-seo';
import { Heading, Text } from '@chakra-ui/react';
import React from 'react';

const PageAbout: Page = () => {
	return (
		<>
			<NextSeo title="About" />

			<Heading size="md" mb="5">
				About
			</Heading>

			<Text>Coming soon...</Text>
		</>
	);
};

PageAbout.getLayout = page => <DefaultLayout>{page}</DefaultLayout>;

export default PageAbout;
