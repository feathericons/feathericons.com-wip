import * as Feather from "react-feather"
import tags from "./tags.json"
import { IDataset } from "../types"
import { toKebabCase } from "@zaydek/lib/dist/helpers"

interface Lookup {
	[key: string]: string[]
}

const kebabCaseKeys = Object.keys(Feather).map(each => toKebabCase(each))

function common(tags1: string[], tags2: string[]) {
	for (const t1 of tags1) {
		for (const t2 of tags2) {
			if (t1 === t2) {
				return true
			}
		}
	}
	return false
}

const tagsInCommon: Lookup = kebabCaseKeys.reduce<Lookup>((acc, name1) => {
	acc[name1] = Object.keys(tags).reduce<string[]>((acc, name2) => {
		if (name1 !== name2) {
			if (common((tags as Lookup)[name1] || [], (tags as Lookup)[name2] || [])) {
				return [...acc, name2]
			}
		}
		return acc
	}, [])
	return acc
}, {})

;(() => {
	const dataset_raw = kebabCaseKeys.reduce<IDataset>((acc, each) => {
		acc[each] = {
			name: each,
			tags: (tags as Lookup)[each] || [],
			more: tagsInCommon[each] || [],
		}
		return acc
	}, {})

	console.log(JSON.stringify(dataset_raw, null, "\t"))
})()
