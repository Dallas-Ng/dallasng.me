import { ExternalLinkIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { Box, ChakraProps, Heading, Skeleton, Text } from '@chakra-ui/react';
import { memo } from 'react';
import { TProject } from '../types/data.types';

const BoxProps: ChakraProps = {
	height: '200px',
	cursor: 'pointer',
	borderWidth: '1px',
	borderRadius: 'md',
	p: '5px 15px 10px',
	display: 'flex',
	flexDirection: 'column'
};

const ProjectCard = memo((props: TProject) => {
	const { title, desc, href } = props;

	return (
		<Link href={href} passHref>
			<Box {...BoxProps}>
				<Box flex="1">
					<Heading as="h2" size="md" my="3">
						{title}
					</Heading>

					<Text mb="4" noOfLines={2}>
						{desc}
					</Text>
				</Box>

				<Text>
					View Project <ExternalLinkIcon pb="3px" />
				</Text>
			</Box>
		</Link>
	);
});

const ProjectCardLoading = memo(() => (
	<Box {...BoxProps}>
		<Skeleton height="23px" mt="3" mb="20px" />
		<Skeleton height="16px" mb="10px" />
		<Skeleton height="16px" mb="10px" />
	</Box>
));

export { ProjectCardLoading };

export default ProjectCard;
