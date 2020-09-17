import Head from "next/head"

// TODO: Change to "https://feathericons.com" for production.
const TITLE = "Feather – Simply beautiful open source icons"
const DESCRIPTION = "Feather is a collection of simply beautiful open source icons. Each icon is designed on a 24x24 grid with an emphasis on simplicity, consistency and readability."
const URL = process.env.NODE_ENV !== "production" ? "http://localhost:3000" : "https://feathericons.dev"

export default function SEO() {
	return (
		<Head>

			<meta
				charSet="utf-8"
			/>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<link
				// TODO: See favicon-16x16.png and favicon-32x32.png.
				rel="icon"
				href={`${URL}/images/favicon.ico`}
			/>

			{/* Core */}
			<title>
				{TITLE}
			</title>
			<meta
				name="title"
				content={TITLE}
			/>
			<meta
				name="description"
				content={DESCRIPTION}
			/>

			{/* Facebook */}
			<meta
				property="og:type"
				content="website"
			/>
			<meta
				property="og:url"
				content={URL}
			/>
			<meta
				property="og:title"
				content={TITLE}
			/>
			<meta
				property="og:description"
				content={DESCRIPTION}
			/>
			<meta
				property="og:image"
				content={`https://${URL}/images/share.png`}
			/>

			{/* Twitter */}
			<meta
				property="twitter:card"
				content="summary_large_image"
			/>
			<meta
				property="twitter:url"
				content={URL}
			/>
			<meta
				property="twitter:title"
				content={TITLE}
			/>
			<meta
				property="twitter:description"
				content={DESCRIPTION}
			/>
			<meta
				property="twitter:image"
				content={`https://${URL}/images/share.png`}
			/>

			{/* New */}
			<meta
				name="twitter:creator"
				content="@colebemis"
			/>

		</Head>
	)
}
