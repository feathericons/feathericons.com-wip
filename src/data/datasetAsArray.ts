import dataset from "./dataset.json"
import { IIcon } from "types"

export default Object.keys(dataset).map(each => (dataset as { [key: string]: IIcon })[each])
