import React from "react"

// TODO: Add `<Prose>` to `@zaydek/prose/runtime`.

// TODO: Can we use `as`?
interface ProseProps extends React.ComponentProps<"div"> {
	as?: string
	children?: React.ReactNode
}

// Ex:
//
// <Prose as="article">
//   {children}
// </Prose>
//
export default function Prose({ as, children, ...props }: ProseProps) {
	return React.createElement(
		as || "div",
		{
			className: "prose",
			...props, // TODO: Add to <AspectRatio>
		},
		children,
	)
}
