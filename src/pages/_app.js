import "stylesheets/tailwind-css/tailwind.generated.css"
import "stylesheets/tailwind-css/experimental-color-vars.css"

// TODO: Deprecate?
import "./_custom.css"

const App = ({ Component, pageProps }) => (
	<Component {...pageProps} />
)

export default App
