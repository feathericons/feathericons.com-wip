import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		return await Document.getInitialProps(ctx)
	}
	render() {
		return (
			<Html className="macos-retina bg-gray-50" lang="en">
				<Head>
					{/* TODO */}
					{/* <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" /> */}
					{/* <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" /> */}
					{/* {process.env.NODE_ENV === "production" && <script async src="https://cdn.splitbee.io/sb.js" />} */}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
