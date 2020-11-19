import * as Feather from "react-feather"
import tags from "./tags"
import { kebabCase } from "lodash"

interface StringToStringArray {
	[key: string]: string[]
}

const kebabFeatherKeys = Object.keys(Feather).map(each => kebabCase(each))

// prettier-ignore
interface IIcon {
	name: {
		title: string,  // -> "ArrowRight"
		kebab: string,  // -> "arrow-right"
	}
	tags: string[],   // -> ["arrow", "right"]
	common: string[], // -> ["arrow-up", "arrow-down", "arrow-left"]
}

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
const precomputedTags: StringToStringArray = kebabFeatherKeys.reduce<StringToStringArray>((acc, each) => {
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
const precomputedCommon: StringToStringArray = kebabFeatherKeys.reduce<StringToStringArray>((acc, each) => {
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

const dataset = Object.keys(Feather).reduce<IDataset>((acc, each) => {
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
