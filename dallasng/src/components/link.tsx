import NextLink from 'next/link';
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react';
import React from 'react';

interface ILinkProps extends LinkProps {
	href: string;
	underline?: boolean;
}

const Link: React.FC<ILinkProps> = props => (
	<NextLink href={props.href}>
		<ChakraLink {...props}>{props.children}</ChakraLink>
	</NextLink>
);

export default Link;
