import EmbossedFeather from "./EmbossedFeather"
import Head from "next/head"
import Link from "next/link"
import OctofaceIcon24x24 from "./OctofaceIcon24x24"
import React from "react"
import sponsors, { ISponsor } from "../fixtures/sponsors"
import StickyObscureEffect from "./StickyObscureEffect"
import useBreakpoints from "./useBreakpoints"
import { Download, ExternalLink, GitHub, Twitter } from "react-feather"
import { ExtAnchor } from "@zaydek/lib/dist/components"
import { GitHub_FeatherSite, Twitter_ShareOnTwitter } from "../fixtures/hrefs"
import { range } from "@zaydek/lib/dist/helpers"

// TODO: Add analytics.
function AbsoluteTopRow() {
	return (
		<div className="absolute x-0 t-0">
			<div className="hstack px-16 lg:px-24 py-12">
				<ExtAnchor className="group hstack stack-center space-8" href={Twitter_ShareOnTwitter}>
					{/* NOTE: `fill-current stroke-0` does not work here. */}
					<Twitter className="w-24 h-24" style={{ fill: "currentColor", strokeWidth: 0 }} />
					<p className="group-on:underline">Tweet thank you!</p>
				</ExtAnchor>
				<div className="spacer" />
				<ExtAnchor className="group hstack stack-center space-8" href={GitHub_FeatherSite}>
					<p className="group-on:underline">Star on GitHub!</p>
					<OctofaceIcon24x24 className="w-20 h-20" />
				</ExtAnchor>
			</div>
		</div>
	)
}

function Sponsor({ sponsor, className }: { sponsor: ISponsor; className?: string }) {
	return (
		<ExtAnchor className={className} href={sponsor.href}>
			<div className="group vstack stack-center space-8">
				<img src={sponsor.src} className="h-48" />
				<div className="hstack stack-center space-6">
					<span className="font-500 text-11 leading-1 group-on:underline">{sponsor.subtext}</span>
					<ExternalLink className="w-13 h-13" />
				</div>
			</div>
		</ExtAnchor>
	)
}

export default function App({ children }: { children?: React.ReactNode }) {
	const screen = useBreakpoints()

	return (
		<>
			<Head>
				<title>Feathericons</title>
				<link href="static/stylesheets/index.css" rel="stylesheet" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
			</Head>

			<AbsoluteTopRow />
			<div className="vstack space-96 pt-96 xl:pb-64 bg-gray-50">
				{/**/}

				{/* Top */}
				<div className="hstack px-16 lg:px-24">
					{/* NOTE: Uses `space-40`, `space-20`, and `space-10`. */}
					<div className="vstack xl:hstack space-40 w-full" style={{ maxWidth: 1024 + 64 }}>
						{/**/}

						{/* CTA buttons */}
						<div className="hstack">
							<div className="vstack stack-center space-20 w-full max-w-xs">
								<Link href="/">
									<a>
										<EmbossedFeather className="w-56 h-56 text-gray-400" />
									</a>
								</Link>
								<h1
									className="text-center font-500 text-32 -tracking-2.5 leading-1"
									style={{ fontFamily: "'DM Sans', ui-sans-serif, sans-serif" }}
								>
									Open source icons
								</h1>
								<h2 className="mt-10 text-center text-17">
									Created by{" "}
									<ExtAnchor className="font-500 on:underline" href="TODO">
										@colebemis
									</ExtAnchor>{" "}
									and{" "}
									<ExtAnchor className="font-500 on:underline" href="TODO">
										@username_ZAYDEK
									</ExtAnchor>
								</h2>
								{/* CTA buttons */}
								<div className="vstack md:hstack space-12 md:space-16 w-full max-w-md">
									{/* TODO: Change to `<button>` or `<ExtAnchor>`. */}
									<div className="vstack md:w-192 h-56 bg-gray-200 rounded-12 md:rounded-full">
										<div className="hstack stack-center space-8">
											<GitHub className="w-20 h-20" />
											<p className="font-500 text-17">Read docs</p>
										</div>
									</div>
									{/* TODO: Change to `<button>` or `<ExtAnchor>`. */}
									<div className="vstack md:w-192 h-56 bg-gray-200 rounded-12 md:rounded-full">
										<div className="hstack stack-center space-8">
											<Download className="w-20 h-20" />
											<p className="font-500 text-17">Download</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Sponsors */}
						{screen.md && (
							<>
								<div className="spacer" />
								<div className="hstack">
									<div className="vstack stack-center space-20">
										{/* TODO */}
										<div className="hstack stack-center space-8">
											<span className="font-500 text-11 tracking-2.5 leading-1">CHECK OUT OUR SPONSORS</span>
											<span className="font-500 text-11 tracking-2.5 leading-1">&middot;</span>
											<a className="hstack stack-center space-6 on:underline" href="TODO">
												<span className="font-500 text-11 tracking-2.5 leading-1">BECOME A SPONSOR</span>
												<ExternalLink className="w-13 h-13" />
											</a>
										</div>
										{/* NOTE: Added `<div>` escapes the `-m-*` context. */}
										<div className="block xl:hidden">
											<div className="-m-8 hstack" style={{ flexWrap: "wrap" }}>
												{sponsors.map(each => (
													<Sponsor key={each.href} className="m-8" sponsor={each} />
												))}
											</div>
										</div>
										<div className="hidden xl:vstack space-16">
											<div className="hstack space-16">
												{sponsors.slice(0, 3).map(each => (
													<Sponsor key={each.href} sponsor={each} />
												))}
											</div>
											<div className="hstack space-16">
												{sponsors.slice(3).map(each => (
													<Sponsor key={each.href} sponsor={each} />
												))}
											</div>
										</div>
									</div>
								</div>
							</>
						)}

						{/**/}
					</div>
				</div>

				{/* App */}
				<div className="hstack">
					<div
						className="w-full max-w-xl bg-white xl:rounded-24"
						style={{ boxShadow: "0 2px 4px -2px hsla(0, 0%, 0%, 0.25)" }}
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
									{/* Icon */}
									{/* NOTE: Uses a nested `sticky`. */}
									<div className="sticky t-0 xl:t-16 z-10">
										<div className="hstack h-320 bg-white border-b-1 xl:rounded-tr-24">
											<div className="vstack">
												<div className="w-64 h-64 bg-gray-300 rounded-full"></div>
											</div>
											{/* TODO: Move `p-24` off of `absolute`? */}
											<div className="absolute x-0 t-0 p-24">
												<div className="hstack">
													<div className="spacer"></div>
													<div className="w-16 h-16 bg-gray-200 rounded-full" />
												</div>
											</div>
											{/* TODO: Move `p-24` off of `absolute`? */}
											<div className="absolute x-0 b-0 p-24">
												<div className="hstack stack-center space-24">
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
