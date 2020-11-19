import * as Feather from "react-feather"
import tags from "./tags.json"
import { IIcon } from "../types"
import { toKebabCase, toTitleCase } from "@zaydek/lib/dist/helpers"

interface StringToStrings {
	[key: string]: string[]
}

// NOTE: Keys are expected to be sorted.
const sortedKebabFeatherKeys = Object.keys(Feather)
	.sort()
	.map(each => toKebabCase(each))

// NOTE: Keys are expected to be sorted.
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
	const found = (tags as StringToStrings)[name]
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
const precomputedTags: StringToStrings = sortedKebabFeatherKeys.reduce<StringToStrings>((acc, each) => {
	acc[each] = getExpandedTags(each)
	return acc
}, {})

function compareTagsInCommon(arr1: string[], arr2: string[]) {
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
const precomputedHasTagsInCommon: StringToStrings = sortedKebabFeatherKeys.reduce<StringToStrings>((acc, each) => {
	acc[each] = Object.keys(tags).reduce<string[]>((acc, compare) => {
		if (each !== compare) {
			if (compareTagsInCommon((tags as StringToStrings)[each] || [], (tags as StringToStrings)[compare] || [])) {
				acc.push(toTitleCase(compare))
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
		tags: precomputedTags[toKebabCase(each)],
		hasTagsInCommon: precomputedHasTagsInCommon[toKebabCase(each)],
	}
	return acc
}, {})

;(() => {
	console.log(JSON.stringify(dataset, null, "\t"))
})()
