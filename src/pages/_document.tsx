import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		return await Document.getInitialProps(ctx)
	}
	render() {
		return (
			<Html lang="en">
				<Head>
					{/* TODO */}
					{/* <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" /> */}
					{/* <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" /> */}
					{/* {process.env.NODE_ENV === "production" && <script async src="https://cdn.splitbee.io/sb.js" />} */}

					{/* TODO */}
					<script
						// prettier-ignore
						async
						id="sorcery-script"
						src="/scripts/sorcery_0-3-x.js"
						data-node-env={process.env.NODE_ENV}
						data-ssr
					/>
				</Head>
				<body className="macos-retina">
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
