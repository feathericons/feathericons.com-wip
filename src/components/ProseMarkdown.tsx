import Markdown from "markdown-to-jsx"
import Prose from "components/Prose"
import React from "react"
import { reduceEachLeadingCommentRange } from "typescript"

// import remarkGFM from "remark-gfm"
// import remarkParse from "remark-parse"
// import remarkReact from "remark-react"
// import unified from "unified"

// Ex:
//
// const str = `
//   #foo {
//     bar: baz;
//   }
// `
// detab(str) // "#foo {\n\tbar: baz;\n}"
//
function detab(str: string) {
	let str2 = str
	// ^\n
	if (str2.length > 0 && str2[0] === "\n") {
		str2 = str2.slice(1)
	}
	// \n$
	if (str2.length > 0 && str[str.length - 1] === "\n") {
		str = str2.slice(0, -1)
	}
	// Iterate to non-tab:
	let tabCount = 0
	for (let x = 0; x < str2.length; x++) {
		if (str2[x] !== "\t") {
			// No-op
			break
		}
		tabCount++
	}
	if (tabCount > 0) {
		// prettier-ignore
		str2 = str2.split("\n").map(each => each.slice(tabCount)).join("\n")
	}
	return str2
}

interface ProseMarkdownProps {
	components?: { [key: string]: React.ReactComponentElement<any> | string }
	markdown?: string
	children?: string
}

enum HeaderTags {
	h1 = "h1",
	h2 = "h2",
	h3 = "h3",
	h4 = "h4",
	h5 = "h5",
	h6 = "h6",
}

// NOTE: Uses `h1` as a placeholder.
interface AnchorHeaderProps extends React.ComponentProps<"h1"> {
	tag: HeaderTags
	id: string
	children?: React.ReactNode
}

function AnchorHeader({ tag, id, children, ...props }: AnchorHeaderProps) {
	return React.createElement(
		tag,
		{
			id,
			...props,
		},
		<a href={"#" + id}>{children}</a>,
	)
}

export default function ProseMarkdown({ markdown, components, children }: ProseMarkdownProps) {
	const detabbed = detab(markdown || children || "")
	return (
		<Prose>
			<Markdown
				options={{
					// TODO https://github.com/zaydek/lib/issues/4
					overrides: {
						h1: {
							component: AnchorHeader,
							props: { tag: "h1" },
						},
						h2: {
							component: AnchorHeader,
							props: { tag: "h2" },
						},
						h3: {
							component: AnchorHeader,
							props: { tag: "h3" },
						},
						h4: {
							component: AnchorHeader,
							props: { tag: "h4" },
						},
						h5: {
							component: AnchorHeader,
							props: { tag: "h5" },
						},
						h6: {
							component: AnchorHeader,
							props: { tag: "h6" },
						},
					},
				}}
			>
				{detabbed}
			</Markdown>
		</Prose>
	)
}
