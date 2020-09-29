import asyncDownlodAll from "utils/asyncDownloadAll"
import css from "lib/x/tpl"
import dataset from "data/dataset"
import px from "lib/x/px"
import SEO from "./_SEO"
import sponsors from "data/sponsors"
import Style from "lib/x/Style"
import SVG from "lib/x/SVG"
import target_blank from "lib/x/target_blank"

import {
	Download as SVGDownload,
	ExternalLink as SVGExternalLink,
	Feather as SVGFeather,
	GitHub as SVGGitHub,
	Heart as SVGHeart,
	Star as SVGStar,
	Tool as SVGTool,
	Twitter as SVGTwitter,
} from "react-feather"

/* </Hero> */

function LogoAndCTA() {
	return (
		// NOTE: Use w-full sm:w-auto because of CTA buttons.
		<div className="flex flex-col items-center" style={{ width: "100%", maxWidth: "32rem" }}>

			{/* Logo */}
			<Style className="-mt-12 w-14 h-14 text-white">
				<svg fill="currentColor" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd" clipRule="evenodd" d="M21.5308 13.5393L21.5329 13.5372C22.4712 12.5992 22.9983 11.327 22.9983 10.0004C22.9983 8.67391 22.4712 7.4017 21.5329 6.46369C21.4156 6.34644 21.2931 6.23561 21.1659 6.13143C20.2756 5.40218 19.1561 4.99872 17.995 4.99872C16.668 4.99872 15.3954 5.52568 14.4571 6.46369L8 12.9187L8 18.5885L17.2921 9.2994L17.2929 9.29857C17.6834 8.90817 18.3166 8.90817 18.7071 9.29857C19.0976 9.68897 19.0976 10.3219 18.7071 10.7123M18.7071 10.7123L13.4142 16.0035H19.0731L21.5308 13.5393M11.4142 18.0029L9.41421 20.0022H15.0849L17.079 18.0029H11.4142ZM7.41421 22.0016L4.70776 24.7072C4.31724 25.0976 3.68342 25.0982 3.29289 24.7078C2.90237 24.3174 2.90237 23.6845 3.29289 23.2941L3.29382 23.2932L6 20.5878L6 12.5046C6 12.2395 6.10536 11.9852 6.29289 11.7978L6.58523 11.5055L13.0429 5.04993C14.3563 3.73697 16.1376 2.99936 17.995 2.99936C19.8524 2.99936 21.6337 3.73697 22.9471 5.04993C23.1113 5.21405 23.2665 5.38548 23.4123 5.56345C24.4334 6.80927 24.9983 8.37575 24.9983 10.0004C24.9983 11.8567 24.2609 13.6369 22.9483 14.9497L22.9471 14.951L20.2937 17.6114C20.2409 17.6802 20.1794 17.7419 20.1107 17.7949L18.4957 19.4141L16.2082 21.7078C16.0205 21.8959 15.7657 22.0016 15.5 22.0016H7.41421ZM21.4601 19.2736L17.6245 23.1194C17.0616 23.6838 16.2972 24.001 15.5 24.001H8.24264L6.12132 26.1216C4.94975 27.2928 3.05025 27.2928 1.87868 26.1216C0.707109 24.9504 0.707106 23.0515 1.87868 21.8803L4 19.7597V12.5046C4 11.7093 4.31607 10.9464 4.87868 10.384L11.6287 3.63617C13.3171 1.94826 15.6072 1 17.995 1C20.3828 1 22.6729 1.94826 24.3613 3.63617C26.0498 5.32408 26.9983 7.61338 26.9983 10.0004C26.9983 12.3869 26.0502 14.6757 24.3625 16.3635L24.3613 16.3647L21.7769 18.956C21.6794 19.0696 21.5735 19.1758 21.4601 19.2736Z" />
				</svg>
			</Style>

			{/* <h1> */}
			<div className="h-8" />
			<h1 className="font-medium leading-none font-display text-white" style={{ fontSize: `${36 / 16}rem` }}>
				Open source icons
			</h1>

			<div className="h-2" />
			<h2 className="text-center font-medium text-white" style={{ fontSize: `${18 / 16}rem` }}>
				Created by{" "}
				<a
					href="https://twitter.com/colebemis"
					data-splitbee-event="Click Author Link"
					data-splitbee-event-type="Cole Bemis"
					{...target_blank}
				>
					<span className="font-bold no-underline hover:underline">
						@colebemis
					</span>
				</a>
				{" "}and{" "}
				<a
					href="https://twitter.com/username_ZAYDEK"
					data-splitbee-event="Click Author Link"
					data-splitbee-event-type="Zaydek Michels-Gualtieri"
					{...target_blank}
				>
					<span className="font-bold no-underline hover:underline">
						@username_ZAYDEK
					</span>
				</a>
			</h2>

			{/* CTA buttons */}
			<div className="h-6" />
			<div className="flex flex-col sm:flex-row w-full sm:w-auto">

				{/* Button */}
				<a
					// TODO: Add tacked event.
					href={"https://github.com/feathericons/feather#feather"}
					{...target_blank}
				>
					<div className="flex flex-row justify-center items-center w-auto sm:w-48 h-14 bg-white bg-opacity-95 rounded-3 sm:rounded-full">
						<p className="font-medium leading-none text-gray-800" style={{ fontSize: `${18 / 16}rem` }}>
							<span className="inline-flex flex-row items-center align-top">
								<SVGGitHub
									style={{ width: `${20 / 16}rem`, height: `${20 / 16}rem` }}
									strokeWidth={2.25}
								/>
								<span>
									&nbsp;&nbsp;Read docs
								</span>
							</span>
						</p>
					</div>
				</a>

				{/* Button */}
				<div className="w-4 h-4" />
				<button
					// TODO: Add tacked event.
					onClick={async () => {
						await asyncDownlodAll()
					}}
				>
					<div className="flex flex-row justify-center items-center w-auto sm:w-48 h-14 bg-white bg-opacity-20 rounded-3 sm:rounded-full">
						<p className="font-medium leading-none text-white" style={{ fontSize: `${18 / 16}rem` }}>
							<span className="inline-flex flex-row items-center align-top">
								<SVGDownload
									style={{ width: `${20 / 16}rem`, height: `${20 / 16}rem` }}
									strokeWidth={2.25}
								/>
								<span>
									&nbsp;&nbsp;Download
								</span>
							</span>
						</p>
					</div>
				</button>

			</div>
		</div>
	)
}

