import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/alert';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { SimpleGrid } from '@chakra-ui/layout';
import {
	AlertDescription,
	Box,
	Flex,
	Link,
	Text,
	useMediaQuery
} from '@chakra-ui/react';
import React from 'react';
import useSWR from 'swr';
import { IEndpointProject } from '../types/api.interface';
import ProjectCard, { ProjectCardLoading } from './project-card';

const ProjectCardList = () => {
	const { data, error } = useSWR<IEndpointProject>(`/api/mock`);
	const loading = !data && !error;
	const projects = !loading && data ? data.projects : [];

	const [isMobileViewport] = useMediaQuery('(max-width: 768px)');

	if (error) {
		return (
			<Box height="200px">
				<Alert borderRadius="md" mb="5" status="error">
					<AlertIcon />
					<AlertTitle>
						Failed to load projects, please try again later
					</AlertTitle>
				</Alert>
			</Box>
		);
	}

	/**
	 * Loading project card
	 */
	if (loading) {
		return (
			<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="20px">
				<ProjectCardLoading />

				{!isMobileViewport && (
					<>
						<ProjectCardLoading />
						<ProjectCardLoading />
					</>
				)}
			</SimpleGrid>
		);
	}

	/**
	 * If no projects are supplied
	 */
	if (projects.length === 0) {
		return (
			<Box height="200px">
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
			</Box>
		);
	}

	return (
		<>
			<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="20px">
				{projects.map(project => (
					<ProjectCard key={project.href} {...project} />
				))}
			</SimpleGrid>

			<Flex justify="flex-end">
				<Text mt="20px">
					<Link href="/projects">View All Projects</Link>
				</Text>
			</Flex>
		</>
	);
};

export default ProjectCardList;