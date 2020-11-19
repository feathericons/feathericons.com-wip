import Feather from "react-feather"

// TODO: Deprecate.
//
// prettier-ignore
export interface IIcon {
	title:      string
	kebab:      string
	searchTags: string[]
	svg:        React.FC<Feather.Props>
	statusNew:  boolean
}

// prettier-ignore
export interface ISponsor {
	name:    string
	href:    string
	src:     string
	subtext: string
}
