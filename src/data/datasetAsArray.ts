import dataset from "./dataset.json"
import { IIcon } from "types"

// TODO: Sort keys?
console.log(Object.keys(dataset).map(each => (dataset as { [key: string]: IIcon })[each]))
export default Object.keys(dataset).map(each => (dataset as { [key: string]: IIcon })[each])
