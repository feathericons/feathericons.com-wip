import Head from "next/head"

// TODO: Update <url>.dev to <url>.com.
const title = "Feather – Simply beautiful open source icons"

const description =
	"Feather is a collection of simply beautiful open source icons. " +
	"Each icon is designed on a 24x24 grid with an emphasis on simplicity, consistency and readability."

const url = process.env.NODE_ENV !== "production" ? "http://localhost:3000" : "https://feathericons.dev"

const TWTRFragment = () => (
	<>
		<meta property="twitter:card" content="summary_large_image" />
		<meta property="twitter:url" content={url} />
		<meta property="twitter:title" content={title} />
		<meta property="twitter:description" content={description} />
		<meta property="twitter:image" content={`https://${url}/images/share.png`} />

		{/* Added from before */}
		<meta name="twitter:creator" content="@colebemis" />
	</>
)

const FBFragment = () => (
	<>
		<meta property="og:type" content="website" />
		<meta property="og:url" content={url} />
		<meta property="og:title" content={title} />
		<meta property="og:description" content={description} />
		<meta property="og:image" content={`https://${url}/images/share.png`} />
	</>
)

export default function SEO() {
	return (
		<Head>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			{/* TODO: See favicon-16x16.png and favicon-32x32.png. */}
			<link rel="icon" href={`${url}/images/favicon.ico`} />
			<title>{title}</title>
			<meta name="title" content={title} />
			<meta name="description" content={description} />
			<TWTRFragment />
			<FBFragment />
		</Head>
	)
}
