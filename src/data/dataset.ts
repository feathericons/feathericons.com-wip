import rawJSON from "./raw.json"
import { IDataset } from "../types"

export const datasetAsMap = rawJSON as IDataset
export const datasetAsArr = Object.keys(datasetAsMap).map(each => datasetAsMap[each])
