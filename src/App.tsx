import React, { useEffect } from "react"
import { DocumentTitle, range } from "./lib"
import { Duomo } from "@zaydek/duomo/dist/runtime"
import { Route, Switch } from "react-router-dom"

const appRounded = 32

function TopRow() {
	return (
		<div className="hstack space-16 px-16 sm:px-24">
			<div className="hstack space-8">
				<div className="w-12 h-12 bg-gray-300 rounded-full"></div>
				<div className="w-96 h-8 bg-gray-300 rounded-full"></div>
			</div>
			<div className="spacer"></div>
			{range(2).map(each => (
				<div key={each} className="hstack space-8">
					<div className="w-96 h-8 bg-gray-300 rounded-full"></div>
					<div className="w-12 h-12 bg-gray-300 rounded-full"></div>
				</div>
			))}
		</div>
	)
}

function Header() {
	function Sponsor() {
		return (
			<div className="vstack space-8">
				<div className="hstack w-192 h-48 bg-gray-200 rounded-full">
					<div className="w-96 h-8 bg-gray-300 rounded-full"></div>
				</div>
				<div className="hstack space-8">
					<div className="w-12 h-12 bg-gray-300 rounded-full"></div>
					<div className="w-96 h-8 bg-gray-300 rounded-full"></div>
				</div>
			</div>
		)
	}

	return (
		<div className="hstack px-16 sm:px-24">
			<div className="vstack xl:hstack space-32 py-96 w-full" style={{ maxWidth: 1088 }}>
				{/* LHS */}
				<div className="vstack space-24">
					{/* Logo */}
					<div className="w-64 h-64 bg-gray-200 rounded-full"></div>
					<div className="mt-32 w-192 h-24 bg-gray-200 rounded-full"></div>
					<div className="mt-16 w-320 h-8 bg-gray-200 rounded-full"></div>
					{/* CTA buttons */}
					<div className="vstack md:hstack space-16">
						{range(2).map(each => (
							<div
								key={each}
								className="hstack w-full md:w-192 h-48 bg-gray-200 rounded-16 md:rounded-full"
								style={{ maxWidth: 512 }}
							>
								<div className="hstack space-8">
									<div className="w-12 h-12 bg-gray-300 rounded-full"></div>
									<div className="w-96 h-8 bg-gray-300 rounded-full"></div>
								</div>
							</div>
						))}
					</div>
				</div>
				{/* RHS */}
				<div className="hidden md:unhidden spacer"></div>
				<div className="hidden md:unhidden vstack align-self-end space-24">
					{/* Sponsor text */}
					<div className="hstack space-16">
						<div className="hstack space-8">
							<div className="w-96 h-8 bg-gray-300 rounded-full"></div>
							<div className="w-12 h-12 bg-gray-300 rounded-full"></div>
						</div>
						<div className="hstack space-8">
							<div className="w-96 h-8 bg-gray-300 rounded-full"></div>
							<div className="w-12 h-12 bg-gray-300 rounded-full"></div>
						</div>
					</div>
					{/* Sponsors / Honeycomb pattern */}
					<div className="hidden xl:unhidden hstack space-24">
						{range(3).map(each => (
							<Sponsor key={each} />
						))}
					</div>
					<div className="hidden xl:unhidden hstack space-24">
						{range(2).map(each => (
							<Sponsor key={each} />
						))}
					</div>
					{/* Sponsors / Wrap pattern */}
					<div className="unhidden xl:hidden">
						<div className="-m-12 hstack" style={{ flexWrap: "wrap" }}>
							{range(5).map(each => (
								<div key={each} className="m-12">
									<Sponsor />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

function AppLHS() {
	return (
		<div className="spacer">
			<div className="sticky top-0 z-10">
				<div className={`hstack space-16 p-24 h-80 md:h-96 bg-white border-b-1 xl:rounded-tl-${appRounded}`}>
					<div className="w-24 h-24 bg-gray-200 rounded-full"></div>
					<div className="w-160 h-8 bg-gray-200 rounded-full"></div>
					<div className="spacer"></div>
					<div className="w-24 h-24 bg-gray-200 rounded-full"></div>
				</div>
			</div>
			<div
				className="grid !grid-cols-6 gap-16 px-16 sm:px-24 xl:px-64 py-64"
				style={{ gridTemplateColumns: "repeat(auto-fill, minmax(128px, 1fr))" }}
			>
				{range(200).map(each => (
					<div key={each} className="relative" style={{ paddingBottom: "100%" }}>
						<div className="absolute inset-0">
							<div className="zstack h-full">
								<div className="w-48 h-48 bg-gray-200 rounded-full"></div>
								<div className="absolute bottom-0 inset-x-0 py-8">
									<div className="hstack space-8">
										<div className="w-96 h-8 bg-gray-300 rounded-full"></div>
										<div className="w-12 h-12 bg-gray-300 rounded-full"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

function AppRHS() {
	return (
		// NOTE: Use `align-self-stretch` because of `w-320`.
		<div className={`hidden md:unhidden align-self-stretch w-320 bg-gray-50 border-l-1 xl:rounded-r-${appRounded}`}>
			<div className="sticky top-0">
				<div className="vstack align-stretch">
					{/* Preview */}
					{/* NOTE: Use `align-self-stretch` because of `h-320`. */}
					<div className={`zstack align-self-stretch h-320 bg-white border-b-1 xl:rounded-tr-${appRounded}`}>
						<div className="w-64 h-64 bg-gray-200 rounded-full"></div>
						{/* Top */}
						<div className="absolute top-0 inset-x-0 p-24">
							<div className="hstack space-24">
								{/* <div className="w-96 h-8 bg-gray-200 rounded-full"></div> */}
								<div className="spacer"></div>
								<div className="w-24 h-24 bg-gray-200 rounded-full"></div>
							</div>
						</div>
						{/* Bottom */}
						<div className="absolute bottom-0 inset-x-0 p-24">
							<div className="hstack space-24">
								<div className="spacer h-8 bg-gray-200 rounded-full">
									<div></div>
								</div>
								<div className="w-64 h-24 bg-gray-200 rounded-full"></div>
							</div>
						</div>
					</div>
					{/* Sliders */}
					<div className="overflow-y-scroll">
						{range(2).map(each => (
							<div key={each} className="vstack space-16 p-24 border-b-1">
								{/* Top */}
								<div className="hstack space-24">
									<div className="w-96 h-8 bg-gray-200 rounded-full"></div>
									<div className="spacer"></div>
									<div className="w-24 h-24 bg-gray-200 rounded-full"></div>
								</div>
								{/* Bottom */}
								<div className="hstack space-24">
									<div className="spacer h-8 bg-gray-200 rounded-full">
										<div></div>
									</div>
									<div className="w-64 h-24 bg-gray-200 rounded-full"></div>
								</div>
							</div>
						))}
					</div>
					{/* Ad / Sponsor */}
					<div className="hstack space-16 p-24 border-b-1">
						<div className="w-128 h-96 bg-gray-200 rounded-4"></div>
						<div className="spacer vstack align-self-start align-start space-8 py-4">
							<div className="h-6 bg-gray-200 rounded-full" data-stagger-1></div>
							<div className="h-6 bg-gray-200 rounded-full" data-stagger-2></div>
							<div className="h-6 bg-gray-200 rounded-full" data-stagger-3></div>
							<div className="h-6 bg-gray-200 rounded-full" data-stagger-4></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

function App() {
	return (
		<div className="hstack">
			<div className={`hstack w-full max-w-xl bg-white xl:rounded-${appRounded} shadow shadow-px shadow-md`}>
				<AppLHS />
				<AppRHS />
			</div>
		</div>
	)
}

function Home() {
	useEffect(() => {
		type DevMode = "development" | "production"
		return Duomo.init(process.env.NODE_ENV as DevMode)
	}, [])

	return (
		// data-debug data-debug-space
		<div className="py-16 xl:pb-64 bg-gray-50">
			<style>{`
				:root {
					--border-color-default: hsl(var(--gray-200));
				}
			`}</style>
			<TopRow />
			<Header />
			<App />
		</div>
	)
}

export default function Router() {
	return (
		<Switch>
			<Route path="/" exact>
				<DocumentTitle title="Feathericons">
					<Home />
				</DocumentTitle>
			</Route>
		</Switch>
	)
}
