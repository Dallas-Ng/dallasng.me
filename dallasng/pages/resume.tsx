import {
	Group,
	Title,
	Text,
	createStyles,
	Button,
	Paper,
	Divider,
	Anchor
} from '@mantine/core';
import { NextPage } from 'next';
import Layout from '../components/shared/layout';
import { EXPERIENCE } from '../data/experience.data';
import { IconFileDownload } from '@tabler/icons';
import { SKILLS } from '../data/skills.data';
import { EDUCATION } from '../data/education.data';
import { NextLink } from '@mantine/next';
import Head from 'next/head';
import { toSanitisedLink } from '../utils/format';

const ResumePage: NextPage = () => {
	const { classes } = useStyles();

	return (
		<Layout headerText="Resume">
			<Head>
				<title>Resume - Dallas Ng</title>
				<meta
					name="description"
					content="View my work experience, education and skills"
				/>
			</Head>

			<Title>Resume</Title>

			<Button
				component="a"
				download
				href="/dallas_ng_resume.pdf"
				leftIcon={<IconFileDownload size={16} />}
				variant="outline"
				mt="md"
				mb="xl">
				Download My Resume
			</Button>

			<Title order={2} mb="sm">
				Education
			</Title>

			{EDUCATION.map((edu, i) => (
				<Paper key={i}>
					<Group position="apart">
						<div>
							<Text weight="bold">{edu.institution}</Text>
							<Text>{edu.specialisation}</Text>
						</div>

						<Text>
							{edu.from} - {edu.to}
						</Text>
					</Group>
				</Paper>
			))}

			<Divider mb="md" mt={30} />

			<Title order={2} mb="sm">
				Experience
			</Title>

			{EXPERIENCE.map((exp, i) => (
				<>
					<span
						className="anchor"
						id={toSanitisedLink(`${exp.company}-${exp.title}`)}
					/>

					<div key={i} className={classes.expItem}>
						<Title order={3}>{exp.title}</Title>

						<Group position="apart">
							{exp.website ? (
								<Anchor href={exp.website} component={NextLink} target="_blank">
									{exp.company}
								</Anchor>
							) : (
								<Text>{exp.company}</Text>
							)}

							<Text>
								{exp.from} - {exp.to}
							</Text>
						</Group>

						<ul style={{ margin: '10px 0' }}>
							{exp.description.map((desc, i) => (
								<li key={i}>{desc}</li>
							))}
						</ul>

						<Text>
							<em>
								{exp.technologies.length >= 1 && (
									<>Technologies: {exp.technologies.join(', ')}</>
								)}
							</em>
						</Text>
					</div>
				</>
			))}

			<Divider mb="md" />

			<Title order={2} mb="sm">
				Skills
			</Title>

			{SKILLS.map((skill, i) => (
				<Paper mb="xs" key={i}>
					<Text weight="bold">{skill.type}</Text>
					<Text>{skill.items}</Text>
				</Paper>
			))}
		</Layout>
	);
};

const useStyles = createStyles(_theme => ({
	expItem: {
		marginBottom: 30
	}
}));

export default ResumePage;
