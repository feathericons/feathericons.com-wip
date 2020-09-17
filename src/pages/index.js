import dataset from "data/dataset"
import SEO from "./_SEO"
import sponsors from "data/sponsors"
import Style from "lib/x/Style"
import target_blank from "lib/x/target_blank"
import { Space, EnSpace, EmSpace } from "lib/x/Spaces"

import { ExternalLink as SVGExternalLink } from "react-feather"

/**********/

const SVG = ({ svg: Component, ...props }) => (
	<Component {...props} />
)

// Converts px units to rem units.
function px(n) {
	n /= 16
	return n + "rem"
}

// Converts Tailwind units to rem units.
function tw(n) {
	n *= 4
	n /= 16
	return n + "rem"
}

// https://dev.to/patarapolw/fake-tagged-template-string-literal-to-enable-syntax-highlighting-in-vscode-34g1
function css(arr, ...args) {
	return arr.map((each, x) => `${each}${args[x] || ""}`).join("")
}

/**********/

/* </Hero> */

function LogoAndCTA() {
	return (
		// NOTE: Use w-full sm:w-auto because of CTA buttons.
		<div className="flex flex-col items-center w-full sm:w-auto">

			{/* Logo mark */}
			<div className="w-20 h-20 bg-gray-200 rounded-full" />

			{/* <h1> */}
			<div className="h-10" />
			<div className="h-6 bg-gray-200 rounded-full" style={{ width: tw(104) }} />

			{/* CTA buttons */}
			<div className="h-6" />
			<div className="flex flex-col sm:flex-row w-full sm:w-auto">
				<div className="w-auto sm:w-44 h-14 bg-gray-200 rounded-full" />
				<div className="w-4 h-4" />
				<div className="w-auto sm:w-44 w-44 h-14 bg-gray-200 bg-opacity-50 rounded-full" />
			</div>

		</div>
	)
}

function Sponsors() {

	function Sponsor({ sponsor }) {
		return (
			<a
				key={sponsor.href}
				className="!opacity-93.75 !dark:opacity-87.5 !hover:opacity-100"
				href={sponsor.href + "?ref=feathericons.com"}
				// data-splitbee-event="Click Sponsor Link"
				// data-splitbee-event-type={sponsor.name}
				{...target_blank}
			>
				<div className="flex flex-col items-center">
					<img className="h-12" src={sponsor.src} alt={sponsor.name} />
					<div className="h-2" />
					<p className="font-medium text-xs leading-none text-purple-50">
						<span className="inline flex flex-row items-center align-top">
							{sponsor.tagline}
							<EnSpace />
							<Style
								className="opacity-75"
								style={{
									width: "0.875em",
									height: "0.875em",
								}}
							>
								<SVGExternalLink />
							</Style>
						</span>
					</p>
				</div>
			</a>
		)
	}

	return (
		<Style className="hidden sm:block">
			<div className="relative">

				<div className="flex flex-row justify-center">
					{/* <p className="font-bold text-xs leading-none text-purple-50"> */}
					<p className="font-bold tracking-wide leading-none text-purple-50 opacity-87.5" style={{ fontSize: `${11 / 16}rem` }}>
						SPONSORED BY &nbsp;
						&middot; &nbsp;
						<span className="inline-flex flex-row items-center align-top">
							BECOME A SPONSOR
							<EnSpace />
							<Style
								className="opacity-75"
								style={{
									width: "1em",
									height: "1em",
								}}
							>
								<SVGExternalLink />
							</Style>
						</span>
					</p>
				</div>

				{/* Row (sm-xl) */}
				<div className="-mx-4 -my-3 pt-8 hidden sm:flex sm:flex-row sm:justify-center sm:flex-wrap xl:hidden">
					<div className="mx-4 my-3">
						<Sponsor sponsor={sponsors[0]} />
					</div>
					<div className="mx-4 my-3">
						<Sponsor sponsor={sponsors[1]} />
					</div>
					<div className="mx-4 my-3">
						<Sponsor sponsor={sponsors[2]} />
					</div>
					<div className="mx-4 my-3">
						<Sponsor sponsor={sponsors[3]} />
					</div>
					<div className="mx-4 my-3">
						<Sponsor sponsor={sponsors[4]} />
					</div>
				</div>

				{/* Honeycomb (xl-only) */}
				<div className="-mx-4 -my-3 pt-8 hidden xl:flex xl:flex-col xl:items-center">
					<div className="flex flex-row">
						<div className="mx-4 my-3">
							<Sponsor sponsor={sponsors[0]} />
						</div>
						<div className="mx-4 my-3">
							<Sponsor sponsor={sponsors[1]} />
						</div>
						<div className="mx-4 my-3">
							<Sponsor sponsor={sponsors[2]} />
						</div>
					</div>
					<div className="flex flex-row">
						<div className="mx-4 my-3">
							<Sponsor sponsor={sponsors[3]} />
						</div>
						<div className="mx-4 my-3">
							<Sponsor sponsor={sponsors[4]} />
						</div>
					</div>
				</div>

			</div>
		</Style>
	)
}

