import { MDXProvider } from "@mdx-js/react"
import { Sorcery as SorceryCSS } from "@zaydek/sorcery/dist/runtime"
import { useEffect } from "react"

import "@zaydek/sorcery/dist/index.css"
import "@zaydek/prose"

import type { AppProps } from "next/app"

export default function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		SorceryCSS.init()
	}, [])
	return (
		// @ts-ignore
		<MDXProvider>
			<Component {...pageProps} />
		</MDXProvider>
	)
}
