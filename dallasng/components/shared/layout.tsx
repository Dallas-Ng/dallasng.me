import { Container, createStyles, MantineNumberSize } from '@mantine/core';
import BackButton from './back-button';
import Footer from './footer';
import Navigation from './navigation';

interface IProps {
	backBtn?: boolean;
	containerSize?: MantineNumberSize;
}

const Layout: React.FC<IProps> = ({
	backBtn = true,
	containerSize = 'sm',
	children
}) => {
	const c = useStyles().classes;

	return (
		<>
			<Navigation containerSize={containerSize} />

			<Container size={containerSize} className={c.main}>
				<main>{children}</main>

				{backBtn && <BackButton />}
			</Container>

			<Container size={containerSize}>
				<Footer />
			</Container>
		</>
	);
};

const useStyles = createStyles(_theme => ({
	main: {
		minHeight: 'calc(100vh - 120px)',
		paddingBottom: 100
	}
}));

export default Layout;
