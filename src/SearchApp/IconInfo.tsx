import Docs from "./docs.mdx"
import React from "react"
import { MDXProvider as MarkdownProvider } from "@mdx-js/react"

export default function IconInfo() {
	return (
		<MarkdownProvider components={{} /* TODO */}>
			<Docs />
		</MarkdownProvider>
	)
}
