import Docs from "./docs.mdx"
import React from "react"
import { MDXProvider as MarkdownProvider } from "@mdx-js/react"

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

export default function IconInfo() {
	return (
		<div className="prose">
			<MarkdownProvider components={{ KebabCase: () => "github" }}>
				<Docs />
			</MarkdownProvider>
		</div>
	)
}
