import * as Feather from "react-feather"

export type IIcon = React.FC<Feather.Props>

// prettier-ignore
export interface IIconMetadata {
	name: string   // "arrow-right"
	tags: string[] // ["arrow", "right", ...]
	more: string[] // ["arrow-top", "arrow-down", "arrow-left", ...]
}

export interface IFeather {
	[key: string]: React.FC<Feather.Props>
}

export interface IDataset {
	[key: string]: IIconMetadata
}
