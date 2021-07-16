import { ExternalLinkIcon } from '@chakra-ui/icons';
import dynamic from 'next/dynamic';
import { Divider, Box, Center, Link, Stack } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { NextPage } from 'next';

const ProjectCardList = dynamic(
	() => import('../components/project-card-list'),
	{ ssr: false, loading: () => <div style={{ height: 200 }} /> } // eslint-disable-line
);

const IndexPage: NextPage = () => (
	<Center minHeight="100vh">
		<Box w={{ base: '90%', md: '80%', lg: '70%' }}>
			<Heading as="h1" size="2xl">
				Dallas Ng
			</Heading>

			<Heading as="h2" size="xl">
				Software Engineer
			</Heading>

			<Divider my="5" />

			<Stack direction={{ base: 'column', md: 'row' }} spacing="20px">
				<Link href="mailto:ngdallas1@gmail.com">ngdallas1@gmail.com</Link>

				<Link href="https://www.linkedin.com/in/dallas-ng/">
					LinkedIn <ExternalLinkIcon pb="3px" />
				</Link>

				<Link href="https://github.com/dallas-ng">
					GitHub <ExternalLinkIcon pb="3px" />
				</Link>
			</Stack>

			<Divider my="5" />

			<Stack direction="row" alignItems="baseline" mb="5">
				<Heading size="lg">Projects</Heading>
			</Stack>

			<ProjectCardList />
		</Box>
	</Center>
);

export default IndexPage;
