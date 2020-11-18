import Feather from "react-feather"

// prettier-ignore
export interface IIcon {
	title:      string
	kebab:      string
	searchTags: string[]
	svg:        React.FC<Feather.Props>
	statusNew:  boolean
}

// TODO: Do we need this?
export interface ISearchTags {
	[key: string]: string[]
}

// prettier-ignore
export interface ISponsor {
	name:    string
	href:    string
	src:     string
	subtext: string
}
