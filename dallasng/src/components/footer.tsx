import Link from '@/src/components/link';
import { Flex, Text } from '@chakra-ui/react';
import React, { memo } from 'react';

const Footer = memo(() => (
	<Flex
		as="footer"
		h="60px"
		justifyContent="space-between"
		alignItems="center"
		fontSize="12px">
		<Text display={['none', 'block']} flex="1" textAlign="center">
			<Link href="https://github.com/dallas-ng">View Source Code</Link>
		</Text>

		<Text flex="1" textAlign="center">
			Built by Dallas
		</Text>

		<Text display={['none', 'block']} flex="1" textAlign="center">
			<Link href="mailto:ngdallas1@gmail.com">Contact Me</Link>
		</Text>
	</Flex>
));

export default Footer;
