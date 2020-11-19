import datasetAsArray from "data/datasetAsArray"
import { GetStaticPropsContext } from "next"

// <AppWrapper>
// 	<IconInfo icon={dataset.find(each => each.name.kebab === name)!} />
// </AppWrapper>

export default function IconPage({ name }: { name: string }) {
	return <>{name}</>
}

// `getStaticProps` forwards parameters as props.
export async function getStaticProps(context: GetStaticPropsContext) {
	return { props: context.params }
}

// `getStaticPaths` enumerates pages as parameters.
export async function getStaticPaths() {
	return {
		paths: datasetAsArray.map(each => ({
			params: {
				name: each.name.kebab,
			},
		})),
		fallback: false,
	}
}
