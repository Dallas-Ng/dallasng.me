import Link from '@/components/link';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import {
	Box,
	Flex,
	IconButton,
	Stack,
	Text,
	Tooltip,
	useMediaQuery
} from '@chakra-ui/react';
import React, { memo } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import ThemeToggler from './theme-toggler';

const NavigationBar = memo(() => {
	const [isMobileViewport] = useMediaQuery('(max-width: 768px)');
	const router = useRouter();

	return (
		<Flex alignItems="center" justifyContent="space-between" mt="20px">
			<Flex alignItems="center">
				<Link href="/">
					<Tooltip label="Home" hasArrow isDisabled={isMobileViewport}>
						<Box
							mr={['10px', '20px']}
							bg="gray.800"
							borderRadius="5px"
							display="flex"
							w={['40px', '60px']}
							justifyContent="center">
							<Image src="/logo.png" width={40} height={40} alt="" />
						</Box>
					</Tooltip>
				</Link>

				<Stack direction="row" spacing={['10px', '20px']}>
					<Link href="/about">
						<Text>About</Text>
					</Link>

					<Link href="/projects">
						<Text>Projects</Text>
					</Link>
				</Stack>
			</Flex>

			<Stack direction="row" spacing={['2px', '5px']}>
				<IconButton
					onClick={() => router.push('https://www.linkedin.com/in/dallas-ng/')}
					aria-label="LinkedIn"
					icon={<FaLinkedinIn />}
					bg="transparent"
					isRound
				/>

				<IconButton
					onClick={() => router.push('https://github.com/Dallas-Ng')}
					aria-label="GitHub"
					icon={<FaGithub />}
					bg="transparent"
					isRound
				/>

				<ThemeToggler />
			</Stack>
		</Flex>
	);
});

export default NavigationBar;
