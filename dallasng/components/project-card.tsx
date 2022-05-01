import { Badge, Card, Text, Group, createStyles, Tooltip } from '@mantine/core';
import Image from 'next/image';

interface IProps {
	href?: string;
	imgSrc: string;
	imgFit?: 'contain' | 'cover';
	title: string;
	desc: string;
	skills?: string[];
	target?: '_self' | '_blank' | '_parent' | '_top';
}

const ProjectCard: React.FC<IProps> = props => {
	const {
		href,
		imgSrc,
		imgFit = 'cover',
		title,
		desc,
		skills = [],
		target = '_blank'
	} = props;
	const c = useStyles().classes;

	return (
		<Tooltip
			wrapLines
			withArrow
			width={200}
			transition="fade"
			transitionDuration={200}
			label="This project does not have a online link!"
			disabled={!!href}>
			<Card
				{...(href
					? { component: 'a', target: target, href }
					: { component: 'div' })}
				className={c.card}
				shadow="sm"
				p="lg">
				<Card.Section className={c.imgContainer}>
					<Image src={imgSrc} alt={title} layout="fill" objectFit={imgFit} />
				</Card.Section>

				<Group position="apart" className={c.header}>
					<Text weight={500}>{title}</Text>
				</Group>

				<Text size="sm" className={c.desc}>
					{desc}
				</Text>

				<Group className={c.skills} spacing={5}>
					{skills.map((skill, i) => (
						<Badge color="cyan" key={i}>
							{skill}
						</Badge>
					))}
				</Group>
			</Card>
		</Tooltip>
	);
};

const useStyles = createStyles(theme => ({
	card: {
		':hover': {
			boxShadow: theme.shadows.lg
		}
	},
	imgContainer: {
		position: 'relative',
		height: 80,
		background:
			theme.colorScheme === 'dark' ? theme.colors.gray[8] : theme.colors.gray[2]
	},
	header: {
		marginBottom: 5,
		marginTop: theme.spacing.sm
	},
	desc: {
		lineHeight: 1.5
	},
	skills: {
		marginTop: 10,
		height: 20
	}
}));

export default ProjectCard;
