import IconInfo from "../components/IconInfo"
import PageWrapper from "../components/PageWrapper"
import dataset from "../data/dataset"

export default function Top(props) {
	return (
		<PageWrapper>
			<IconInfo icon={dataset.find(each => each.name === props.iconName)} />
		</PageWrapper>
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
