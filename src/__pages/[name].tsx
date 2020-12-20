import App from "../components/App"
import IconPage from "../components/IconPage"
import { datasetAsArr } from "../data/dataset"
import { GetStaticPropsContext } from "next"

// function corrected(name: string) {
// 	if (name === "git-hub") {
// 		return "github"
// 	}
// 	return name
// }
//
// name === "github" ? "git-hub" : name

export default function Component({ name }: { name: string }) {
	// prettier-ignore
	return <App><IconPage name={name} /></App>
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
				// name: corrected(each.name),
				name: each.name,
			},
		})),
		fallback: false,
	}
}
