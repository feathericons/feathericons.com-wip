// https://github.com/feathericons/feathericons.com/blob/6140001196bbe5a8a82c7378abbb4aefab8c5326/src/utils/logCopy.js
export default function logCopy(label) {
	if (typeof window.ga === "function") {
		window.ga("send", "event", {
			eventCategory: "copy",
			eventAction: "click",
			eventLabel: label,
		})
	}
}
