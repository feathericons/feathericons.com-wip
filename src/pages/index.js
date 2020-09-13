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

function LogoArea() {
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

function Header() {
	return (
		<header
			className="flex flex-row justify-center items-center bg-gray-100"
			style={{
				minHeight: 512,
				backgroundImage: "linear-gradient(to right, hsl(215, 100%, 50%), hsl(255, 100%, 65%)",
			}}
		>

			{/* Absolute TL */}
			<div className="px-8 py-6 absolute top-0 left-0">
				<div className="w-24 h-6 bg-gray-200 rounded-full" />
			</div>

			{/* Absolute TR */}
			<div className="px-8 py-6 absolute top-0 right-0">
				<div className="w-24 h-6 bg-gray-200 rounded-full" />
			</div>

			{/* Logo and Sponsors */}
			<div className="px-6 sm:px-4 flex flex-row justify-between items-center w-full max-w-screen-xl">

				{/* Logo */}
				<LogoArea />

				{/* Sponsors */}
				<div className="w-20 h-20 bg-gray-200 rounded-full" />

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
