import { TProject } from '@/src/types/data.types';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { Box, Heading, Text } from '@chakra-ui/react';
import { memo } from 'react';

const ProjectCard = memo((props: TProject) => {
	const { title, desc, href } = props;

	return (
		<Link href={href} passHref>
			<Box
				height="200px"
				cursor="pointer"
				borderWidth="1px"
				borderRadius="md"
				p="5px 15px 10px"
				display="flex"
				flexDirection="column">
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

export default ProjectCard;
