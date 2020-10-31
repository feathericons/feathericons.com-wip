import AppWrapper from "components/AppWrapper"
import dataset from "data/dataset"
import IconInfo from "components/IconInfo"
import { GetStaticPropsContext } from "next"

interface IconPageProps {
	iconName: string
}

export default function IconPage({ iconName }: IconPageProps) {
	return (
		<AppWrapper>
			<IconInfo iconInfo={dataset.find(each => each.name === iconName)!} />
		</AppWrapper>
	)
}

// `getStaticProps` forwards parameters as props.
export async function getStaticProps(context: GetStaticPropsContext) {
	return { props: context.params }
}

// `getStaticPaths` enumerates pages as parameters.
export async function getStaticPaths() {
	return {
		paths: dataset.map(each => ({
			params: { iconName: each.name },
		})),
		fallback: false,
	}
}
