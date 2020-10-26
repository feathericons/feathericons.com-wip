// import Link from "next/link"

import AppWrapper from "../components/AppWrapper"
import dataset from "../data/dataset"

export default function Top(props) {
	return (
		// prettier-ignore
		<AppWrapper>
			{props.iconName}
		</AppWrapper>
	)
}

// getStaticProps forwards params as props.
export async function getStaticProps(ctx) {
	return { props: ctx.params }
}

// getStaticPaths enumerates pages as params.
export async function getStaticPaths() {
	return {
		paths: dataset.map(each => ({
			params: { iconName: each.name },
		})),
		fallback: false,
	}
}
