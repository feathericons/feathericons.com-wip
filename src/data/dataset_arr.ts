import dataset from "./dataset.json"
import { IDataset } from "../types"

// TODO: Sort keys?
export default Object.keys(dataset).map(each => (dataset as IDataset)[each])
