import dataset from "./dataset_map"
import { IDataset } from "../types"

export default Object.keys(dataset).map(each => (dataset as IDataset)[each])
