import { Box, Container } from '@chakra-ui/react';
import { memo } from 'react';
import NavigationBar from '../components/navigation-bar';

const DefaultLayout = memo(({ children }) => (
	<Container maxW="container.md">
		<Box w="100%" mb="50px">
			<NavigationBar />
		</Box>

		{children}
	</Container>
));

export default DefaultLayout;
