import NavigationBar from '@/src/components/navigation-bar';
import { NextSeo } from 'next-seo';
import { Box, Container } from '@chakra-ui/react';
import React, { memo } from 'react';

const DefaultLayout = memo(props => (
	<>
		<NextSeo {...props} />

		<Container maxW="container.md">
			<Box w="100%" mb="50px">
				<NavigationBar />
			</Box>

			{props.children}
		</Container>
	</>
));

export default DefaultLayout;
