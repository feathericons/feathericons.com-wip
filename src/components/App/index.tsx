import AbsoluteTop from "./AbsoluteTop"
import CTASection from "./CTASection"
import Head from "next/head"
import React from "react"
import StickyObscureEffect from "./StickyObscureEffect"
import { Duomo } from "@zaydek/duomo/dist/runtime"
import { range } from "@zaydek/lib/dist/helpers"
import { useEffect } from "react"
import { useRouter } from "next/router"

import "@zaydek/prose"

export default function App({ children }: { children?: React.ReactNode }) {
	useEffect(() => {
		return Duomo.init(process.env.NODE_ENV)
	}, [])

	const router = useRouter()

	useEffect(() => {
		const handleRouteChange = (url: string) => {
			if (url === "/") {
				return
			}
			requestAnimationFrame(() => {
				const obscureEffect = document.getElementById("obscure-effect")!
				window.scrollTo(0, obscureEffect.getBoundingClientRect().y)
			})
		}
		router.events.on("routeChangeComplete", handleRouteChange)
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange)
		}
	}, [])

	return (
		<>
			<Head>
				{/* TODO: Add SEO here. */}
				<title>Feathericons</title>
				<link href="static/stylesheets/index.css" rel="stylesheet" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400&display=swap" rel="stylesheet" />
			</Head>

			<AbsoluteTop />
			<div className="vstack xl:pb-64 bg-gray-50">
				{/**/}

				<CTASection />

				{/* App */}
				<div className="hstack">
					<div
						className="w-full max-w-xl bg-white xl:rounded-24 z-10"
						style={{ boxShadow: "var(--shadow-xs), var(--shadow-base)" }}
					>
						<StickyObscureEffect />
						<div className="hstack">
							{/* LHS */}
							<div className="spacer">
								{/* Searh */}
								<div className="sticky t-0 xl:t-16 z-10">
									<div className="hstack stack-center space-16 p-24 bg-white border-b-1 xl:rounded-tl-24">
										<div className="w-32 h-32 bg-gray-200 rounded-full" />
										<div className="spacer" />
										<div className="hidden md:vstack px-6 w-128 h-32 bg-gray-100 rounded-full">
											<div className="hstack">
												<div className="w-20 h-20 bg-gray-300 rounded-full" />
												<div className="spacer" />
											</div>
										</div>
										<div className="w-32 h-32 bg-gray-200 rounded-full" />
									</div>
								</div>
								{/* prettier-ignore */}
								<div className="px-16 sm:px-24 xl:px-64 py-64">
									{children}
								</div>
							</div>
							{/* RHS */}
							<div className="hidden md:block w-320 bg-gray-50 border-l-1 xl:rounded-r-24">
								<div className="sticky t-0 xl:t-16 z-10">
									{/* Icon pane */}
									<div className="sticky t-0 xl:t-16 z-10">
										<div className="hstack stack-center h-320 bg-white border-b-1 xl:rounded-tr-24">
											{/* Icon */}
											<div className="w-64 h-64 bg-gray-300 rounded-full" />
											<div className="absolute x-0 t-0">
												<div className="hstack p-24">
													<div className="spacer" />
													<div className="w-16 h-16 bg-gray-200 rounded-full" />
												</div>
											</div>
											<div className="absolute x-0 b-0">
												<div className="hstack stack-center space-24 p-24">
													<div className="spacer">
														<div className="w-full h-8 bg-gray-200 rounded-full" />
													</div>
													<div className="w-64 h-28 bg-gray-200 rounded-full" />
												</div>
											</div>
										</div>
									</div>
									{/* Preferences */}
									{range(2).map(key => (
										<div key={key} className="vstack space-16 p-24 border-b-1">
											<div className="hstack stack-center">
												<div className="w-96 h-12 bg-gray-200 rounded-full" />
												<div className="spacer" />
												<div className="w-16 h-16 bg-gray-200 rounded-full" />
											</div>
											<div className="hstack stack-center space-24">
												<div className="spacer">
													<div className="w-full h-8 bg-gray-200 rounded-full" />
												</div>
												<div className="w-64 h-28 bg-gray-200 rounded-full" />
											</div>
										</div>
									))}
									{/* Ads */}
									<div className="hstack space-16 p-24 border-b-1">
										<div className="w-128 h-96 bg-gray-200 rounded-4" />
										<div className="spacer vstack space-8" data-stagger>
											<div className="h-8 bg-gray-200 rounded-full" />
											<div className="h-8 bg-gray-200 rounded-full" />
											<div className="h-8 bg-gray-200 rounded-full" />
											<div className="h-8 bg-gray-200 rounded-full" />
											<div className="spacer" />
											<div className="h-8 bg-gray-200 rounded-full" style={{ alignSelf: "flex-end" }} />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/**/}
			</div>
		</>
	)
}
