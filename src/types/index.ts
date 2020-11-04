import Feather from "react-feather"

export interface ITags {
	[key: string]: string[]
}

export interface IIcon {
	name: {
		kebab: string
		title: string
	}
	tags: string[]
	svgs: {
		stroke: React.FC<Feather.Props>
	}
	new: boolean
}
