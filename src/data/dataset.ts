import * as Feather from "react-feather"
import tags from "data/tags"
import { IIcon } from "types"
import { kebabCase } from "lodash"

// NOTE: FOR THE LOVE OF GOD KEYS MUST BE SORTED. DO NOT REMOVE SORT.
const dataset: IIcon[] = Object.keys(Feather)
	.sort()
	.map(each => ({
		name: {
			title: each,
			kebab: kebabCase(each),
		},
		tags: [],
		svgs: {
			stroke: (Feather as Record<string, React.FC<Feather.Props>>)[each],
		},
		new: false,
	}))

// Ex:
//
// "zoom" -> ["zoom"]
// "zoom-out" -> ["zoom-out", "zoomout", "zoom", "out"]
//
function parseTags(name: string) {
	const tags = name.split("-")
	if (tags.length === 1) {
		return tags
	}
	return [name, tags.join(""), ...tags]
}

;(() => {
	for (const each of dataset) {
		const parsed = parseTags(each.name.kebab)
		;(tags[each.name.kebab] || []).forEach(each => {
			parsed.push(...parseTags(each))
		})
		// https://stackoverflow.com/a/48647301
		const deduped = Array.from(new Set(parsed))
		each.tags.push(...deduped)
	}
})()

export default dataset
