import "stylesheets/tailwind/out.css" // Takes precedence
import "stylesheets/tailwind/color-vars.css"
import "stylesheets/tailwind/shadow-vars.css"

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />
}

export default MyApp
