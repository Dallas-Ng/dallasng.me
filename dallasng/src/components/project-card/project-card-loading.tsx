import { Box, Flex, Skeleton } from '@chakra-ui/react';
import React, { memo } from 'react';

const ProjectCardLoading = memo(() => (
	<Box height="140px" borderWidth="1px" borderRadius="md" p="5px 15px 10px">
		<Flex direction="column">
			<Skeleton height="23px" mt="3" mb="20px" />
			<Skeleton height="16px" mb="10px" />
			<Skeleton height="16px" mb="10px" />
		</Flex>
	</Box>
));

export default ProjectCardLoading;
