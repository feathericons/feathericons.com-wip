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

			<div className="h-6" />
			<div className="flex flex-row">
				<div className="w-48 h-16 bg-gray-200 rounded-full" />
				<div className="w-3 h-3" />
				<div className="w-48 h-16 bg-gray-200 bg-opacity-50 rounded-full" />
			</div>
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

function Header() {
	return (
		<header
			className="px-6 sm:px-4 py-24 flex flex-row justify-center"
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
				<div className="pt-16 xl:pt-0 hidden sm:block">
					<SponsorHoneycomb />
				</div>

			</div>

		</header>
	)
}

export default function Home() {
	return (
		<>
			<SEO />

			{/* https://yoksel.github.io/url-encoder */}
			{/* <style> */}
			{/* 	{css` */}
			{/* 		@media (min-width: 1152px) { */}
			{/* 			html { */}
			{/* 				background-attachment: */}
			{/* 					fixed, */}
			{/* 					fixed; */}
			{/* 				background-image: */}
			{/* 					url("data:image/svg+xml,%3Csvg fill='url(%23bg-grad)' viewBox='0 0 1 1' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='1' height='1' /%3E%3Cdefs%3E%3ClinearGradient id='bg-grad'%3E%3Cstop offset='0%25' stop-color='hsl(215, 100%25, 50%25)' /%3E%3Cstop offset='100%25' stop-color='hsl(255, 100%25, 65%25)' /%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E"), */}
			{/* 					url("data:image/svg+xml,%3Csvg fill='url(%23bg-grad)' viewBox='0 0 32 1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 1C4 1 0 0 0 0H32C32 0 28 1 16 1Z' /%3E%3Cdefs%3E%3ClinearGradient id='bg-grad'%3E%3Cstop offset='0%25' stop-color='hsl(215, 100%25, 50%25)' /%3E%3Cstop offset='100%25' stop-color='hsl(255, 100%25, 65%25)' /%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E"); */}
			{/* 				background-repeat: */}
			{/* 					repeat-x, */}
			{/* 					no-repeat; */}
			{/* 				background-size: */}
			{/* 					544px, */}
			{/* 					100%; */}
			{/* 				background-position: */}
			{/* 					0 0, */}
			{/* 					0 544px; */}
			{/* 			} */}
			{/* 		} */}
			{/* 	`} */}
			{/* </style> */}

			<Header />

			<div className="hidden xl:block">
				<Style className="w-screen h-auto">
					<svg fill="url(#bg-grad)" viewBox="0 0 32 1" xmlns="http://www.w3.org/2000/svg">
						<path d="M16 1C4 1 0 0 0 0H32C32 0 28 1 16 1Z" />
						<defs>
							<linearGradient id="bg-grad">
								<stop offset="0%" stop-color="hsl(215, 100%, 50%)" />
								<stop offset="100%" stop-color="hsl(255, 100%, 65%)" />
							</linearGradient>
						</defs>
					</svg>
				</Style>
			</div>

		</>
	)
}
