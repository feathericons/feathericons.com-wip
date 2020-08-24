import Link from "next/Link"

// const tw = tw => `${tw * 4}rem`

const Home = () => (
	<div className="px-4 py-16 flex flex-row justify-center">
		<div className="flex flex-row justify-between w-full max-w-screen-xl">

			{/* LHS */}
			<div>

				{/* H1 */}
				<h1 className="font-bold text-5xl">
					Feathericons
				</h1>

				{/* H2 */}
				<div className="h-4" />
				<h2 className="font-medium text-lg">
					feathericons MIT-Licensed Icons by{" "}
					<a
						// className="underline"
						// style={{ textDecorationColor: "var(--blue-500)" }}
						href="https://twitter.com/colebemis"
					>
						Cole Bemis
					</a>
				</h2>
				<h2 className="font-medium text-lg">
					feathericons.dev by{" "}
					<a
						// className="underline"
						// style={{ textDecorationColor: "var(--blue-500)" }}
						href="https://twitter.com/username_ZAYDEK"
					>
						Zaydek MG
					</a>
				</h2>

				{/* CTA */}
				<div className="h-8" />
				<div className="-mx-4">
					<div className="-mx-2 flex flex-row">

						<div className="mx-2 my-1 w-44 h-12 bg-gray-100 rounded-full" />
						<div className="mx-2 my-1 w-44 h-12 bg-gray-100 rounded-full" />

					</div>
				</div>

			</div>

			{/* RHS */}
			<div className="w-full max-w-lg">

				<h6 className="text-center font-bold text-xs tracking-wider text-blue-500">
					OUR SPONSORS
				</h6>

				{/* Sponsors */}
				<div className="h-4" />
				<div className="flex flex-row justify-center flex-wrap">
					<div className="mx-2 my-1 w-44 h-12 bg-gray-100 rounded-full" />
					<div className="mx-2 my-1 w-44 h-12 bg-gray-100 rounded-full" />
					<div className="mx-2 my-1 w-36 h-12 bg-gray-100 rounded-full" />
					<div className="mx-2 my-1 w-36 h-12 bg-gray-100 rounded-full" />
					<div className="mx-2 my-1 w-36 h-12 bg-gray-100 rounded-full" />
					<div className="mx-2 my-1 w-44 h-12 bg-gray-100 rounded-full" />
					<div className="mx-2 my-1 w-44 h-12 bg-gray-100 rounded-full" />
				</div>

				<div className="h-4" />
				<h6 className="text-center font-bold text-xs tracking-wider text-blue-500">
					BECOME A SPONSOR
				</h6>

			</div>

		</div>
	</div>
)

export default Home
