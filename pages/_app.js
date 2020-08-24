import Head from "next/head"

import "stylesheets/tailwind-css/tailwind.generated.css"
import "stylesheets/tailwind-css/experimental-color-vars.css"

// TODO: Add <link rel="icon" href="/favicon.ico" />.
const App = ({ Component, pageProps }) => (
	<>
		<Head>
			<title>
				Feathericons 2.0
			</title>
			<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
		</Head>
		<Component {...pageProps} />
	</>
)

export default App
