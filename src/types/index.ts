import * as Feather from "react-feather"

export interface IFeather {
	[key: string]: React.FC<Feather.Props>
}

// prettier-ignore
export interface IIcon {
	name: string   // "arrow-right"
	tags: string[] // ["arrow", "right", ...]
	more: string[] // ["arrow-top", "arrow-down", "arrow-left", ...]
}
