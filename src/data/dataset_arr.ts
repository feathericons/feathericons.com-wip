import dataset from "./dataset.json"
import { IDataset } from "../types"

export default Object.keys(dataset).map(each => (dataset as IDataset)[each])
