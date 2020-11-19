import * as Feather from "react-feather"
import tags from "./tags.json"
import { IIcon } from "../types"
import { toKebabCase, toTitleCase } from "@zaydek/lib/dist/helpers"

interface Lookup {
	[key: string]: string[]
}

interface Precomputed {
	[key: string]: IIcon
}

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

const kebebCaseFeatherKeys = Object.keys(Feather).map(each => toKebabCase(each))

const tagsInCommon: Lookup = kebebCaseFeatherKeys.reduce<Lookup>((acc, name1) => {
	acc[name1] = Object.keys(tags).reduce<string[]>((acc, name2) => {
		if (name1 !== name2) {
			if (common(tags[name1] || [], tags[name2] || [])) {
				return [...acc, toTitleCase(name2)]
			}
		}
		return acc
	}, [])
	return acc
}, {})

;(() => {
	const dataset = Object.keys(Feather).reduce<Precomputed>((acc, each) => {
		acc[each] = {
			name: each,
			tags: tags[toKebabCase(each)] || [],
			more: tagsInCommon[toKebabCase(each)] || [],
		}
		return acc
	}, {})
	console.log(JSON.stringify(dataset, null, "\t"))
})()
