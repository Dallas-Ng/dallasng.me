import { mockApi } from '@/src/common/utils';
import Link from '@/src/components/link';
import { ProjectCardLoading } from '@/src/components/project-card';
import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/alert';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { AlertDescription, Flex } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const ProjectCardList = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const loadData = async () => {
			await mockApi();
			setLoading(false);
		};

		loadData();
	});
	if (loading) {
		return <ProjectCardLoading />;
	}

	return (
		<Alert borderRadius="md" mb="5" status="info">
			<AlertIcon />

			<Flex flexDirection="column">
				<AlertTitle>No Projects Found Yet!</AlertTitle>
				<AlertDescription>
					<Link href="https://github.com/dallas-ng">
						Visit my GitHub for projects <ExternalLinkIcon pb="3px" />
					</Link>
				</AlertDescription>
			</Flex>
		</Alert>
	);
};

export default ProjectCardList;
