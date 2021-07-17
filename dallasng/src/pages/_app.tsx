import theme from '@/src/components/theme';
import { Page } from '@/src/types/page';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Fragment } from 'react';
import '../styles/globals.scss';

type IProps = AppProps & {
	Component: Page;
};

const App: React.FC<IProps> = ({ Component, pageProps }) => {
	const getLayout = Component.getLayout ?? (page => page);
	const Layout = Component.layout ?? Fragment;

	return (
		<ChakraProvider theme={theme}>
			<DefaultSeo
				title="Portfolio"
				titleTemplate="%s - Dallas Ng"
				description="dallasng.me"
			/>

			<Layout>{getLayout(<Component {...pageProps} />)}</Layout>
		</ChakraProvider>
	);
};

export default App;
