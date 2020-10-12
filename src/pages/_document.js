import { Head, Html, Main, NextScript } from "next/document"

import Document from "next/document"
import { ServerStyleSheet } from "styled-components"

// https://styled-components.com/docs/advanced#nextjs
// https://github.com/vercel/next.js/blob/master/examples/with-styled-components/pages/_document.js
export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet()
		const originalRenderPage = ctx.renderPage

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
				})

			const initialProps = await Document.getInitialProps(ctx)
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			}
		} finally {
			sheet.seal()
		}
	}

	// prettier-ignore
	render() {
		return (
			<Html lang="en">
				<Head>
					<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
					<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
					{process.env.NODE_ENV === "production" && <script async src="https://cdn.splitbee.io/sb.js" />}
					{/* TODO */}
					{/* <script src="/scripts/layoutDarkMode.js" /> */}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
