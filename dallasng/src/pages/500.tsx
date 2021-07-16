import { ArrowBackIcon } from '@chakra-ui/icons';
import { Text, Box, Center } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import React from 'react';
import { NextPage } from 'next';
import Link from '../components/link';

const IndexPage: NextPage = () => (
	<Center minHeight="100vh">
		<Box w={{ base: '90%', md: '80%', lg: '70%' }}>
			<Heading as="h1" size="2xl" mb="5">
				500 Internal Server Error
			</Heading>

			<Text>
				<ArrowBackIcon pb="1" boxSize="20px" />
				<Link href="/">Go back to home page</Link>
			</Text>
		</Box>
	</Center>
);

export default IndexPage;
