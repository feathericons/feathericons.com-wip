import App from "../components/App"
import dataset_arr from "../data/dataset_arr"
import IconInfo from "../components/IconInfo"
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
		paths: dataset_arr.map(each => ({
			params: {
				name: each.name,
			},
		})),
		fallback: false,
	}
}
