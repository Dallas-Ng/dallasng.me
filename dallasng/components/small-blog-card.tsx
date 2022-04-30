import { createStyles, Paper, Text, Title, Tooltip } from '@mantine/core';

interface IProps {
	title: string;
	category: string;
}

const SmallBlogCard: React.FC<IProps> = props => {
	const c = useStyles().classes;
	const { title, category } = props;

	return (
		<Tooltip
			withArrow
			color="dark"
			transition="fade"
			transitionDuration={200}
			style={{ width: '100%' }}
			label="Planned blog to write, not currently writing yet.">
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
		</Tooltip>
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
