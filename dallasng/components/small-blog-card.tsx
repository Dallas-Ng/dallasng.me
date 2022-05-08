import { createStyles, Paper, Text, Title, Tooltip } from '@mantine/core';
import { NextLink } from '@mantine/next';

interface IProps {
	title: string;
	category: string;
	href: string;
}

const SmallBlogCard: React.FC<IProps> = props => {
	const c = useStyles().classes;
	const { title, category, href } = props;

	return (
		<NextLink href={href}>
			<Paper shadow="md" p="md" radius="md" className={c.card} withBorder>
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
		width: '100%'
	},
	title: {
		fontFamily: `Greycliff CF ${theme.fontFamily}`,
		fontWeight: 900,
		lineHeight: 1.2,
		fontSize: 20,
		marginTop: 5
	},
	category: {
		opacity: 0.7,
		fontWeight: 700,
		textTransform: 'uppercase'
	}
}));

export default SmallBlogCard;
