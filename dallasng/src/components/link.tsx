import NextLink from 'next/link';
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react';
import React from 'react';

interface ILinkProps extends LinkProps {
	underline?: boolean;
}

const Link: React.FC<ILinkProps> = props => (
	<ChakraLink as={NextLink} {...props}>
		<a>{props.children}</a>
	</ChakraLink>
);

export default Link;
