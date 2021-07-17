import Footer from '@/src/components/footer';
import NavigationBar from '@/src/components/navigation-bar';
import { NextSeo } from 'next-seo';
import { Box, Container, Flex } from '@chakra-ui/react';
import React, { memo } from 'react';

const DefaultLayout = memo(props => (
	<>
		<NextSeo {...props} />

		<Container maxW="container.md">
			<Flex w="100%" minH="100vh" direction="column">
				<Box w="100%" mb="50px">
					<NavigationBar />
				</Box>

				<Box flex="1">
					<main>{props.children}</main>
				</Box>

				<Box>
					<Footer />
				</Box>
			</Flex>
		</Container>
	</>
));

export default DefaultLayout;
