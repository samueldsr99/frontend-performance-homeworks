import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { resolve } from "path";

export default defineConfig({
  base: "/",
  plugins: [ViteImageOptimizer({})],
  publicDir: "public",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        contact: resolve(__dirname, "contact.html"),
        menu: resolve(__dirname, "menu.html"),
        "news-detail": resolve(__dirname, "news-detail.html"),
        news: resolve(__dirname, "news.html"),
      },

      output: {
        entryFileNames: "[name]-[hash].js",
        chunkFileNames: "chunks/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
      },
    },
  },
});
