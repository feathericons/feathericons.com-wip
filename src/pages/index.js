import SEO from "./_SEO"
import Style from "lib/x/Style"

/**********/

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

	function MockSponsor() {
		return (
			<div className="flex flex-col items-center">
				<div className="w-40 h-12 bg-gray-200 bg-opacity-50 rounded-full" />
				<div className="h-3" />
				<div className="w-24 h-3 bg-gray-200 bg-opacity-25 rounded-full" />
			</div>
		)
	}

	return (
		<>

			{/* Row (sm-xl) */}
			<div className="-m-3 hidden sm:flex sm:flex-row sm:justify-center sm:flex-wrap xl:hidden">
				<div className="m-3">
					<MockSponsor />
				</div>
				<div className="m-3">
					<MockSponsor />
				</div>
				<div className="m-3">
					<MockSponsor />
				</div>
				<div className="m-3">
					<MockSponsor />
				</div>
				<div className="m-3">
					<MockSponsor />
				</div>
				<div className="m-3">
					<MockSponsor />
				</div>
			</div>

			{/* Honeycomb (xl-only) */}
			<div className="hidden xl:flex xl:flex-col xl:items-center">
				<div className="flex flex-row">
					<MockSponsor />
					<div className="w-6" />
					<MockSponsor />
				</div>
				<div className="h-4" />
				<div className="flex flex-row">
					<MockSponsor />
					<div className="w-6" />
					<MockSponsor />
					<div className="w-6" />
					<MockSponsor />
				</div>
				<div className="h-4" />
				<div className="flex flex-row">
					<MockSponsor />
					<div className="w-6" />
					<MockSponsor />
				</div>
			</div>

		</>
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

					{/* Button */}
					<div className="px-2 hidden sm:flex sm:flex-row sm:items-center">
						<div className="px-2 flex flex-row items-center w-48 h-12 rounded-full bg-gray-100">
							<div className="w-8 h-8 rounded-full bg-gray-200" />
						</div>
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
		// NOTE: Use relative because of #bg-grad.
		<div className="mt-0 xl:-mt-40 relative flex flex-row justify-center">
			{/* NOTE: Use items-start because of sticky top-0. */}
			<main className="w-full max-w-screen-xl">

				<div className="mt-0 xl:-mt-4 pt-0 xl:pt-4 sticky top-0 inset-x-0 w-full">

					{/* #bg-grad */}
					<div className="absolute top-0 inset-x-0 pointer-events-none" style={{ zIndex: -1 }}>
						<Style className="w-full h-10">
							<svg preserveAspectRatio="none" fill="url(#bg-grad)" viewBox="0 0 1 1" xmlns="http://www.w3.org/2000/svg">
								<rect width={1} height={1} />
							</svg>
						</Style>
					</div>
					<div className="h-6 bg-white rounded-t-0 xl:rounded-t-6">
						{/* ... */}
					</div>
				</div>

				<div className="w-full h-20 bg-red-100">
					hello
				</div>


				{/* NOTE: Use items-start because of sticky top-0. */}
				{/* <div className="flex flex-row items-start"> */}
				{/* 	<div className="w-full h-20 bg-red-100" /> */}
				{/* 	<div className="w-80 h-80 bg-red-100" /> */}
				{/* </div> */}



				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />

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

			{/* <div className="hidden xl:block"> */}
			{/* 	<br /> */}
			{/* 	<br /> */}
			{/* 	<br /> */}
			{/* 	<br /> */}
			{/* </div> */}

			{Array(4).fill(0).map((_, x) => (
				<br key={x} />
			))}

		</>
	)
}
