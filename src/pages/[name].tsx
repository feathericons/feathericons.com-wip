import AppBackpack from "components/AppBackpack"
import datasetAsArray from "data/datasetAsArray"
import IconInfo from "components/IconInfo"
import { GetStaticPropsContext } from "next"
// import dataset from "data/dataset"

// <AppWrapper>
// 	<IconInfo icon={dataset.find(each => each.name.kebab === name)!} />
// </AppWrapper>

export default function IconPage({ name }: { name: string }) {
	return (
		<AppBackpack>
			<IconInfo name={name} />
		</AppBackpack>
	)
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
