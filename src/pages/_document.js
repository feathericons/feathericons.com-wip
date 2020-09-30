import NextDocument, { Html, Head, Main, NextScript } from "next/document"

class Document extends NextDocument {
	static async getInitialProps(ctx) {
		const initialProps = await NextDocument.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html className="antialiased bg-cool-gray-50" lang="en">
				<Head>
					<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
					<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
					{/* <link href="/fonts/InterDisplay/index.css" rel="stylesheet" /> */}
					{process.env.NODE_ENV === "production" && (
						<script async src="https://cdn.splitbee.io/sb.js" />
					)}
					<script src="/scripts/layoutDarkMode.js" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default Document
