import { Sorcery as SorceryCSS } from "@zaydek/sorcery/dist/runtime"
import { useEffect } from "react"

import "@zaydek/sorcery/dist/index.css"
import "@zaydek/prose/dist/index.css"

import type { AppProps } from "next/app"

export default function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		SorceryCSS.init()
	}, [])
	return <Component {...pageProps} />
}
