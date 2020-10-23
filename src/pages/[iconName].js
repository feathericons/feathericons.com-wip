import Link from "next/link"

export default function Icon(props) {
	return (
		<>
			<Link href="/">
				<a>Back to home</a>
			</Link>
			<div></div>
			<div>Welcome to {props.iconName}</div>
		</>
	)
}

// getStaticProps forwards params as props.
export async function getStaticProps(ctx) {
	return { props: ctx.params }
}

// getStaticPaths enumerates pages as params.
export async function getStaticPaths() {
	return {
		// prettier-ignore
		paths: [
			{ params: { iconName: "a" } },
			{ params: { iconName: "b" } },
			{ params: { iconName: "c" } },
		],
		fallback: false,
	}
}
