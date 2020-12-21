import App from "../App"
import React from "react"

interface DocumentProps {
	metadata?: React.ReactNode
}

export default function Document({ metadata }: DocumentProps) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{metadata}
				<link rel="stylesheet" href="/stylesheets/duomo.css" />
				<link rel="stylesheet" href="/stylesheets/app.css" />
				{/* <script src="https://unpkg.com/@zaydek/duomo@0.7.7/dist/browser"></script> */}
				<script
					dangerouslySetInnerHTML={{
						__html: `
(() => {
  // src/runtime/runtime.ts
  var themePreferenceKey = "duomo-theme-preference";
  function LSPrefersDarkMode() {
    const ok = themePreferenceKey in window.localStorage && window.localStorage[themePreferenceKey] === "dark";
    return ok;
  }
  function OSPrefersDarkMode() {
    const ok = "matchMedia" in window && window.matchMedia("(prefers-color-scheme: dark)").matches;
    return ok;
  }
  var Duomo = {
    init(mode = "production") {
      const html = document.documentElement;
      const deferers = [];
      console.log("[Duomo] init=true");
      if (LSPrefersDarkMode() || !OSPrefersDarkMode()) {
        html.setAttribute("data-theme", "dark");
      }
      if ("matchMedia" in window) {
        const media = window.matchMedia("(prefers-color-scheme: dark)");
        const handleMedia = () => {
          Duomo.toggleDarkMode();
        };
        media.addListener(handleMedia);
        deferers.push(() => media.removeListener(handleMedia));
      }
      if (mode !== "production") {
        const handleKeyDownDebugMode = (e) => {
          if (!e.ctrlKey && !e.altKey && (e.key.toLowerCase() === "d" || e.keyCode === 68)) {
            Duomo.toggleDebugMode();
          }
        };
        document.addEventListener("keydown", handleKeyDownDebugMode);
        deferers.push(() => document.removeEventListener("keydown", handleKeyDownDebugMode));
        const handleKeyDownDebugSpaceMode = (e) => {
          if (!e.ctrlKey && e.altKey && (e.key.toLowerCase() === "d" || e.keyCode === 68)) {
            Duomo.toggleDebugSpaceMode();
          }
        };
        document.addEventListener("keydown", handleKeyDownDebugSpaceMode);
        deferers.push(() => document.removeEventListener("keydown", handleKeyDownDebugSpaceMode));
        const handleKeyDownDarkMode = (e) => {
          if (e.ctrlKey && !e.altKey && (e.key.toLowerCase() === "d" || e.keyCode === 68)) {
            Duomo.toggleDarkMode();
          }
        };
        document.addEventListener("keydown", handleKeyDownDarkMode);
        deferers.push(() => document.removeEventListener("keydown", handleKeyDownDarkMode));
      }
      return () => {
        console.log("[Duomo] init=false");
        deferers.reverse().forEach((defer) => defer());
      };
    },
    toggleDebugMode() {
      const html = document.documentElement;
      const hasAttribute = html.hasAttribute("data-debug");
      if (!hasAttribute) {
        console.log("[Duomo] debugMode=on");
        html.setAttribute("data-debug", "true");
      } else {
        console.log("[Duomo] debugMode=off");
        html.removeAttribute("data-debug");
      }
    },
    toggleDebugSpaceMode() {
      const html = document.documentElement;
      const hasAttribute = html.hasAttribute("data-debug-space");
      if (!hasAttribute) {
        console.log("[Duomo] debugSpaceMode=on");
        html.setAttribute("data-debug-space", "true");
      } else {
        console.log("[Duomo] debugSpaceMode=off");
        html.removeAttribute("data-debug-space");
      }
    },
    toggleDarkMode() {
      const html = document.documentElement;
      html.setAttribute("data-theme-effect", "true");
      setTimeout(() => {
        const hasAttribute = html.hasAttribute("data-theme");
        if (!hasAttribute) {
          console.log("[Duomo] darkMode=on");
          html.setAttribute("data-theme", "dark");
          window.localStorage.setItem(themePreferenceKey, "dark");
        } else {
          console.log("[Duomo] darkMode=off");
          html.removeAttribute("data-theme");
          window.localStorage.setItem(themePreferenceKey, "light");
        }
        setTimeout(() => {
          html.removeAttribute("data-theme-effect");
        }, 300);
      }, 25);
    }
  };
  (() => {
    if (typeof window !== "undefined") {
      window.Duomo = Duomo;
    }
  })();
  var runtime_default = Duomo;
})();
window.Duomo.init(${JSON.stringify(process.env.NODE_ENV)})
`,
					}}
				></script>
				{/* <script
					dangerouslySetInnerHTML={{ __html: `window.Duomo.init(${JSON.stringify(process.env.NODE_ENV)})` }}
				></script> */}
				<script dangerouslySetInnerHTML={{ __html: "// https://stackoverflow.com/a/42969608" }}></script>
			</head>
			<body>
				<noscript>You need to enable JavaScript to run this app.</noscript>
				<div id="root">
					<App />
				</div>
				<script src="/script.js"></script>
			</body>
		</html>
	)
}
