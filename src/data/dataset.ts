import * as Feather from "react-feather"
import searchTags from "data/searchTags"
import { IIcon } from "types"
import { kebabCase } from "lodash"

// TODO: Check `GitHub` vs. `Github`.

// NOTE: FOR THE LOVE OF GOD KEYS MUST BE SORTED. DO NOT REMOVE SORT.
const dataset: IIcon[] = Object.keys(Feather)
	.sort()
	.map(each => ({
		title: each,
		kebab: kebabCase(each),
		searchTags: [],
		svg: (Feather as Record<string, React.FC<Feather.Props>>)[each],
		statusNew: false,
	}))

// Ex:
//
// "zoom" -> ["zoom"]
// "zoom-out" -> ["zoom-out", "zoomout", "zoom", "out"]
//
function parseTags(name: string) {
	const searchTags = name.split("-")
	if (searchTags.length === 1) {
		return searchTags
	}
	return [name, searchTags.join(""), ...searchTags]
}

;(() => {
	for (const each of dataset) {
		const parsed = parseTags(each.kebab)
		;(searchTags[each.kebab] || []).forEach(each => {
			parsed.push(...parseTags(each))
		})
		// https://stackoverflow.com/a/48647301
		const deduped = Array.from(new Set(parsed))
		each.searchTags.push(...deduped)
	}
})()

export default dataset
