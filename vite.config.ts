import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import deno from "@deno/vite-plugin";
import tailwind from "tailwindcss";

// https://vite.dev/config/
export default defineConfig({
  plugins: [deno(), preact()],
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
});
