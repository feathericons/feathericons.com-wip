import NextDocument, { Html, Head, Main, NextScript } from "next/document"

export default class Document extends NextDocument {
	static async getInitialProps(ctx) {
		const initialProps = await NextDocument.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					{/* <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" /> */}
					{/* <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" /> */}
					{/* {process.env.NODE_ENV === "production" && <script async src="https://cdn.splitbee.io/sb.js" />} */}
					{process.env.NODE_ENV !== "production" && <script src="/scripts/sorcery_0-3-2.js" />}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
