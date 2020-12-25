import Docs from "./docs.mdx"
import React from "react"
import { MDXProvider as MarkdownProvider } from "@mdx-js/react"
import { rem } from "@zaydek/duomo/dist/runtime"

// components={{
// 	KebabCase: () => name,
// 	BentoBox: () => <BentoBox SVG={SVG} />,
// 	Demos: () => <Demos SVG={SVG} />,
// 	More: () =>
// 		!metadata.more.length ? null : (
// 			<>
// 				<br />
// 				<h2>
// 					More Icons Like <code>{name}</code>
// 				</h2>
// 				<div>
// 					<More name={name} />
// 				</div>
// 			</>
// 		),
// }}

function BentoBox() {
	// prettier-ignore
	const ratios = [
		Math.round(24 * 1.67 * 1.67 * 1.67),
		Math.round(24 * 1.67 * 1.67),
		Math.round(24 * 1.67),
		24,
	]

	return (
		<div className="bento">
			<div className="hstack bento-item">
				<div className="bento-item-svg" style={{ width: rem(ratios[0]!), height: rem(ratios[0]!) }}>
					hello
				</div>
			</div>
			<div className="hstack hidden lg:unhidden bento-item">
				<div className="bento-item-svg" style={{ width: rem(ratios[1]!), height: rem(ratios[1]!) }}>
					hello
				</div>
			</div>
			<div className="hstack hidden lg:unhidden bento-item">
				<div className="bento-item-svg" style={{ width: rem(ratios[2]!), height: rem(ratios[2]!) }}>
					hello
				</div>
			</div>
			<div className="hstack hidden lg:unhidden bento-item">
				<div className="bento-item-svg" style={{ width: rem(ratios[3]!), height: rem(ratios[3]!) }}>
					hello
				</div>
			</div>
		</div>
	)
}

function Demo1() {
	// prettier-ignore
	const ratios = [
		16,
		16 * 1.5,
		16 * 1.5 * 1.5,
		16 * 1.5 * 1.5 *1.5,
	]

	return (
		<div className="vstack border-1 rounded-6">
			<div className="hstack space-24">
				{ratios.map(each => (
					// <div style={{ width: rem(each), height: rem(each) }}>h</div>
					<div className="bg-gray-800 rounded-full" style={{ width: rem(each), height: rem(each) }}></div>
				))}
			</div>
		</div>
	)
}

function Demo3() {
	return (
		<div className="vstack border-1 rounded-6">
			<div className="vstack space-8">
				<div
					className="hstack space-12 px-24 py-12 w-192 rounded-8 shadow shadow-px shadow-md"
					style={{ backgroundColor: "#1da1f2" }}
				>
					{/* <SVG className="w-20 h-20 text-white" /> */}
					<div className="w-20 h-20 bg-white rounded-full"></div>
					<div className="weight-500 text-18 color-white">Follow me</div>
				</div>
			</div>
		</div>
	)
}

function Demos() {
	return (
		<div
			className="grid gap-12"
			style={{ gridTemplateColumns: `repeat(auto-fill, minmax(${rem(256)}, 1fr))`, gridAutoRows: rem(160) }}
		>
			<Demo1 />
			<Demo3 />
		</div>
	)
}

export default function IconInfo() {
	return (
		<div className="prose">
			<MarkdownProvider
				components={{
					KebabCase: () => "github",
					BentoBox,
					Demos,
				}}
			>
				<Docs />
			</MarkdownProvider>
		</div>
	)
}
