import Link from '@/src/components/link';
import DefaultLayout from '@/src/layouts/default.layout';
import { Page } from '@/src/types/page';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Text } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import React from 'react';

const Page404: Page = () => (
	<>
		<Heading as="h1" size="2xl" mb="5">
			404 Page Not Found
		</Heading>

		<Text>
			<ArrowBackIcon pb="1" boxSize="20px" />
			<Link href="/">Go back to home page</Link>
		</Text>
	</>
);

Page404.getLayout = page => <DefaultLayout>{page}</DefaultLayout>;

export default Page404;
