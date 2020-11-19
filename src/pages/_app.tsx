import { AppProps } from "next/app"
import { Duomo } from "@zaydek/duomo/dist/runtime"
import { useEffect } from "react"

import "@zaydek/prose"

export default function MyApp({ Component, pageProps }: AppProps) {
	useEffect(() => {
		const defer = Duomo.init(process.env.NODE_ENV)
		return defer
	}, [])
	return <Component {...pageProps} />
}
