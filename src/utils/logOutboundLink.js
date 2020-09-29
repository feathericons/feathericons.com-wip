// https://github.com/feathericons/feathericons.com/blob/6140001196bbe5a8a82c7378abbb4aefab8c5326/src/utils/logOutboundLink.js
export default function logOutboundLink(label) {
	if (typeof window.ga === "function") {
		window.ga("send", "event", {
			eventCategory: "outbound link",
			eventAction: "click",
			eventLabel: label,
		})
	}
}
