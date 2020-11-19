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

interface IIconMap {
	[key: string]: IIcon
}

// Expands and dedupes one-off tags.
//
// Ex:
//
// "zoom" -> ["zoom"]
// "zoom-out" -> ["zoom-out", "zoomout", "zoom", "out"]
//
function expandTags(tag: string) {
	const tags = tag.split("-")
	if (tags.length === 1) {
		return tags
	}
	const set = new Set(...[tag, tags.join(""), ...tags])
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

const datasetMap = Object.keys(Feather).reduce<IIconMap>((acc, each) => {
	acc[each] = {
		name: {
			title: each,
			kebab: kebabCase(each),
		},
		tags: getExpandedTags(kebabCase(each)),
		common: [], // TODO
	}
	return acc
}, {})

console.log(datasetMap)
