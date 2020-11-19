import * as Feather from "feather"

export interface IFeather {
	[key: string]: React.FC<Feather.Props>
}

export interface IIcon {
	name: string
	tags: string[]
	more: string[]
}
