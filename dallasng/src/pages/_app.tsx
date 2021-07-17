import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Fragment } from 'react';
import theme from '../components/theme';
import '../styles/globals.scss';
import { Page } from '../types/page';

type IProps = AppProps & {
	Component: Page;
};

const App: React.FC<IProps> = ({ Component, pageProps }) => {
	const getLayout = Component.getLayout ?? (page => page);
	const Layout = Component.layout ?? Fragment;

	return (
		<ChakraProvider theme={theme}>
			<Layout>{getLayout(<Component {...pageProps} />)}</Layout>
		</ChakraProvider>
	);
};

export default App;