function Hero() {
	return (
		<header
			className="px-6 sm:px-4 py-16 xl:py-24 xl:pb-56 relative"
			style={{ backgroundImage: "linear-gradient(to right, hsl(215, 100%, 50%), hsl(255, 100%, 65%)" }}
		>

			{/* #bg-grad */}
			<div className="hidden xl:block">
				<div className="absolute top-full inset-x-0">
					<svg fill="url(#bg-grad)" viewBox="0 0 32 1" xmlns="http://www.w3.org/2000/svg">
						<path d="M16 1C4 1 0 0 0 0H32C32 0 28 1 16 1Z" />
						<defs>
							<linearGradient id="bg-grad">
								<stop offset="0%" stopColor="hsl(215, 100%, 50%)" />
								<stop offset="100%" stopColor="hsl(255, 100%, 65%)" />
							</linearGradient>
						</defs>
					</svg>
				</div>
				<div className="fixed top-0 inset-x-0" style={{ zIndex: -1 }}>
					<Style className="w-full h-40">
						<svg preserveAspectRatio="none" fill="url(#bg-grad)" viewBox="0 0 1 1" xmlns="http://www.w3.org/2000/svg">
							<rect width={1} height={1} />
						</svg>
					</Style>
					<svg fill="url(#bg-grad)" viewBox="0 0 32 1" xmlns="http://www.w3.org/2000/svg">
						<path d="M16 1C4 1 0 0 0 0H32C32 0 28 1 16 1Z" />
					</svg>
				</div>
			</div>

			{/* TL */}
			<div className="p-4 absolute top-0 left-0">
				<div className="flex flex-row">
					<div className="w-5 h-5 bg-gray-200 bg-opacity-25 rounded-full" />
					<div className="w-3" />
					<div className="w-24 h-5 bg-gray-200 bg-opacity-25 rounded-full" />
				</div>
			</div>

			{/* TR */}
			<div className="p-4 absolute top-0 right-0">
				<div className="flex flex-row">
					<div className="w-24 h-5 bg-gray-200 bg-opacity-25 rounded-full" />
					<div className="w-3" />
					<div className="w-5 h-5 bg-gray-200 bg-opacity-25 rounded-full" />
				</div>
			</div>

			{/* Logo and Sponsors */}
			{/* */}
			{/* NOTE: justify-normal is not a real class. */}
			<div className="flex flex-row justify-center">
				<div
					className="flex flex-col xl:flex-row items-center justify-normal xl:justify-between"
					style={{
						width: "100%",
						maxWidth: px(1152),
					}}
				>

					{/* Logo */}
					<LogoAndCTA />

					{/* Sponsors */}
					<div className="h-0 sm:h-16 xl:h-0" />
					<Sponsors />

				</div>
			</div>

		</header>
	)
}

/* </Hero> */

/* <IconApp> */

