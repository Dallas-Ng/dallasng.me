import '../styles/globals.css';
import type { AppProps } from 'next/app';
import type { GetServerSidePropsContext } from 'next/types';
import { useState } from 'react';
import { getCookie, setCookies } from 'cookies-next';
import Head from 'next/head';
import {
	MantineProvider,
	ColorScheme,
	ColorSchemeProvider
} from '@mantine/core';

interface IProps extends AppProps {
	colorScheme: ColorScheme;
}

const App = (props: IProps): JSX.Element => {
	const { Component, pageProps } = props;
	const [colorScheme, setColorScheme] = useState<ColorScheme>(
		props.colorScheme
	);

	const toggleColorScheme = (value?: ColorScheme) => {
		const nextColorScheme =
			value || (colorScheme === 'dark' ? 'light' : 'dark');
		setColorScheme(nextColorScheme);
		setCookies('mantine-color-scheme', nextColorScheme, {
			maxAge: 60 * 60 * 24 * 30
		});
	};

	return (
		<>
			<Head>
				<title>Dallas Ng</title>
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

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
	colorScheme: getCookie('mantine-color-scheme', ctx) || 'dark'
});

export default App;
