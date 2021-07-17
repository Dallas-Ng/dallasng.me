import Link from '@/src/components/link';
import DefaultLayout from '@/src/layouts/default.layout';
import { Page } from '@/src/types/page';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { NextSeo } from 'next-seo';
import { Text } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import React from 'react';

const Page500: Page = () => (
	<>
		<NextSeo title="Server Error" />

		<Heading as="h1" size="2xl" mb="5">
			500 Internal Server Error
		</Heading>

		<Text>
			<ArrowBackIcon pb="1" boxSize="20px" />
			<Link href="/">Go back to home page</Link>
		</Text>
	</>
);

Page500.getLayout = page => <DefaultLayout>{page}</DefaultLayout>;

export default Page500;
