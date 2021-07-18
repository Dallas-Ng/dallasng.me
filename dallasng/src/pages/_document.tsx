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
				<link rel="icon" href="/logo-blue.png" />

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default AppDocument;
