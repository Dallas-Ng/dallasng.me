import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import Head from 'next/head';
import {
	MantineProvider,
	ColorScheme,
	ColorSchemeProvider
} from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';

const App = (props: AppProps): JSX.Element => {
	const { Component, pageProps } = props;
	const [storeScheme, setStoredScheme] = useLocalStorage<ColorScheme>({
		key: 'scheme',
		defaultValue: 'dark'
	});
	const [colorScheme, setColorScheme] = useState<ColorScheme>(storeScheme);

	const toggleColorScheme = (value?: ColorScheme) => {
		const nextColorScheme =
			value || (colorScheme === 'dark' ? 'light' : 'dark');
		setColorScheme(nextColorScheme);
		setStoredScheme(nextColorScheme);
	};

	return (
		<>
			<Head>
				<title>Dallas Ng</title>
				<meta
					name="description"
					content="Dallas Ng, a software engineer that excels in fast paced environemnts."
				/>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
				<link rel="shortcut icon" href="/favicon.ico" />
			</Head>

			<ColorSchemeProvider
				colorScheme={colorScheme}
				toggleColorScheme={toggleColorScheme}>
				<MantineProvider
					theme={{ colorScheme }}
					withGlobalStyles
					withNormalizeCSS>
					<Component {...pageProps} />
				</MantineProvider>
			</ColorSchemeProvider>
		</>
	);
};

export default App;
