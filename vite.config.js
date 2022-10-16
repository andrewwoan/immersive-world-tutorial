import glsl from "vite-plugin-glsl";
import { defineConfig } from "vite";

export default defineConfig({
    root: "app",
    publicDir: "../public",
    build: {
        outDir: "../dist",
        emptyOutDir: true,
    },
    plugins: [glsl()],
});
