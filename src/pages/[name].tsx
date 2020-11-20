import App from "../components/App"
import IconInfo from "../components/IconInfo"
import { datasetAsArr } from "../data/dataset"
import { GetStaticPropsContext } from "next"

export default function IconPage({ name }: { name: string }) {
	// prettier-ignore
	return <App><IconInfo name={name} /></App>
}

// `getStaticProps` forwards parameters as props.
export async function getStaticProps(context: GetStaticPropsContext) {
	return { props: context.params }
}

// `getStaticPaths` enumerates pages as parameters.
export async function getStaticPaths() {
	return {
		paths: datasetAsArr.map(each => ({
			params: {
				name: each.name,
			},
		})),
		fallback: false,
	}
}
