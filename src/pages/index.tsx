import * as Feather from "react-feather"
import datasetAsArray from "data/datasetAsArray"
import Head from "next/head"
import Link from "next/link"
import React from "react"
import sponsors, { ISponsor } from "fixtures/sponsors"
import { Download, ExternalLink, GitHub, Twitter } from "react-feather"
import { ExtAnchor } from "@zaydek/lib/dist/components"
import { GitHub_FeatherSite, Twitter_ShareOnTwitter } from "fixtures/hrefs"
import { range } from "@zaydek/lib/dist/helpers"
import { useBreakpoints } from "@zaydek/lib/dist/hooks"

const breakpoints = {
	xs: 512,
	sm: 640,
	md: 768,
	lg: 1024,
	xl: 1280 + 64,
}

function EmbossedFeather(props: React.ComponentProps<"svg">) {
	return (
		// prettier-ignore
		<svg className="fill-current" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path fillRule="evenodd" clipRule="evenodd" d="M21.5308 13.5393L21.5329 13.5372C22.4712 12.5992 22.9983 11.327 22.9983 10.0004C22.9983 8.67391 22.4712 7.4017 21.5329 6.46369C21.4156 6.34644 21.2931 6.23561 21.1659 6.13143C20.2756 5.40218 19.1561 4.99872 17.995 4.99872C16.668 4.99872 15.3954 5.52568 14.4571 6.46369L8 12.9187L8 18.5885L17.2921 9.2994L17.2929 9.29857C17.6834 8.90817 18.3166 8.90817 18.7071 9.29857C19.0976 9.68897 19.0976 10.3219 18.7071 10.7123M18.7071 10.7123L13.4142 16.0035H19.0731L21.5308 13.5393M11.4142 18.0029L9.41421 20.0022H15.0849L17.079 18.0029H11.4142ZM7.41421 22.0016L4.70776 24.7072C4.31724 25.0976 3.68342 25.0982 3.29289 24.7078C2.90237 24.3174 2.90237 23.6845 3.29289 23.2941L3.29382 23.2932L6 20.5878L6 12.5046C6 12.2395 6.10536 11.9852 6.29289 11.7978L6.58523 11.5055L13.0429 5.04993C14.3563 3.73697 16.1376 2.99936 17.995 2.99936C19.8524 2.99936 21.6337 3.73697 22.9471 5.04993C23.1113 5.21405 23.2665 5.38548 23.4123 5.56345C24.4334 6.80927 24.9983 8.37575 24.9983 10.0004C24.9983 11.8567 24.2609 13.6369 22.9483 14.9497L22.9471 14.951L20.2937 17.6114C20.2409 17.6802 20.1794 17.7419 20.1107 17.7949L18.4957 19.4141L16.2082 21.7078C16.0205 21.8959 15.7657 22.0016 15.5 22.0016H7.41421ZM21.4601 19.2736L17.6245 23.1194C17.0616 23.6838 16.2972 24.001 15.5 24.001H8.24264L6.12132 26.1216C4.94975 27.2928 3.05025 27.2928 1.87868 26.1216C0.707109 24.9504 0.707106 23.0515 1.87868 21.8803L4 19.7597V12.5046C4 11.7093 4.31607 10.9464 4.87868 10.384L11.6287 3.63617C13.3171 1.94826 15.6072 1 17.995 1C20.3828 1 22.6729 1.94826 24.3613 3.63617C26.0498 5.32408 26.9983 7.61338 26.9983 10.0004C26.9983 12.3869 26.0502 14.6757 24.3625 16.3635L24.3613 16.3647L21.7769 18.956C21.6794 19.0696 21.5735 19.1758 21.4601 19.2736Z" />
		</svg>
	)
}

function OctofaceIcon24x24(props: React.ComponentProps<"svg">) {
	return (
		// prettier-ignore
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path d="M7.75 11c-.69 0-1.25.56-1.25 1.25v1.5a1.25 1.25 0 102.5 0v-1.5C9 11.56 8.44 11 7.75 11zm1.27 4.5a.469.469 0 01.48-.5h5a.47.47 0 01.48.5c-.116 1.316-.759 2.5-2.98 2.5s-2.864-1.184-2.98-2.5zm7.23-4.5c-.69 0-1.25.56-1.25 1.25v1.5a1.25 1.25 0 102.5 0v-1.5c0-.69-.56-1.25-1.25-1.25z" />
			<path fillRule="evenodd" d="M21.255 3.82a1.725 1.725 0 00-2.141-1.195c-.557.16-1.406.44-2.264.866-.78.386-1.647.93-2.293 1.677A18.442 18.442 0 0012 5c-.93 0-1.784.059-2.569.17-.645-.74-1.505-1.28-2.28-1.664a13.876 13.876 0 00-2.265-.866 1.725 1.725 0 00-2.141 1.196 23.645 23.645 0 00-.69 3.292c-.125.97-.191 2.07-.066 3.112C1.254 11.882 1 13.734 1 15.527 1 19.915 3.13 23 12 23c8.87 0 11-3.053 11-7.473 0-1.794-.255-3.647-.99-5.29.127-1.046.06-2.15-.066-3.125a23.652 23.652 0 00-.689-3.292zM20.5 14c.5 3.5-1.5 6.5-8.5 6.5s-9-3-8.5-6.5c.583-4 3-6 8.5-6s7.928 2 8.5 6z" />
		</svg>
	)
}

