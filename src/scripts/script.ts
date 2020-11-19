import * as Feather from "react-feather"
import tags from "./tags"
import { kebabCase } from "lodash"

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
// "zoom-out" -> ["zoom-out", "zoomout", "zoom", "out"]
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

interface IPrecomputedTags {
	[key: string]: string[]
}

// Precomputes expanded sets of tags.
const precomputedTags: IPrecomputedTags = Object.keys(Feather).reduce<IPrecomputedTags>((acc, each) => {
	acc[each] = getExpandedTags(kebabCase(each))
	return acc
}, {})

interface IDataset {
	[key: string]: IIcon
}

// // Searches for common tags.
// function searchCommon() {}

const dataset = Object.keys(Feather).reduce<IDataset>((acc, each) => {
	acc[each] = {
		name: {
			title: each,
			kebab: kebabCase(each),
		},
		tags: precomputedTags[each],
		common: [], // TODO
	}
	return acc
}, {})

console.log(dataset)
