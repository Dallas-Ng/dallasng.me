import Footer from '@/src/components/footer';
import NavigationBar from '@/src/components/navigation-bar';
import { NextSeo } from 'next-seo';
import { Box, Container, Flex } from '@chakra-ui/react';
import React, { memo } from 'react';

const DefaultLayout = memo(props => (
	<>
		<NextSeo {...props} />

		<Box
			w="100%"
			position="sticky"
			top="0px"
			zIndex="9"
			style={{
				backdropFilter: 'blur(15px)',
				WebkitBackdropFilter: 'blur(15px)'
			}}>
			<Container maxW="container.md">
				<NavigationBar />
			</Container>
		</Box>

		<Container maxW="container.md" mt="20px">
			<Flex
				w="100%"
				direction="column"
				style={{ minHeight: 'calc(100vh - 80px)' }}>
				<Box flex="1" as="main">
					{props.children}
				</Box>

				<Footer />
			</Flex>
		</Container>
	</>
));

export default DefaultLayout;
