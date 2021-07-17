import {
	Box,
	Flex,
	IconButton,
	Image,
	Stack,
	Text,
	Tooltip
} from '@chakra-ui/react';
import { memo } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Link from './link';
import ThemeToggler from './theme-toggler';

const NavigationBar = memo(() => (
	<Flex alignItems="center" justifyContent="space-between" mt="20px">
		<Flex alignItems="center">
			<Link href="/">
				<Tooltip label="Home" hasArrow>
					<Box
						mr={['10px', '20px']}
						bg="gray.800"
						borderRadius="5px"
						display="flex"
						w={['40px', '60px']}
						justifyContent="center">
						<Image boxSize="40px" src="/logo.png" />
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
				aria-label="GitHub"
				icon={<FaLinkedinIn />}
				bg="transparent"
				isRound
			/>

			<IconButton
				aria-label="GitHub"
				icon={<FaGithub />}
				bg="transparent"
				isRound
			/>

			<ThemeToggler />
		</Stack>
	</Flex>
));

export default NavigationBar;
