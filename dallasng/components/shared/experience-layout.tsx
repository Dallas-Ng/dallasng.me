import { Container } from '@mantine/core';
import Footer from './footer';
import Navigation from './navigation';
import Head from 'next/head';

type Meta = { title: string; desc: string };

interface IProps {
	meta: Meta;
}

const ExperienceLayout: React.FC<IProps> = ({ meta, children }) => {
	return (
		<>
			<Head>
				<title>{meta.title} - Dallas Ng&apos;s Experience</title>
				<meta name="description" content={meta.desc} />
			</Head>
			<Navigation containerSize="sm" headerText="Experience" />

			<main>{children}</main>

			<Container mt={50}>
				<Footer />
			</Container>
		</>
	);
};
export default ExperienceLayout;
