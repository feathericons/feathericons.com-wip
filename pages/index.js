import Link from "next/Link"

// const tw = tw => `${tw * 4}rem`

const Home = () => (
	<div className="px-4 py-16 flex flex-row justify-center">
		<div className="flex flex-row justify-between w-full max-w-screen-xl">

			{/* LHS */}
			<div>
				<h1 className="font-bold text-5xl">
					Feathericons
				</h1>

				<div className="h-4" />
				<h2 className="font-medium text-xl">
					feathericons MIT-Licensed Icons by{" "}
					<a className="underline" style={{ textDecorationColor: "var(--blue-500)" }} href="https://twitter.com/colebemis">
						Cole Bemis
					</a>
				</h2>
				<h2 className="font-medium text-xl">
					feathericons.dev by{" "}
					<a className="underline" style={{ textDecorationColor: "var(--blue-500)" }} href="https://twitter.com/username_ZAYDEK">
						Zaydek MG
					</a>
				</h2>
			</div>

			{/* RHS */}
			<div className="">
				RHS
			</div>

		</div>
	</div>
)

export default Home