function SearchBar() {
	return (
		<div className="relative h-20">

			{/* LHS */}
			<div className="absolute inset-y-0 left-0">
				<div className="px-6 flex flex-row h-full">
					<div className="px-2 flex flex-row items-center">
						<div className="w-8 h-8 rounded-full bg-gray-100" />
					</div>
				</div>
			</div>

			{/* Search */}
			<div className="px-16">
				{/* ... */}
			</div>

			{/* RHS */}
			<div className="absolute inset-y-0 right-0">
				<div className="px-6 flex flex-row h-full">

					{/* Select */}
					<div className="px-2 hidden sm:flex sm:flex-row sm:items-center">
						<div className="px-2 flex flex-row items-center w-40 h-10 rounded-full bg-gray-100">
							<div className="w-6 h-6 rounded-full bg-gray-200" />
						</div>
					</div>

					{/* Button */}
					<div className="px-2 flex flex-row items-center">
						<div className="w-8 h-8 rounded-full bg-gray-100" />
					</div>

					{/* Button */}
					<div className="px-2 flex flex-row items-center">
						<div className="w-8 h-8 rounded-full bg-gray-100" />
					</div>

				</div>
			</div>

		</div>
	)
}

function IconApp() {
	return (
		// NOTE (1): Use z-10 because of <Hero>.
		// NOTE (2): Use bg-gray-300 because of border-l border-gray-300.
		<div className="mt-0 xl:-mt-32 flex flex-row justify-center">
			<main className="bg-gray-300 w-full max-w-screen-xl rounded-6 z-10 shadow">

				{/* (top) */}
				<Style className="hidden xl:block">
					{/* NOTE: Use z-20 or more. */}
					<div className="-mx-1 -mt-4 sticky top-0 inset-x-0 pointer-events-none z-20">
						<div className="flex flex-row items-start">

							{/* LHS edge (because of -mx-1) */}
							<Style className="flex-shrink-0 w-1 h-10" style={{ fill: "hsl(215, 100%, 50%)" }}>
								<svg fill="currentColor" preserveAspectRatio="none" viewBox="0 0 1 1" xmlns="http://www.w3.org/2000/svg">
									<rect width={1} height={1} />
								</svg>
							</Style>

							{/* LHS */}
							<Style className="flex-shrink-0 h-10" style={{ fill: "hsl(215, 100%, 50%)" }}>
								<svg fill="currentColor" viewBox="0 0 24 40" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M24 0H0V40C0 26.7451 10.7451 16 24 16V0Z" />
								</svg>
							</Style>

							{/* Center */}
							<Style className="w-full h-4" style={{ fill: "url(#bg-grad)" }}>
								<svg fill="currentColor" preserveAspectRatio="none" viewBox="0 0 1 1" xmlns="http://www.w3.org/2000/svg">
									<rect width={1} height={1} />
								</svg>
							</Style>

							{/* RHS */}
							<Style className="flex-shrink-0 h-10" style={{ fill: "hsl(255, 100%, 65%)" }}>
								<svg fill="currentColor" viewBox="0 0 24 40" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M0 0H24V40C24 26.7451 13.2549 16 0 16V0Z" />
								</svg>
							</Style>

							{/* RHS edge (because of -mx-1) */}
							<Style className="flex-shrink-0 w-1 h-10" style={{ fill: "hsl(255, 100%, 65%)" }}>
								<svg fill="currentColor" preserveAspectRatio="none" viewBox="0 0 1 1" xmlns="http://www.w3.org/2000/svg">
									<rect width={1} height={1} />
								</svg>
							</Style>

						</div>
					</div>
				</Style>

				<div className="flex flex-row">

					{/* LHS */}
					<div className="w-full bg-white rounded-0 xl:rounded-l-6">

						{/* Search */}
						<div className="mt-0 xl:-mt-10 pt-0 xl:pt-4 sticky top-0 inset-x-0 z-10">
							<div className="bg-white border-b border-gray-300 rounded-tl-0 xl:rounded-tl-6">
								<SearchBar />
							</div>
						</div>

						{/* Icons */}
						{/* */}
						{/* px-6 sm:px-4 */}
						<div className="px-4 xl:px-16 py-8 pb-24">
							<style>
								{css`
									#grid {
										display: grid;
										grid-template-columns: repeat(auto-fill, minmax(7rem, 1fr));
										gap: 1rem;
									}
								`}
							</style>
							<div id="grid">
								{dataset.map(each => (
									<article key={each.name} className="pb-full relative bg-transparent hover:bg-gray-100 rounded-full transition duration-300 ease-out">
										<div className="absolute inset-0">
											<div className="flex flex-row justify-center items-center h-full">
												{/* <div className="w-8 h-8 bg-gray-400 rounded-full" /> */}
												<Style className="w-8 h-8 text-gray-800">
													<SVG svg={each.svgs.stroke} />
													{/* <svg fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> */}
													{/* 	<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" /> */}
													{/* 	<line x1={16} y1={8} x2={2} y2={22} /> */}
													{/* 	<line x1={17.5} y1={15} x2={9} y2={15} /> */}
													{/* </svg> */}
												</Style>
											</div>
										</div>
										<div className="py-2 absolute inset-x-0 bottom-0">
											<div className="flex flex-row justify-center">
												{/* <div className="w-16 h-3 bg-gray-400 bg-opacity-25 rounded-full" /> */}
												<Style className="subpixel-antialiased">
													<p
														className="text-center tracking-wide leading-tight text-gray-500"
														style={{
															fontSize: px(13),
															overflowX: "hidden",
															textOverflow: "ellipsis",
															whiteSpace: "nowrap",
														}}>
														{each.name}
													</p>
												</Style>
											</div>
										</div>
									</article>
								))}
							</div>
						</div>

					</div>

					{/* RHS */}
					<Style className="hidden lg:block">
						<div className="flex-shrink-0 w-80 bg-gray-50 border-l border-gray-300 rounded-r-0 xl:rounded-r-6">

							<div className="mt-0 xl:-mt-10 pt-0 xl:pt-4 sticky top-0 inset-x-0 z-10">
								<div className="h-80 bg-white rounded-tr-0 xl:rounded-tr-6">
									RHS
									{Array(10).fill(0).map((_, x) => (
										<br key={x} />
									))}
								</div>
								<hr className="border-t border-gray-300" />
								{Array(10).fill(0).map((_, x) => (
									<br key={x} />
								))}
							</div>

						</div>
					</Style>

				</div>

				{/* (bottom) */}
				{/* <Style className="hidden xl:block"> */}
				{/* 	<div className="-mt-6 -mb-4 sticky bottom-0 inset-x-0 pointer-events-none"> */}
				{/* 		<div className="flex flex-row items-end"> */}
				{/* 			<Style className="flex-shrink-0 h-10 text-cool-gray-200"> */}
				{/* 				<svg fill="currentColor" viewBox="0 0 24 40" xmlns="http://www.w3.org/2000/svg"> */}
				{/* 					<path fillRule="evenodd" clipRule="evenodd" d="M24 40H0L0 0C0 13.2549 10.7451 24 24 24L24 40Z" /> */}
				{/* 				</svg> */}
				{/* 			</Style> */}
				{/* 			<Style className="w-full h-4 text-cool-gray-200"> */}
				{/* 				<svg fill="currentColor" preserveAspectRatio="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"> */}
				{/* 					<rect width={16} height={16} /> */}
				{/* 				</svg> */}
				{/* 			</Style> */}
				{/* 			<Style className="flex-shrink-0 h-10 text-cool-gray-200"> */}
				{/* 				<svg fill="currentColor" viewBox="0 0 24 40" xmlns="http://www.w3.org/2000/svg"> */}
				{/* 					<path fillRule="evenodd" clipRule="evenodd" d="M0 40H24V0C24 13.2549 13.2549 24 0 24V40Z" /> */}
				{/* 				</svg> */}
				{/* 			</Style> */}
				{/* 		</div> */}
				{/* 	</div> */}
				{/* </Style> */}

			</main>
		</div>
	)
}

/* </IconApp> */

export default function Home() {
	return (
		<>
			<SEO />

			{/* Hero */}
			<Hero />

			{/* App */}
			<IconApp />
			<div className="h-0 xl:h-8" />

		</>
	)
}
