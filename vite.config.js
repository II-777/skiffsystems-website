import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/", // Ensures correct routing on deployment
  plugins: [
    react(), // Vite React plugin
    svgr()   // SVGR plugin
  ],
  build: {
    sourcemap: true,
  },
  server: {
    historyApiFallback: true, // Ensures React Router works in dev mode
  }
});
