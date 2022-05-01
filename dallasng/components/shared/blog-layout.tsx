import { Container, createStyles } from '@mantine/core';
import Head from 'next/head';
import BackButton from './back-button';
import Footer from './footer';
import Navigation from './navigation';

type Meta = { title?: string; desc?: string; author?: string };

interface IProps {
	meta: Meta;
}

const BlogLayout: React.FC<IProps> = ({ meta, children }) => {
	const c = useStyles().classes;

	return (
		<>
			<Head>
				<title>{meta.title} - Dallas Ng</title>
				<meta name="description" content={meta.desc} />
			</Head>

			<Navigation containerSize="sm" headerText="Blogs" />

			<Container size="sm" className={c.main}>
				<main>{children}</main>

				<BackButton />
			</Container>

			<Container>
				<Footer />
			</Container>
		</>
	);
};

const useStyles = createStyles(_theme => ({
	main: {
		minHeight: 'calc(100vh - 140px)',
		paddingBottom: 100
	}
}));

export default BlogLayout;
