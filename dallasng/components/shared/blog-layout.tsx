import { Container, createStyles, Title, Text } from '@mantine/core';
import Head from 'next/head';
import Footer from './footer';
import GoToTopButton from './go-to-top-button';
import Navigation from './navigation';

type Meta = { title?: string; desc?: string; author?: string; date: string };

interface IProps {
	meta: Meta;
}

const BlogLayout: React.FC<IProps> = ({ meta, children }) => {
	const c = useStyles().classes;
	const { title, date } = meta;

	return (
		<>
			<Head>
				<title>{meta.title} - Dallas Ng&apos;s Blogs</title>
				<meta name="description" content={meta.desc} />
			</Head>

			<Navigation containerSize="sm" headerText="Blogs" />

			<Container size="sm" className={c.main}>
				<main>
					<Title>{title}</Title>
					<Text mb="xl" size="sm">
						{date}
					</Text>

					{children}
				</main>

				<GoToTopButton />
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
