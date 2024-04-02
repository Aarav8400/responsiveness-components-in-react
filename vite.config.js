import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    cleanCss: true,
    clearScreen: true, // Optionally clear terminal on build
  },
});
