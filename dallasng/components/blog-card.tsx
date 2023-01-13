import { createStyles, Paper, Text, Title } from '@mantine/core';
import { NextLink } from '@mantine/next';

interface IProps {
	image: string;
	title: string;
	category: string;
	href: string;
}

const BlogCard: React.FC<IProps> = props => {
	const c = useStyles().classes;
	const { image, title, category, href } = props;

	return (
		<NextLink href={href} style={{ cursor: 'pointer' }}>
			<Paper
				shadow="md"
				p="xl"
				radius="md"
				sx={{ backgroundImage: `url(${image})` }}
				className={c.card}>
				<div>
					<Text className={c.category} size="xs">
						{category}
					</Text>

					<Title order={3} className={c.title}>
						{title}
					</Title>
				</div>
			</Paper>
		</NextLink>
	);
};

const useStyles = createStyles(theme => ({
	card: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		backgroundSize: 'center',
		backgroundPosition: 'center',
		[`@media (min-width: ${theme.breakpoints.md}px)`]: {
			height: 250
		}
	},

	title: {
		fontFamily: `Greycliff CF ${theme.fontFamily}`,
		fontWeight: 900,
		color: theme.white,
		lineHeight: 1.2,
		fontSize: 32,
		marginTop: theme.spacing.xs
	},
	category: {
		color: theme.white,
		opacity: 0.7,
		fontWeight: 700,
		textTransform: 'uppercase'
	}
}));

export default BlogCard;
