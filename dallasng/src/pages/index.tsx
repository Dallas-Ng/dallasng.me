import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Divider, Box, Center, Link, Text, Stack } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { NextPage } from 'next';

const IndexPage: NextPage = () => (
	<Center h="80vh">
		<Box w="50%">
			<Heading as="h1" size="2xl">
				Dallas Ng
			</Heading>

			<Heading as="h2" size="xl">
				Software Engineer
			</Heading>

			<Divider my="5" />
			<Stack direction="row" spacing="20px">
				<Link href="mailto:ngdallas1@gmail.com">ngdallas1@gmail.com</Link>

				<Link href="https://www.linkedin.com/in/dallas-ng/">
					LinkedIn <ExternalLinkIcon pb="3px" />
				</Link>

				<Link href="https://github.com/dallas-ng">
					GitHub <ExternalLinkIcon pb="3px" />
				</Link>
			</Stack>
		</Box>
	</Center>
);

export default IndexPage;
