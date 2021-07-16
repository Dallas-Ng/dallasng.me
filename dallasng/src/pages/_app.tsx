import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../components/theme';
import '../styles/globals.scss';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
	<ChakraProvider theme={theme}>
		<Component {...pageProps} />
	</ChakraProvider>
);

export default App;
