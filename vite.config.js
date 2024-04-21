// vite.config.js
import { defineConfig } from "vite";
import { shadowStyle } from "vite-plugin-shadow-style";
import shadowDomCss from "vite-plugin-shadow-dom-css";

export default defineConfig({
  plugins: [
    {
      ...shadowStyle(),
      apply: "build",
    },
    {
      ...shadowDomCss.default(),
      apply: "build",
    },
  ],
});
