module.exports = {
	// TODO: Remove corePlugins for production.
	corePlugins: {
		preflight: true,
		container: false,
		accessibility: false,
		alignContent: true,
		alignItems: true,
		alignSelf: true,
		animation: false,
		appearance: true,
		backgroundAttachment: false,
		backgroundClip: false,
		backgroundColor: true,
		backgroundImage: false,
		backgroundOpacity: false,
		backgroundPosition: false,
		backgroundRepeat: false,
		backgroundSize: false,
		borderCollapse: false,
		borderColor: false,
		borderOpacity: false,
		borderRadius: true,
		borderStyle: false,
		borderWidth: false,
		boxShadow: true,
		boxSizing: false,
		clear: false,
		cursor: true,
		display: true,
		divideColor: false,
		divideOpacity: false,
		divideStyle: false,
		divideWidth: false,
		fill: true,
		flex: true,
		flexDirection: true,
		flexGrow: true,
		flexShrink: true,
		flexWrap: true,
		float: false,
		fontFamily: true,
		fontSize: true,
		fontSmoothing: true,
		fontStyle: true,
		fontVariantNumeric: true,
		fontWeight: true,
		gap: true,
		gradientColorStops: false,
		gridAutoFlow: false,
		gridColumn: false,
		gridColumnEnd: false,
		gridColumnStart: false,
		gridRow: false,
		gridRowEnd: false,
		gridRowStart: false,
		gridTemplateColumns: false,
		gridTemplateRows: false,
		height: true,
		inset: true,
		justifyContent: true,
		justifyItems: true,
		justifySelf: true,
		letterSpacing: true,
		lineHeight: true,
		listStylePosition: false,
		listStyleType: false,
		margin: true,
		maxHeight: true,
		maxWidth: true,
		minHeight: true,
		minWidth: true,
		objectFit: false,
		objectPosition: false,
		opacity: true,
		order: true,
		outline: false,
		overflow: true,
		overscrollBehavior: false,
		padding: true,
		placeContent: false,
		placeholderColor: false,
		placeholderOpacity: false,
		placeItems: false,
		placeSelf: false,
		pointerEvents: true,
		position: true,
		resize: false,
		rotate: false,
		scale: false,
		skew: false,
		space: true, // ??
		stroke: true,
		strokeWidth: false,
		tableLayout: false,
		textAlign: true,
		textColor: true,
		textDecoration: true,
		textOpacity: true,
		textTransform: true,
		transform: false,
		transformOrigin: false,
		transitionDelay: false,
		transitionDuration: false,
		transitionProperty: false,
		transitionTimingFunction: false,
		translate: false,
		userSelect: true,
		verticalAlign: true,
		visibility: false,
		whitespace: true,
		width: true,
		wordBreak: false,
		zIndex: true,
	},

	// dark: "class",
	experimental: {
		// darkModeVariant: true,
		uniformColorPalette: true,
	},
	// future: {
	// 	removeDeprecatedGapUtilities: true,
	// 	purgeLayersByDefault: true,
	// },
	purge: [],
	theme: {
		extend: {},
	},
	variants: {
		typography: {},
	},
	plugins: [
		require("@tailwindcss/ui"),
	],
}
