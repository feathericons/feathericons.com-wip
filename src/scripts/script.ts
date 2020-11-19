import * as Feather from "react-feather"
import { IIcon } from "../types"
import { kebabCase } from "lodash"

// https://stackoverflow.com/a/55490934
const tags: { [key: string]: string[] } = require("./tags.json")

interface StringToStringArray {
	[key: string]: string[]
}

// NOTE: FOR THE LOVE OF GOD KEYS MUST BE SORTED. DO NOT REMOVE SORT.
const sortedKebabFeatherKeys = Object.keys(Feather)
	.sort()
	.map(each => kebabCase(each))
const sortedFeatherKeys = Object.keys(Feather).sort()

// Expands and dedupes one-off tags.
//
// Ex:
//
// "zoom" -> ["zoom"]
// "zoom-out" -> ["zoom-out", "zoom", "out"]
//
function expandTags(tag: string) {
	const tags = tag.split(/[- ]/)
	if (tags.length === 1) {
		return tags
	}
	const set = new Set([tag, ...tags])
	return [...set]
}

// Expands and dedupes sets of tags.
function getExpandedTags(name: string) {
	const found = tags[name]
	if (!found) {
		return []
	}
	const set = found.reduce<Set<string>>((acc, each) => {
		const expandedTags = expandTags(each)
		expandedTags.forEach(each => {
			acc.add(each)
		})
		return acc
	}, new Set())
	return [...set]
}

// Precomputes expanded sets of tags.
const precomputedTags: StringToStringArray = sortedKebabFeatherKeys.reduce<StringToStringArray>((acc, each) => {
	acc[each] = getExpandedTags(each)
	return acc
}, {})

// Returns whether two arrays have elements in common.
function hasElementsInCommon(arr1: string[], arr2: string[]) {
	for (const e1 of arr1) {
		for (const e2 of arr2) {
			if (e1 === e2) {
				return true
			}
		}
	}
	return false
}

// Precomputes common tags.
const precomputedCommon: StringToStringArray = sortedKebabFeatherKeys.reduce<StringToStringArray>((acc, each) => {
	acc[each] = Object.keys(tags).reduce<string[]>((acc, compare) => {
		if (each !== compare) {
			if (hasElementsInCommon(tags[each] || [], tags[compare] || [])) {
				acc.push(compare)
			}
		}
		return acc
	}, [])

	return acc
}, {})

interface IDataset {
	[key: string]: IIcon
}

const dataset = sortedFeatherKeys.reduce<IDataset>((acc, each) => {
	acc[each] = {
		name: {
			title: each,
			kebab: kebabCase(each),
		},
		tags: precomputedTags[kebabCase(each)],
		common: precomputedCommon[kebabCase(each)],
	}
	return acc
}, {})

;(() => {
	console.log(JSON.stringify(dataset, null, "\t"))
})()