function Sponsors() {

	function Sponsor({ sponsor }) {
		return (
			<a
				key={sponsor.href}
				href={sponsor.href + "?ref=feathericons.com"}
				data-splitbee-event="Click Sponsor Link"
				data-splitbee-event-type={sponsor.name}
				{...target_blank}
			>
				<div className="group flex flex-col items-center">
					<img className="h-12" src={sponsor.src} alt={sponsor.name} />
					<div className="h-2" />
					<p className="font-medium text-xs leading-none text-white">
						<span className="inline flex flex-row items-center align-top">
							<span>
								<span className="no-underline group-hover:underline">
									{sponsor.tagline}
								</span>
								&nbsp;&nbsp;
							</span>
							<SVGExternalLink style={{ width: "0.875em", height: "0.875em" }} />
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
					<p className="font-bold tracking-wide leading-none text-white" style={{ fontSize: `${11 / 16}rem` }}>
						<span className="inline-flex flex-row items-center align-top">
							<span>
								CHECK OUT OUR SPONSORS! &nbsp;&middot; &nbsp;
							</span>
							<a href="TODO" {...target_blank}>
								<span className="group inline-flex flex-row items-center align-top">
									<span>
										<span className="no-underline group-hover:underline">
											BECOME A SPONSOR
										</span>
										&nbsp;&nbsp;
									</span>
									<SVGExternalLink style={{ width: "1em", height: "1em" }} />
								</span>
							</a>
						</span>
					</p>
				</div>

				{/* Row (sm-xl) */}
				<div className="-m-3 pt-8 hidden sm:flex sm:flex-row sm:justify-center sm:flex-wrap xl:hidden">
					<div className="m-3">
						<Sponsor sponsor={sponsors[0]} />
					</div>
					<div className="m-3">
						<Sponsor sponsor={sponsors[1]} />
					</div>
					<div className="m-3">
						<Sponsor sponsor={sponsors[2]} />
					</div>
					<div className="m-3">
						<Sponsor sponsor={sponsors[3]} />
					</div>
					<div className="m-3">
						<Sponsor sponsor={sponsors[4]} />
					</div>
				</div>

				{/* Honeycomb (xl-only) */}
				<div className="-m-3 pt-8 hidden xl:flex xl:flex-col xl:items-center">
					<div className="flex flex-row">
						<div className="m-3">
							<Sponsor sponsor={sponsors[0]} />
						</div>
						<div className="m-3">
							<Sponsor sponsor={sponsors[1]} />
						</div>
						<div className="m-3">
							<Sponsor sponsor={sponsors[2]} />
						</div>
					</div>
					<div className="flex flex-row">
						<div className="m-3">
							<Sponsor sponsor={sponsors[3]} />
						</div>
						<div className="m-3">
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
			className="px-6 sm:px-4 pt-32 pb-16 xl:pb-56 relative"
			style={{ backgroundImage: "linear-gradient(to right, var(--grad-start), var(--grad-end)" }}
		>

			{/* #bg-grad */}
			<div className="hidden xl:block">
				<div className="absolute top-full inset-x-0">
					<svg fill="url(#bg-grad)" viewBox="0 0 32 1" xmlns="http://www.w3.org/2000/svg">
						<defs>
							<linearGradient id="bg-grad">
								<stop offset="0%" stopColor="var(--grad-start)" />
								<stop offset="100%" stopColor="var(--grad-end)" />
							</linearGradient>
						</defs>
						<path d="M16 1C4 1 0 0 0 0H32C32 0 28 1 16 1Z" />
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

			{/* (top-left) */}
			<div className="px-4 py-3 absolute top-0 left-0">
				<a
					href={`https://twitter.com/intent/tweet?text=${encodeURI("Check out Feathericons! ✨\n\nMany thanks to @colebemis for Feather Icons and @username_ZAYDEK for feathericons.com. ❤️")}`}
					data-splitbee-event="Click Share Link"
					data-splitbee-event-type="Twitter"
					{...target_blank}
				>
					<p className="group font-medium text-white" style={{ fontSize: `${17 / 16}rem` }}>
						<span className="inline-flex flex-row items-center align-top">
							<SVGTwitter
								style={{ width: "1.25em", height: "1.25em" }}
								fill="currentColor"
								strokeWidth={0}
							/>
							<span>
								&nbsp;&nbsp;
								<span className="no-underline group-hover:underline">
									Tweet thank you!
								</span>
							</span>
						</span>
					</p>
				</a>
			</div>

			{/* (top-right) */}
			<div className="px-4 py-3 absolute top-0 right-0">
				<a
					href={`https://twitter.com/intent/tweet?text=${encodeURI("Check out Feathericons! ✨\n\nMany thanks to @colebemis for Feather Icons and @username_ZAYDEK for feathericons.com. ❤️")}`}
					data-splitbee-event="Click Share Link"
					data-splitbee-event-type="Twitter"
					{...target_blank}
				>
					<p className="font-medium text-white" style={{ fontSize: `${17 / 16}rem` }}>
						<a
							href="https://github.com/feathericons/feather/blob/master/LICENSE"
							// TODO
							{...target_blank}
						>
							<span className="no-underline hover:underline">
								MIT-license
							</span>
						</a>
						&nbsp;&nbsp;&middot;&nbsp;&nbsp;
						<a
							href="https://github.com/feathericons/feather/releases"
							// TODO
							{...target_blank}
						>
							<span className="no-underline hover:underline">
								v4.28
							</span>
						</a>
					</p>
				</a>
			</div>

			{/* Logo and Sponsors */}
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
			<main className="bg-gray-300 w-full max-w-screen-xl rounded-6 shadow z-10" /* style={{ boxShadow: "var(--shadow-xs), var(--shadow)" }} */>

				{/* (top) */}
				<Style className="hidden xl:block">
					{/* NOTE: Use z-20 or more. */}
					<div className="-mx-1 -mt-4 sticky top-0 inset-x-0 pointer-events-none z-20">
						<div className="flex flex-row items-start">

							{/* LHS edge (because of -mx-1) */}
							<Style className="flex-shrink-0 w-1 h-10" style={{ fill: "var(--grad-start)" }}>
								<svg fill="currentColor" preserveAspectRatio="none" viewBox="0 0 1 1" xmlns="http://www.w3.org/2000/svg">
									<rect width={1} height={1} />
								</svg>
							</Style>

							{/* LHS */}
							<Style className="flex-shrink-0 h-10" style={{ fill: "var(--grad-start)" }}>
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
							<Style className="flex-shrink-0 h-10" style={{ fill: "var(--grad-end)" }}>
								<svg fill="currentColor" viewBox="0 0 24 40" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M0 0H24V40C24 26.7451 13.2549 16 0 16V0Z" />
								</svg>
							</Style>

							{/* RHS edge (because of -mx-1) */}
							<Style className="flex-shrink-0 w-1 h-10" style={{ fill: "var(--grad-end)" }}>
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

										/* TODO: Move gap to <article> as padding. */
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

			<style>
				{css`
					html {
						--theme: hsl(215, 100%, 50%);
						--grad-start: var(--theme);
						/* --grad-end: hsl(216, 100%, 56.25%); */
						--grad-end: var(--theme);
					}

					.text-theme {
						color: var(--theme);
					}
					.bg-theme {
						background-color: var(--theme);
					}
				`}
			</style>

			{/* Hero */}
			<Hero />

			{/* App */}
			<IconApp />
			<div className="h-0 xl:h-8" />

		</>
	)
}
