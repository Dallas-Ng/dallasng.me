import { createStyles, Group, Text } from '@mantine/core';
import Image from 'next/image';

interface IProps {
	institution: string;
	specialisation: string;
	from: string;
	to: string;
	imgUrl: string;
	bullets: string[];
}

const EducationCard: React.FC<IProps> = props => {
	const { institution, specialisation, from, to, bullets, imgUrl } = props;
	const { classes } = useStyles();

	return (
		<div className={classes.btn}>
			<Group align="start">
				<span style={{ marginTop: 10 }}>
					<Image src={imgUrl} objectFit="scale-down" height={40} width={40} />
				</span>

				<div style={{ flex: 1 }}>
					<Text weight={500} style={{}}>
						{specialisation}
					</Text>

					<Text color="dimmed" size="sm">
						{institution}
					</Text>

					<Text color="dimmed" size="xs">
						{from} - {to}
					</Text>

					{bullets.length > 0 && (
						<Text color="dimmed" size="xs">
							<ul style={{ marginTop: 0, marginLeft: 0, paddingLeft: 30 }}>
								{bullets.map(point => (
									<li>{point}</li>
								))}
							</ul>
						</Text>
					)}
				</div>
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
		transitionDuration: '100ms'
	}
}));

export default EducationCard;
