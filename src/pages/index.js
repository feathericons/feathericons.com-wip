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

function Header() {
	return (
		<header className="flex flex-row justify-center items-center bg-gray-100" style={{ minHeight: 512 }}>

			{/* TL */}
			<div className="px-8 py-6 absolute top-0 left-0">
				<div className="w-24 h-6 bg-gray-200 rounded-full" />
			</div>

			{/* TR */}
			<div className="px-8 py-6 absolute top-0 right-0">
				<div className="w-24 h-6 bg-gray-200 rounded-full" />
			</div>

			{/* Logo and Sponsors */}
			<div className="flex flex-row justify-between items-center w-full max-w-screen-lg">

				{/* Logo */}
				<div className="w-20 h-20 bg-gray-200 rounded-full" />

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
