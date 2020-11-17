import { Duomo as DuomoCSS } from "@zaydek/duomo/dist/runtime"
import { useEffect } from "react"

// import "@zaydek/duomo"
import "@zaydek/prose"

import type { AppProps } from "next/app"

export default function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		const defer = DuomoCSS.init(process.env.NODE_ENV)
		return defer
	}, [])
	return <Component {...pageProps} />
}
