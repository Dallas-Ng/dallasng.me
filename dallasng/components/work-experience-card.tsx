import {
	Avatar,
	Button,
	Center,
	createStyles,
	Group,
	Text
} from '@mantine/core';
import { NextLink } from '@mantine/next';
import { IconChevronRight } from '@tabler/icons';
import { toSanitisedLink } from '../utils/format';

interface IProps {
	imgUrl: string;
	title: string;
	company: string;
	from: string;
	to: string;
}

const WorkExpCard: React.FC<IProps> = props => {
	const { imgUrl, title, company, from, to } = props;
	const { classes, theme } = useStyles();

	const href = `/resume#${toSanitisedLink(`${company}-${title}`)}`;

	return (
		<NextLink href={href} style={{ cursor: 'pointer' }}>
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

						<Text color="dimmed" size="xs">
							{from} - {to}
						</Text>
					</div>

					<Button
						variant={theme.colorScheme === 'dark' ? 'default' : 'light'}
						radius="xl">
						<Center>
							View
							<IconChevronRight />
						</Center>
					</Button>
				</Group>
			</div>
		</NextLink>
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
