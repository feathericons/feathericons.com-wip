export default function Icon(props) {
	return <>Hello from {props.iconName}</>
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
