// https://github.com/feathericons/feathericons.com/blob/6140001196bbe5a8a82c7378abbb4aefab8c5326/src/utils/logDownload.js
export default function logDownload(label) {
	if (typeof window.ga === "function") {
		window.ga("send", "event", {
			eventCategory: "download",
			eventAction: "click",
			eventLabel: label,
		})
	}
}
