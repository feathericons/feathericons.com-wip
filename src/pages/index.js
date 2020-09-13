import SEO from "./_SEO"
import Style from "lib/x/Style"

// Converts px to rem units.
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
function css/* tpl */(arr, ...args) {
	return arr.map((each, x) => `${each}${args[x] || ""}`).join("")
}

function LogoAndCTA() {
	return (
		<div className="flex flex-col items-center">

			<div className="w-20 h-20 bg-gray-200 rounded-full" />

			<div className="h-6" />
			<div className="h-6 bg-gray-200 rounded-full" style={{ width: tw(112) }} />

			{/* <div className="hidden xl:block"> */}
			<div className="h-6" />
			<div className="flex flex-row">
				<div className="w-48 h-16 bg-gray-200 rounded-full" />
				<div className="w-4 h-4" />
				<div className="w-48 h-16 bg-gray-200 bg-opacity-50 rounded-full" />
			</div>
			{/* </div> */}

		</div>
	)
}

function SponsorHoneycomb() {
	return (
		<div className="flex flex-col items-center">

			<div className="flex flex-row">
				<div className="flex flex-col items-center">
					<div className="w-44 h-12 bg-gray-200 bg-opacity-50 rounded-full" />
					<div className="h-3" />
					<div className="w-32 h-3 bg-gray-200 bg-opacity-25 rounded-full" />
				</div>
				<div className="w-6" />
				<div className="flex flex-col items-center">
					<div className="w-44 h-12 bg-gray-200 bg-opacity-50 rounded-full" />
					<div className="h-3" />
					<div className="w-32 h-3 bg-gray-200 bg-opacity-25 rounded-full" />
				</div>
			</div>

			<div className="h-4" />
			<div className="flex flex-row">
				<div className="flex flex-col items-center">
					<div className="w-44 h-12 bg-gray-200 bg-opacity-50 rounded-full" />
					<div className="h-3" />
					<div className="w-32 h-3 bg-gray-200 bg-opacity-25 rounded-full" />
				</div>
				<div className="w-6" />
				<div className="flex flex-col items-center">
					<div className="w-44 h-12 bg-gray-200 bg-opacity-50 rounded-full" />
					<div className="h-3" />
					<div className="w-32 h-3 bg-gray-200 bg-opacity-25 rounded-full" />
				</div>
				<div className="w-6" />
				<div className="flex flex-col items-center">
					<div className="w-44 h-12 bg-gray-200 bg-opacity-50 rounded-full" />
					<div className="h-3" />
					<div className="w-32 h-3 bg-gray-200 bg-opacity-25 rounded-full" />
				</div>
			</div>

			<div className="h-4" />
			<div className="flex flex-row">
				<div className="flex flex-col items-center">
					<div className="w-44 h-12 bg-gray-200 bg-opacity-50 rounded-full" />
					<div className="h-3" />
					<div className="w-32 h-3 bg-gray-200 bg-opacity-25 rounded-full" />
				</div>
				<div className="w-6" />
				<div className="flex flex-col items-center">
					<div className="w-44 h-12 bg-gray-200 bg-opacity-50 rounded-full" />
					<div className="h-3" />
					<div className="w-32 h-3 bg-gray-200 bg-opacity-25 rounded-full" />
				</div>
			</div>

		</div>
	)
}

function Hero() {
	return (
		<header
			className="px-6 sm:px-4 py-24 xl:pb-48 flex flex-row justify-center"
			style={{ backgroundImage: "linear-gradient(to right, hsl(215, 100%, 50%), hsl(255, 100%, 65%)" }}
		>

			{/* TL */}
			<div className="px-8 py-6 absolute top-0 left-0">
				<div className="w-24 h-5 bg-gray-200 bg-opacity-25 rounded-full" />
			</div>

			{/* TR */}
			<div className="px-8 py-6 absolute top-0 right-0">
				<div className="w-24 h-5 bg-gray-200 bg-opacity-25 rounded-full" />
			</div>

			{/* Logo and Sponsors */}
			{/* */}
			{/* NOTE: justify-normal is not a real class. */}
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
				<div className="hidden sm:block">
					<div className="h-16 xl:h-0" />
					<SponsorHoneycomb />
				</div>

			</div>

		</header>
	)
}

function IconApp() {
	return (
		<div className="-mt-32 px-6 sm:px-4 flex flex-row justify-center">
			<main
				className="bg-white border border-gray-300 shadow-lg"
				style={{
					width: "100%",
					maxWidth: px(1280 + 64),
					borderRadius: px(24),
				}}
			>
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

export default function Home() {
	return (
		<>
			<SEO />

			{/* Hero */}
			<Hero />

			{/* Rounded SVG */}
			<div className="hidden xl:block">
				<Style className="w-screen h-auto">
					<svg fill="url(#bg-grad)" viewBox="0 0 32 1" xmlns="http://www.w3.org/2000/svg">
						<path d="M16 1C4 1 0 0 0 0H32C32 0 28 1 16 1Z" />
						<defs>
							<linearGradient id="bg-grad">
								<stop offset="0%" stopColor="hsl(215, 100%, 50%)" />
								<stop offset="100%" stopColor="hsl(255, 100%, 65%)" />
							</linearGradient>
						</defs>
					</svg>
				</Style>
			</div>

			{/* App */}
			<IconApp />

			<br />
			<br />
			<br />
			<br />

		</>
	)
}
