import SEO from "./_SEO"

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
			className="px-6 sm:px-4 py-24 flex flex-row justify-center items-center bg-gray-100"
			style={{
				// minHeight: px(480),
				backgroundImage: "linear-gradient(to right, hsl(215, 100%, 50%), hsl(255, 100%, 65%)",
			}}
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
				<div className="h-16 xl:h-0" />
				<SponsorHoneycomb />

			</div>

		</header>
	)
}

export default function Home() {
	return (
		<>
			<SEO />
			<Header />
		</>
	)
}
