import {
	Anchor,
	Avatar,
	Button,
	Center,
	createStyles,
	Group,
	Text
} from '@mantine/core';
import { NextLink } from '@mantine/next';
import { ChevronRight } from 'tabler-icons-react';

interface IProps {
	imgUrl: string;
	title: string;
	company: string;
}

const WorkExpCard: React.FC<IProps> = props => {
	const { imgUrl, title, company } = props;
	const { classes, theme } = useStyles();

	return (
		<div className={classes.btn}>
			<Group>
				<Avatar src={imgUrl} radius="xl" />

				<div style={{ flex: 1 }}>
					<Text size="sm" weight={500}>
						{title}
					</Text>

					<Text color="dimmed" size="xs">
						{company}
					</Text>
				</div>

				<Button
					variant={theme.colorScheme === 'dark' ? 'default' : 'light'}
					radius="xl"
					component={NextLink}
					href={`/resume#${company.toLowerCase().replace(/ /g, '-')}`}>
					<Center>
						View
						<ChevronRight size={14} />
					</Center>
				</Button>
			</Group>
		</div>
	);
};

const useStyles = createStyles(theme => ({
	btn: {
		display: 'block',
		width: '100%',
		padding: theme.spacing.sm,
		borderRadius: theme.radius.md,
		transition: 'ease-in',
		transitionDuration: '100ms',

		':hover': {
			backgroundColor: theme.colors.gray[0],
			color: 'black'
		}
	}
}));

export default WorkExpCard;
