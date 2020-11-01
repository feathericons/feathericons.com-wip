import "stylesheets/grid.scss" // TODO: Extract to @zaydek/sorcery.

import "@zaydek/sorcery"
import "@zaydek/prose"

import type { AppProps } from "next/app"

export default function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}
