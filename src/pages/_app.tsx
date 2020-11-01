import "@zaydek/sorcery/dist/index.css"
import "@zaydek/prose"

import type { AppProps } from "next/app"

export default function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}