function AbsoluteTopRow() {
	return (
		// TODO: Add analytics here.
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

interface SponsorProps {
	sponsor: ISponsor
	className?: string
}

function Sponsor({ sponsor, className }: SponsorProps) {
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

function StickyObscureEffect() {
	const screen = useBreakpoints(breakpoints)
	return (
		<>
			{screen.xl && (
				// NOTE: Use `z-20` not `z-10` here.
				<div className="sticky t-0 -mx-8 -mb-24 z-20">
					<div className="hstack">
						<svg
							className="w-8 h-40 text-gray-200 fill-current"
							preserveAspectRatio="none"
							viewBox="0 0 1 1"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect width={1} height={1} />
						</svg>
						<svg
							className="w-24 h-40 text-gray-200 fill-current"
							preserveAspectRatio="none"
							viewBox="0 0 24 40"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path fillRule="evenodd" clipRule="evenodd" d="M24 0H0V40C0 26.7451 10.7451 16 24 16V0Z" />
						</svg>
						<svg
							className="w-full h-16 text-gray-200 fill-current"
							preserveAspectRatio="none"
							viewBox="0 0 1 1"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect width={1} height={1} />
						</svg>
						<svg
							className="w-24 h-40 text-gray-200 fill-current"
							preserveAspectRatio="none"
							viewBox="0 0 24 40"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path fillRule="evenodd" clipRule="evenodd" d="M0 0H24V40C24 26.7451 13.2549 16 0 16V0Z" />
						</svg>
						<svg
							className="w-8 h-40 text-gray-200 fill-current"
							preserveAspectRatio="none"
							viewBox="0 0 1 1"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect width={1} height={1} />
						</svg>
					</div>
				</div>
			)}
		</>
	)
}

export default function Home() {
	const screen = useBreakpoints(breakpoints)

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
								{/* Searh bar */}
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
								{/* Icons */}
								<div className="grid-cols-128 gap-16 px-16 sm:px-24 xl:px-64 py-64">
									{datasetAsArray.map(each => (
										<div key={each.name.kebab} className="aspect-ratio-1:1">
											<div className="group vstack stack-center space-16">
												{React.createElement((Feather as { [key: string]: React.FC<Feather.Props> })[each.name.title], {
													className: "w-32 h-32",
												})}
												<div className="absolute x-0 b-0">
													<div className="text-center text-14 leading-1.25 text-gray-600 group-on:underline">
														{each.name.kebab}
													</div>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
							{/* RHS */}
							<div className="hidden md:block w-320 bg-gray-50 border-l-1 xl:rounded-r-24">
								<div className="sticky t-0 xl:t-16 z-10">
									{/* Preview */}
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
													<div className="w-64 h-32 bg-gray-200 rounded-full" />
												</div>
											</div>
											{/* <div className="hstack stack-center space-16 p-24">
												<div className="w-32 h-32 bg-gray-200 rounded-full" />
												<div className="w-160 h-16 bg-gray-100 rounded-full" />
												<div className="spacer" />
											</div>
											<div className="spacer" /> */}
										</div>
									</div>
									{/* Controls */}
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
												<div className="w-64 h-32 bg-gray-200 rounded-full" />
											</div>
										</div>
									))}
									{/* Carbon */}
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

// {/* <div className="hidden xl:hstack mt-24">
// 	<div className="prose">
// 		<p className="text-center">
// 			<small>
// 				Feather is by <a href="TODO">Cole Bemis</a> and <a href="TODO">feathericons.com</a> by{" "}
// 				<a href="TODO">Zaydek</a>
// 				<br />
// 				Built using <a href="TODO">Duomo CSS</a> ☀️ and <a href="TODO">Prose CSS</a> 🧐
// 			</small>
// 		</p>
// 	</div>
// </div> */}
