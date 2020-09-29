import download from "downloadjs"
import Zip from "jszip"
import { icons } from "feather-icons"

// https://github.com/feathericons/feathericons.com/blob/335d6f5e814eb71e38db4ad4e810ed46f6e3cc3b/src/components/Hero.js
export default async function asyncDownloadAll() {
	const zip = new Zip()
	Object.values(icons).forEach(icon => zip.file(`${icon.name}.svg`, icon.toSvg()))
	const file = await zip.generateAsync({ type: "blob" })
	download(file, "feather.zip")
}
