import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext
} from 'next/document';

class AppDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		return await Document.getInitialProps(ctx);
	}

	render() {
		return (
			<Html>
				<Head />
				<body>
					<title>Dallas Ng</title>
					<meta name="description" content="Dallas Ng Portfolio" />
					<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />

					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default AppDocument;
