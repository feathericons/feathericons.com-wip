(() => {
  // src/runtime/runtime.ts
  function localStoragePreference() {
    if (!(Duomo.localStorageKey in window.localStorage)) {
      return null;
    }
    const value = window.localStorage[Duomo.localStorageKey];
    if (value !== "light" && value !== "dark") {
      return null;
    }
    return value;
  }
  function matchMediaPreference() {
    if (!("matchMedia" in window)) {
      return null;
    }
    const matches = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const value = {
      false: "light",
      true: "dark"
    }["" + matches];
    return value;
  }
  function isKeyDownDarkMode(e) {
    const ok = e.ctrlKey && !e.altKey && (e.key.toLowerCase() === "d" || e.keyCode === 68);
    return ok;
  }
  function isKeyDownDebugMode(e) {
    const ok = !e.ctrlKey && !e.altKey && (e.key.toLowerCase() === "d" || e.keyCode === 68);
    return ok;
  }
  function isKeyDownDebugSpaceMode(e) {
    const ok = !e.ctrlKey && e.altKey && (e.key.toLowerCase() === "d" || e.keyCode === 68);
    return ok;
  }
  var Duomo2 = class {
    constructor() {
      this.#options = {quiet: false};
      this.#html = null;
      this.#darkMode = false;
      this.#debugMode = false;
      this.#debugSpaceMode = false;
      this.#didInitDarkMode = false;
      this.#deferrers = [];
    }
    #options;
    #html;
    #darkMode;
    #debugMode;
    #debugSpaceMode;
    #didInitDarkMode;
    #deferrers;
    __console_log(msg, ...params) {
      if (this.#options.quiet) {
        return;
      }
      console.log(msg, ...params);
    }
    init(env = "development", options = {quiet: false}) {
      this.#options = options;
      this.__console_log("[Duomo] init=true");
      this.#html = document.documentElement;
      const lsPref = localStoragePreference();
      const mmPref = matchMediaPreference();
      if (lsPref || mmPref) {
        this.setDarkMode((lsPref || mmPref) === "dark");
      }
      if (typeof window !== void 0 && "matchMedia" in window) {
        const media = window.matchMedia("(prefers-color-scheme: dark)");
        const handleMedia = () => {
          this.toggleDarkMode();
        };
        media.addListener(handleMedia);
        this.#deferrers.push(() => media.removeListener(handleMedia));
      }
      if (env === "development") {
        const handleDarkMode = (e) => {
          if (isKeyDownDarkMode(e)) {
            this.toggleDarkMode();
          }
        };
        const handleDebugMode = (e) => {
          if (isKeyDownDebugMode(e)) {
            this.toggleDebugMode();
          }
        };
        const handleDebugSpaceMode = (e) => {
          if (isKeyDownDebugSpaceMode(e)) {
            this.toggleDebugSpaceMode();
          }
        };
        document.addEventListener("keydown", handleDarkMode);
        document.addEventListener("keydown", handleDebugMode);
        document.addEventListener("keydown", handleDebugSpaceMode);
        this.#deferrers.push(() => document.removeEventListener("keydown", handleDarkMode));
        this.#deferrers.push(() => document.removeEventListener("keydown", handleDebugMode));
        this.#deferrers.push(() => document.removeEventListener("keydown", handleDebugSpaceMode));
      }
      return () => {
        this.#deferrers.reverse().forEach((defer) => defer());
        this.__console_log("[Duomo] init=false");
      };
    }
    getDarkMode() {
      return this.#darkMode;
    }
    setDarkMode(mode) {
      this.#darkMode = mode;
      const toggle = (mode2) => {
        const action = !mode2 ? () => this.#html.removeAttribute("data-theme") : () => this.#html.setAttribute("data-theme", "dark");
        action();
        window.localStorage.setItem(Duomo2.localStorageKey, !mode2 ? "light" : "dark");
        this.__console_log(`[Duomo] darkMode=${!mode2 ? "off" : "on"}`);
      };
      if (!this.#didInitDarkMode) {
        toggle(mode);
        this.#didInitDarkMode = true;
        return;
      } else {
        this.#html.setAttribute("data-theme-effect", "true");
        setTimeout(() => {
          toggle(mode);
          setTimeout(() => {
            this.#html.removeAttribute("data-theme-effect");
          }, 300);
        }, 25);
      }
    }
    toggleDarkMode() {
      this.setDarkMode(!this.getDarkMode());
    }
    getDebugMode() {
      return this.#debugMode;
    }
    setDebugMode(mode) {
      this.#debugMode = mode;
      const action = !mode ? () => this.#html.removeAttribute("data-debug") : () => this.#html.setAttribute("data-debug", "true");
      action();
      this.__console_log(`[Duomo] debugMode=${!mode ? "off" : "on"}`);
    }
    toggleDebugMode() {
      this.setDebugMode(!this.getDebugMode());
    }
    getDebugSpaceMode() {
      return this.#debugSpaceMode;
    }
    setDebugSpaceMode(mode) {
      this.#debugSpaceMode = mode;
      const action = !mode ? () => this.#html.removeAttribute("data-debug-space") : () => this.#html.setAttribute("data-debug-space", "true");
      action();
      this.__console_log(`[Duomo] debugSpaceMode=${!mode ? "off" : "on"}`);
    }
    toggleDebugSpaceMode() {
      this.setDebugSpaceMode(!this.getDebugSpaceMode());
    }
  };
  var Duomo = Duomo2;
  Duomo.localStorageKey = "duomo-theme-preference";
  (() => {
    if (typeof window !== "undefined") {
      window.Duomo = new Duomo();
    }
  })();
  var runtime_default = Duomo;
})();
