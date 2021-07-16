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

					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default AppDocument;
