import * as Feather from "react-feather"
import tags from "data/tags"
import { Icon } from "types"
import { kebabCase } from "lodash"

// TODO: Warning: Text content did not match. Server: "arrow-down" Client: "arrow-down-circle"
const dataset: Icon[] = Object.keys(Feather).map(each => ({
	name: kebabCase(each),
	tags: [],
	svgs: {
		// TODO: Use [key: string]: React.FC<Feather.Props>)?
		stroke: (Feather as any)[each],
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
		const parsed = parseTags(each.name)
		;(tags[each.name] || []).forEach(each => {
			parsed.push(...parseTags(each))
		})
		// https://stackoverflow.com/a/48647301
		const deduped = Array.from(new Set(parsed))
		each.tags.push(...deduped)
	}
})()

export default dataset
