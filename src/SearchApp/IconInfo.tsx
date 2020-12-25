import Docs from "./docs.mdx"
import React from "react"
import { MDXProvider as MarkdownProvider } from "@mdx-js/react"
import { range } from "../lib"
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

export default function IconInfo() {
	return (
		<div className="prose">
			<MarkdownProvider
				components={{
					KebabCase: () => "github",
					BentoBox,
				}}
			>
				<Docs />
			</MarkdownProvider>
		</div>
	)
}
