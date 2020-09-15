import NextDocument, { Html, Head, Main, NextScript } from "next/document"

class Document extends NextDocument {
	static async getInitialProps(ctx) {
		const initialProps = await NextDocument.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html className="bg-cool-gray-50" lang="en">
				<Head>
					<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
					{process.env.NODE_ENV === "production" && (
						<script async src="https://cdn.splitbee.io/sb.js" />
					)}
					<script src="/scripts/layoutDarkMode.js" />
				</Head>
				<body className="antialiased">
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default Document
