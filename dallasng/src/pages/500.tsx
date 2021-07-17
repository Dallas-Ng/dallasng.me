import { ArrowBackIcon } from '@chakra-ui/icons';
import { Text } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import React from 'react';
import Link from '../components/link';
import DefaultLayout from '../layouts/default.layout';
import { Page } from '../types/page';

const Page500: Page = () => (
	<>
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
