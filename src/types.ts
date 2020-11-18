import Feather from "react-feather"

export interface IIcon {
	name: {
		kebabCase: string
		titleCase: string
	}
	searchTags: string[]
	svgs: {
		stroke: React.FC<Feather.Props>
	}
	statusNew: boolean
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
